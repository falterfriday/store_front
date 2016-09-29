class CategoriesController < ApplicationController

    def index
        @categories = Category.all
    end

    def create
        Category.create(name:params[:category])
    end

    def update
        Category.update(params[:id], name:params[:category])
    end

    def destroy
        Category.destroy(params[:id])
    end

    def show
        render :json => Category.find(params[:id])
    end
end
