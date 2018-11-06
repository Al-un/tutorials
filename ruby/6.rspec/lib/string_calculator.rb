class StringCalculator

  def self.add(input)
    if input.empty?
      0
    else
      input.split(',')
           .map { |str| str.to_i}
           .reduce(0) { |sum, x| sum + x }
    end
  end

end