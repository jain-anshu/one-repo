require_relative 'ping.rb'
require_relative 'vehicle.rb'

class WarehouseServer
    attr_reader :vehicles

    def initialize
        # vehicles is a list of vehicle instances
        @vehicles = []
    end

    # Returns a dictionary from vehicle name to that vehicle's average speed
    # for all vehicles.
    def get_average_speeds
        avg_speeds = Hash.new

        vehicles.each do |vehicle|
          avg_speeds[vehicle.name] = vehicle.get_average_speed
        end

        avg_speeds
    end

    # Returns a sorted list of size max_results of vehicle names
    # corresponding to the vehicles that have traveled the most distance since
    # the given timestamp.
    def get_most_traveled_since(max_results, timestamp)
        # TODO: Implement
        res = []
        vehicles.each do |v|
            #p v.pings
            pings = v.pings.filter{|p| p.timestamp >= timestamp}
            dist = Vehicle.get_total_distance(pings)
            res.push([v.name, dist]) 
        end
        res = res.sort{|a,b| b[1] - a[1]}
        res.map{|a| a[0]}
    end

    # Returns a list of names identifying vehicles that might have been damaged
    # through any number of risky behaviors, including collision with another
    # vehicle and excessive acceleration.

    # if two vehicle's ping list shows same location at the same time that means they collided
    # building a map on the basis of timestamp and plotting various positions on the map
    # from ping's list to efficiently find collisions
    def check_for_collision(time_vs_loc, pings, vehicle1)
        res = []
        pings.each do |p|      
            if time_vs_loc[p.timestamp].nil?
                time_vs_loc[p.timestamp] = []
            else 
                time_vs_loc[p.timestamp].each do |val|
                    vehicle_name = val[0]
                    pos = val[1]
                    if pos == p.position
                        res.push(vehicle_name, vehicle1.name)
                    end    
                end    
            end
            time_vs_loc[p.timestamp] << [vehicle1.name, p.position]     
        end
        res
    end 
       
    def check_for_damage
        #detect collision 
       
        time_vs_loc = {}
        res = []
        vehicles.each do |v|
           res += check_for_collision(time_vs_loc, v.pings, v)
            
        end 
        res
    end

    def initialize_server(file_name)
      File.open(file_name, "r").each_line do |line|
        next if line.empty?

        vehicle_name, x, y, timestamp = line.split(",")
        process_ping(vehicle_name, x.to_f, y.to_f, timestamp.to_i)
      end

      rescue StandardError => e
        puts "Exception populating vehicle data: #{e.inspect}"
    end

    private

    def process_ping(vehicle_name, x, y, timestamp)
        ping = Ping.new(x, y, timestamp)

        if vehicles.length == 0 || vehicle_name != vehicles.last.name
            vehicles << Vehicle.new(vehicle_name)
        end

        vehicles.last.pings << ping
    end
end
