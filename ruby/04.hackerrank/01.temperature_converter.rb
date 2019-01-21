# Your code here
def convert_temp(temp, input_scale:, output_scale: 'celsius')
   
  result = temp

  case input_scale
  when 'celsius'
    case output_scale
    when 'fahrenheit'
      result = (temp*9.0/5.0) + 32
    when 'kelvin'
      result = temp + 273.15
    end
  when 'fahrenheit'
    case output_scale
    when 'celsius'
      result = (temp - 32) * 5.0/9.0
    when 'kelvin'
      result = (temp - 32) * 5.0/9.0 + 273.15
    end
  when 'kelvin'
    case output_scale
    when 'celsius'
      result = temp - 273.15
    when 'fahrenheit'
      result = (temp - 273.15) * 9.0/5.0 + 32
    end
  end

  return result
end

puts '0°F to default: ' + convert_temp(0, input_scale: 'fahrenheit').to_s
puts '0°F to celsius: ' + convert_temp(0, input_scale: 'fahrenheit', output_scale: 'celsius').to_s
puts '0°F to fahrenheit: ' + convert_temp(0, input_scale: 'fahrenheit', output_scale: 'fahrenheit').to_s
puts '0°F to kelvin: ' + convert_temp(0, input_scale: 'fahrenheit', output_scale: 'kelvin').to_s
puts '0°C to default: ' + convert_temp(0, input_scale: 'celsius').to_s
puts '0°C to celsius: ' + convert_temp(0, input_scale: 'celsius', output_scale: 'celsius').to_s
puts '0°C to fahrenheit: ' + convert_temp(0, input_scale: 'celsius', output_scale: 'fahrenheit').to_s
puts '0°C to kelvin: ' + convert_temp(0, input_scale: 'celsius', output_scale: 'kelvin').to_s