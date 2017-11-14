require 'yelp_services'

class Api::BarFindController < ApplicationController

    def show 
        @bar = Services::YelpService.get_bar_from_yelp_id(params[:yelp_id])
        render json: @bar
    end

end