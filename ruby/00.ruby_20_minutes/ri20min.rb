#!/usr/bin/env ruby

class MegaGreeter
    attr_accessor :names

    # Create object
    def initialize(names = "World")
        @names = names
    end

    # hello all!
    def say_hi
        if @names.nil?
            puts "..."
        elsif @names.respond_to?("each")
            # @names is a list of some kind
            @names.each do |name|
                puts "Hello #{name}!"
            end
        else
            puts "Hello #{names}!"
        end
    end

    # bye all!
    def say_bye
        if @names.nil?
            puts "... ..."
        elsif @names.respond_to?("join")
            # Join the list
            puts "Goodbye #{names.join(", ")}. Come back soon!"
        else
            puts "Goodbye #{names}!"
        end
    end

end

if __FILE__ == $0
    mg = MegaGreeter.new
    mg.say_hi
    mg.say_bye

    # Single name
    mg.names = "Zeke"
    mg.say_hi
    mg.say_bye

    # Lists
    mg.names=["Albert","Brenda","Charles", "Dave", "Engelbert"]
    mg.say_hi
    mg.say_bye

    # nil
    mg.names = nil
    mg.say_hi
    mg.say_bye
end

