# stacking params
def mtd(a = 99, b = a+1)
    [a,b]
end
puts mtd

def downer(string)  
    string.downcase  
end  
a = "HELLO"  
downer(a)      # -> "hello"
puts a         # -> "HELLO"

def downer(string)  
    string.downcase!  
end  
a = "HELLO"  
downer(a)      # -> "hello"
puts a         # -> "hello"
