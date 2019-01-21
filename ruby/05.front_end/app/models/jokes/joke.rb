class Jokes::Joke

    attr_accessor :id, :joke, :categories

    # https://stackoverflow.com/a/2681014/4906586
    def initialize (args)
        args.each { |k,v|
            instance_variable_set("@#{k}", v) unless v.nil?
        } if args.is_a? Hash
    end
    
end