require_relative 'position.rb'

# A Ping represents a vehicle's position at a given timestamp.
class Ping
    attr_reader :position, :timestamp

    def initialize(x, y, timestamp)
        @position = Position.new(x,y)

        # Timestamp of the ping, in seconds since a fixed (but arbitrary) epoch.
        @timestamp = timestamp
    end

    def to_s
        "#{position.to_s} @ #{timestamp.to_s}"
    end


    # Determines the number of seconds between two given Pings. The result is
    # positive if ping1 is earlier than ping2.
    def self.seconds_between(ping1, ping2)
        ping2.timestamp - ping1.timestamp
    end
end
