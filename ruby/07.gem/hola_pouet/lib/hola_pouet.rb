# Class description goes here
#
# A second line of description
class HolaPouet

  # some comment on attr_accessor
  attr_accessor :hey
  # another comment on another attr_accessor
  attr_accessor :hoh

  # some `text and stuff` in this comment
  def initialize
    @hey = 'hey'
  end

  # The basic method. Testing +this tagging+.
  def self.hi
    puts 'Hello world from Hola (version 4+)'
  end

  # @param [String] some_parameter blablabla
  # @param [String] some_parameter: blablabla
  # @param opts [Integer] example: a number
  # @param opts [Date] some_date: a date
  def self.hi_advanced(some_parameter, **opts)
    puts 'Hello world from Hola (version 4+). Paramters is ' + some_parameter +
         ' with options ' + opts.to_s
  end
end