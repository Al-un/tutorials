# Your code here
def prime?(n)
  if n == 1
    return true
  end
  
  isPrimal = true
  (2..(n-1)).each do |x|
    if n % x == 0
        isPrimal = false
        break
    end
  end
  
  return isPrimal
end

puts prime? 0
puts prime? 1
puts prime? 3
puts prime? 17
puts prime? 22
