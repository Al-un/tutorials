class Dog
    def initialize(breed, name)
        # variable
        @breed = breed
        @name = name
    end

    def bark
        puts 'Ruff, ruff!'
    end

    def display
        puts "I am of #{@breed} breed and my name is #{@name}"
    end
end

# instantiate
d = Dog.new('Labrador', 'Benzy')

#Stuff...
puts "Object Id is #{d.object_id}"

if d.respond_to?("talk")
    d.talk
else
    puts "No talk"
end

d.bark
d.display

# d1 points to d
d1 = d
d1.display

# nil d
d = nil
puts 'd is nil'
d.display
puts 'd1 is not nil'
d1.display

# nil d1
d1 = nil
puts 'd1 is nil'
# Dog object is abandonne and is eligible for GC
