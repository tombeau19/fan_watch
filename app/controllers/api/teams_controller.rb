class Api::TeamsController < ApplicationController
    def index
        @teams = Team.all
        render json: @teams
    end

    def show
        @team = Team.find_by_id(params[:id])
        render json: @team
    end
end
