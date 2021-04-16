
# output: percentage of times it was true vs false - 66, 34

class Game
  def initialize
    doors_array = [Door.new, Door.new, Door.new_winner].shuffle

    player_choice = :switch #:not_switch
  end
end

class Doors
  def initialize(what_inside = :goat)
    @prize = what_inside
    @state = :closed #:open
  end

  def self.new_winner
    Door.new(:car)
  end

  def winner?
    @price == :car
  end

  def loser?
    !winner?
  end

  def open?
    @state == :open
  end

  def open!
    @state = :open
    @prize
  end

  def close?
    !open?
  end
end
