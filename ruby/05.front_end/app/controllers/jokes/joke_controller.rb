class Jokes::JokeController < ApplicationController

    # requirement
    include HTTParty
    BASE_URL = 'http://api.icndb.com/jokes/'
    @max = 5

    def index
        @jokes = get(BASE_URL + 'random/5')['value'].map { |joke| Jokes::Joke.new(joke) }
    end

    def show
        request = get(BASE_URL + params[:id].to_s)
        puts request
        @joke = Jokes::Joke.new(request['value'])
    end

    private
    # HTTPing
    def get(url) 
        puts "Requesting url:#{url}"
        return HTTParty.get(url, { :headers => {'Content-Type' => 'application/json'}}).parsed_response
    end
end