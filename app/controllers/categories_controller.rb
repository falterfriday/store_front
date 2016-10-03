class CategoriesController < ApplicationController
    def renderindex
        
    end
    def index
        render :json => Category.all
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
