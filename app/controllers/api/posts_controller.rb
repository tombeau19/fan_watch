class Api::PostsController < ApplicationController
    def index
        @posts = Bar.find_by_id(params[:bar_id]).posts
        render json: @posts
    end
end
