module Services

class YelpService

    include HTTParty
    
    def self.search_for_bar(barname)
        @access_token = ENV['YELP_ACCESS_TOKEN']
        headers = {
            "Authorization" => @access_token
        }
        @response = HTTParty.get("https://api.yelp.com/v3/businesses/search?location=atlanta&categories=bars&limit=1&term=#{barname}", :headers => headers) 
        @response
    end

    def self.get_bar_from_yelp_id(yelp_id)
        @access_token = ENV['YELP_ACCESS_TOKEN']
        headers = {
            "Authorization" => @access_token
        }
        @response = HTTParty.get("https://api.yelp.com/v3/businesses/search?location=atlanta&categories=bars&limit=1&term=#{barname}", :headers => headers) 
        @response
    end

end
end


