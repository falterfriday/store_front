class CategoriesController < ApplicationController

    def index
        @categories = Category.all
    end

    def create
        category = Category.new(name:params[:category])
        if category.save
            redirect_to '/#'
        else
            puts "damn, something went wrong"
            redirect_to '/#'
        end
    end

    def update
        Category.update(params[:id], name:params[:category])
        redirect_to '/#'
    end

    def destroy
        Category.destroy(params[:id])
        redirect_to '/#'
    end

    def show
        @category = Category.find(params[:id])
    end
end
