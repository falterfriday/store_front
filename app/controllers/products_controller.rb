class ProductsController < ApplicationController
	def create
		Product.create(product_params)
	end
	def update
		Product.update(params[:product_id], product_params)
	end
	def index
		render :json => Product.all
	end
	def show
		render :json => Product.find(params[:id])
	end
	def showbycat
		category = Category.find(params[:id])
		render :json => Product.where(category: category)
	end
	def destroy
		Product.find(params[:id]).destroy
	end
	private
	def product_params
		category = Category.find(params[:product][:category])
		params.require(:product).permit(:name, :description, :mainimg, :secondimg, :price, :inventory, :quantitysold).merge(:category => category)
	end


end
