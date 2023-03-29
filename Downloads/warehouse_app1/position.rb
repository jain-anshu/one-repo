# A Position represents an x, y coordinate in a given warehouse. Position
# can be used to determine how far apart or near together two vehicles are.
class Position
    attr_reader :x, :y

    def initialize(x, y)
        @x = x
        @y = y
    end

    def to_s
        "(#{x}, #{y})"
    end

    def == position
      position.class == self.class &&
          position.x == x &&
          position.y == y
    end
    alias :eql? :==

    # Determines the distance between two Positions
    # Distance is calculated as the Euclidean distance in two dimensions
    # https://en.wikipedia.org/wiki/Euclidean_distance
    def self.get_distance(position_1, position_2)
        x_diff = (position_1.x - position_2.x).abs
        y_diff = (position_1.y - position_2.y).abs

        Math.sqrt(x_diff ** 2 + y_diff ** 2)
    end
end
