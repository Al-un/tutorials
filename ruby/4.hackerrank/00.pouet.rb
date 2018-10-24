# Enter your code here
def mask_article(input, strikes)
    strikes.each { |stroke| input = input.gsub(stroke, strike(stroke)) }
    return input
end

def strike(input)
    return '<strike>' + input + '</strike>'
end

puts strike("Meow!")
puts strike("Foolan Barik")
puts mask_article("Hello World! This is crap!", ["crap"])
puts mask_article("Hello World! This is crap!", ["crap", 'world'])
puts mask_article("Hello World! This is crap!", ["crap", 'World'])
