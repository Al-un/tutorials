# p041symbolhash.rb
people = Hash.new
people[:nickname] = 'IndianGuru'
people[:language] = 'Marathi'
people[:lastname] = 'Talim'

puts people[:lastname] # Talim

# p0411symbolhash.rb
h = {:nickname => 'IndianGuru', :language => 'Marathi', :lastname => 'Talim'}  
puts h

# p0412symbolhash.rb
h = {nickname: 'IndianGuru', language: 'Marathi', lastname: 'Talim'}  
puts h
