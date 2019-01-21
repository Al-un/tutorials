class Jokes::GeekController < ApplicationController

    # requirement
    include HTTParty
    include Secured
    BASE_URL = 'http://api.icndb.com/jokes/'
    @max = 5

    def index
        @jokes = get(BASE_URL + 'random/5?limitTo=[nerdy,explicit]')['value'].map { |joke| Jokes::Joke.new(joke) }
    end
    
    private
    # HTTPing
    def get(url) 
        response = HTTParty.get(url, { :headers => {'Content-Type' => 'application/json'}}).parsed_response
        puts 'Requesting URL: ' + url
        puts 'Reponse:' + response.to_s
        return response
    end
end