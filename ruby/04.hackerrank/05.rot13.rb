def rot13(secret_messages)
    # your code here
    return secret_messages.map{|m| m.tr("a-z", "n-za-m").tr("A-Z", "N-ZA-M")}
end

puts rot13(["Why did the chicken cross the road?", "Gb trg gb gur bgure fvqr!"])
