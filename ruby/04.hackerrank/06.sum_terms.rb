def sum_terms(n)
    # your code here
    return (0..n).reduce(0) {|sum, x| sum + (x*x+1) }
end

puts sum_terms(2)
puts sum_terms(3)
puts sum_terms(25)