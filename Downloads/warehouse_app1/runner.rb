require_relative 'warehouse_server.rb'

# Initialize WarehouseServer instance.
warehouse_server = WarehouseServer.new
warehouse_server.initialize_server("warehouse_pings.csv")
puts "~~~WarehouseServer is initialized."
puts

puts "Average Speeds: " + warehouse_server.get_average_speeds.to_s
puts

puts "The 3 most traveled vehicles since 1553273158 are: "
puts warehouse_server.get_most_traveled_since(3, 1553273158)

puts "Vehicles possibly damaged: "
puts warehouse_server.check_for_damage

# Feel free to put any print statements below for testing and debugging
