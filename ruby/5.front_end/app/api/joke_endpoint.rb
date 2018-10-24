module JokeEndpoint

    include Endpoint
    BASE_URL = 'http://api.icndb.com/jokes/'

    def fetchRandomJokes(max = 10)
        return Endpoint.get(BASE_URL + 'random/' + max)['value'].map { |joke| Jokes::Joke.new(joke) }
    end


end