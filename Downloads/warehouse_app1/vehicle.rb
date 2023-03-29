# A named vehicle with a sequence of pings.
class Vehicle
    attr_reader :name, :pings

    def initialize(name)
        # The name of the vehicle.
        @name = name
        # The pings for the vehicle, in chronological order (earliest first).
        @pings = []
    end

    # Determines the total distance covered by the pings.
    def self.get_total_distance(pings)
    
      dist = 0
      (1...pings.length).each do |i|
        ping1 = pings[i - 1]
        ping2 = pings[i]
        position_1 = ping1.position
        position_2 = ping2.position
        dist += Position.get_distance(position_1, position_2)
      end  
      dist
    end

    def self.get_total_time(pings)
        time = 0
        (1...pings.length).each do |i|
          ping1 = pings[i - 1]
          ping2 = pings[i]
          time += Ping.seconds_between(ping1, ping2)
        end  
        time
    end

    # Determines the total distance traveled by the vehicle.
    def get_total_distance
        self.class.get_total_distance pings
    end

    def get_total_time
        self.class.get_total_time pings 
    end
    # Determines the average speed of the vehicle.
    def get_average_speed
        
       return 0 if get_total_time == 0 

       return 0 if get_total_distance == 0

      
       (get_total_time * 1.0 / get_total_distance).round(2)
    end

    def to_s
        "#{name}: #{pings}"
    end
end
