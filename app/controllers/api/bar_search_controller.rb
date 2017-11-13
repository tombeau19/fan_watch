require 'yelp_services'

class Api::BarSearchController < ApplicationController

    def show 
        @bar = Services::YelpService.search_for_bar(params[:barname])
        render json: @bar
    end

end