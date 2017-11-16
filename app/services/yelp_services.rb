module Services

class YelpService

    include HTTParty
    
    def self.search_for_bar(barname)
        @response = HTTParty.get("https://api.yelp.com/v3/businesses/search?term=#{barname}&location=atlanta&categories=bars,restaurants,pubs&limit=1", :headers => headers) 
    end

    def self.get_bar_from_yelp_id(yelp_id)
        @response = HTTParty.get("https://api.yelp.com/v3/businesses/#{yelp_id}", :headers => headers) 
    end

    private

    def self.headers
        access_token = "Bearer #{ENV['YELP_ACCESS_TOKEN']}"
        
        headers = {
            "Authorization" => access_token
        }
    end

end
end



