class Api::PostsController < ApplicationController
    def index
        @posts = Bar.find_by_id(params[:bar_id]).posts.order(created_at: :desc)
        render json: @posts
    end

    def show
        @post = Post.find(params[:id])
        render json: @post
    end

    def create
        @bar = Bar.find(params[:bar_id])
        @post = Post.new(post_params)
        @bar.posts << @post 
        @bar.save!
        render json: @bar.posts.order(created_at: :desc)
    end

    def update
        @bar = Bar.find(params[:bar_id])
        @post = Post.find(params[:id])
        @post.update!(post_params)
        @bar.save!

        render json: @bar, include: [:posts]
    end

    def destroy
        @bar = Bar.find(params[:bar_id])
        @bar.posts.delete(Post.find(params[:id]))
        @bar.save!
        render json: @bar, include: [:posts]
    end

    private
    def post_params
        params.require(:post).permit(:title, :content)
    end
end
