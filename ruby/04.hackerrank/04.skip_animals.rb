def skip_animals(animals, skip)
    # Your code here
    return animals.each_with_index
      .select {|item, index| index >= skip}
      .map {|item, index| "#{index}:#{item}"}
      .collect {|x| x}
end

puts skip_animals(['leopard', 'bear', 'fox', 'wolf'], 2)