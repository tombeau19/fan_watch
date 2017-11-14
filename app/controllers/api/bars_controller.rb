class Api::BarsController < ApplicationController
    def index
        @bars = Team.find(params[:team_id]).bars.order(created_at: :desc)
        render json: @bars
    end

    def show
        @bar = Bar.find(params[:id])
        render json: @bar, include: [:posts]
    end

    def create
        @team = Team.find(params[:team_id])
        @bar = Bar.new(bar_params)
        @team.bars << @bar 
        @team.save!
        render json: @team.bars.order(created_at: :desc)
    end

    private
    def bar_params
        params.require(:bar).permit(:name, :rating, :image_url, :yelp_id, :address, :city, :state, :zip_code)
    end

end

