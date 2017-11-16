require 'yelp_services'

class Api::BarSearchController < ApplicationController

    def show 
        puts 'Bar search controller hit'
        @bar = Services::YelpService.search_for_bar(params[:barname])
        puts @bar
        render json: @bar
    end

end