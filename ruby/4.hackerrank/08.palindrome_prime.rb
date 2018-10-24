# Enter your code here. Read input from STDIN. Print output to STDOUT
def palindrome(n)
    return 2.upto(Float::INFINITY).lazy
        .select {|n| n.to_s.reverse == n.to_s}
        .select do |n| # prime number
            prime = true 

            threshold = Math.sqrt(n).to_i

            (2..threshold).each do |x|
                if(n % x == 0)
                    prime = false
                    break;
                end
            end
            prime
        end
        .first(n)
end

input = gets.to_i
puts palindrome(input).to_s

puts palindrome(5).to_s
puts palindrome(200).to_s