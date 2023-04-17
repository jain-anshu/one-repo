# ========= Write a simple version of Blackjack. ===============
# Represent a deck of 52 cards – there will be 4 cards of each rank: (2-10, J, Q, K, A)
# J, Q, K all have a value of 10
# For now, you can treat A (Ace) as always having a value of 11

# At the start of the game, the player will draw two cards

# If the card total is less than 16, the player will continue drawing cards

# At the end, print the cards in the hand, and "Win" if the player's card total
# is equal to or less than 21, and "Lose" if it's more than 21


# =========== Example ============
# Starting hand is K,4 which has a total value of 14, so the player draws again.
# Player then draws a 3, which results in a total value of 17, which is greater than or equal to 16, so they stop.

# Output will be:
# K,4,3 Win



# Now, lets implement proper Ace value-counting
#
# We count aces as “high” (with value 11) if doing so
# doesn’t bring the total above 21, otherwise we count them as low (with value 1). 
#
# For example, if the player’s hand is A, A, A, 7, we will count it as 11 + 1 + 1 + 7 = 20
# Another example: A, A, A, 10 will be 1+1+1+10 = 13
# A,A = 11 + 1 = 12
# A,A,A = 11 + 1 + 1 = 13

class Card
  attr_reader :rank, :value  
  def initialize(rank, value)
    @rank = rank.to_s
    @value = value
  end
end

class Deck
    attr_reader  :cards
    def initialize
      @cards = Array.new
      fill_deck
    end 

    def fill_deck
        number_cards = (2..10).to_a
        face_cards = %w(J Q K)
        4.times do
          number_cards.each{ |i| @cards << Card.new(i, i) }
          face_cards.each{|rank| @cards << Card.new(rank, 10)}
          @cards << Card.new('A', 11)
        end
    end  
  end
  
  class Blackjack
    def initialize
      @deck = Deck.new
      @total_value = 0
      @hand = []
      @cards_picked = []
    end
    def draw_card
        i = rand(51)
        while @cards_picked.include?(i)
          i = rand(51)
        end  
        i
    end
    def handle_ace
      if @total_value > 21
        @total_value -= 10
      end 
    end
    def draw
      draw_card
      while @total_value < 16 do
        i = draw_card
        @cards_picked.push(i) 
        @hand <<  @deck.cards[i].rank
        @total_value += @deck.cards[i].value
        handle_ace if @deck.cards[i].rank == 'A'
      end
      
    end
    
    def has_won?
      @total_value > 21 ? false : true
    end
    
    def play
      draw
      p @hand.join(" ") + (has_won? ?  " Win":" Lose")
    end
  end
  
  b = Blackjack.new
  b.play