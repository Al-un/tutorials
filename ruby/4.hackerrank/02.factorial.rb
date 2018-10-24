def factorial
    yield
end

n = gets.to_i
factorial do 
    puts (n > 0) ? (1..n).inject { |factorialXMinusOne,x| factorialXMinusOne*x } : 1
end