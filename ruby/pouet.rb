require 'net/http'
require 'json'

# User data model
class User
    BASE_URL = 'http://fg-69c8cbcd.herokuapp.com/user/'
    attr_reader :id, :name, :friends

    def initialize(userId)
        # userId assumed to be existing
        uri = URI(BASE_URL + userId.to_s)
        response = Net::HTTP.get(uri)
        jsonedResponse = JSON.parse(response)
        @id = jsonedResponse['id']
        @name = jsonedResponse['name']
        @friends = jsonedResponse['friends']
    end

    # loading friends value
    def loadFriendsValue
        @friends = @friends.map{ |friend_id| User.new(friend_id) }
    end
end


# assumed input is correct
user_id = gets.to_i;
# initialise
root_user = User.new(user_id)
# initialise friends
root_user.loadFriendsValue

# 2 levels hardcoded :(
friends_name = []
root_user.friends.each do |f|
    friends_name.push(f.name) 
    if (f.is_a? User)
        f.loadFriendsValue
        f.friends.each{ |f2| friends_name.push(f2.name) }
    end
end
# remove duplicate
friends_name = friends_name.uniq


puts friends_name.to_s