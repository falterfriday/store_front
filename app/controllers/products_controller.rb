class ProductsController < ApplicationController
	def create
		Product.create(product_params)
		allproducturlprocess
	end
	def update
		Product.update(params[:product_id], product_params)
	end
	def index
		allproducturlprocess
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
		allproducturlprocess
	end

	private

	def allproducturlprocess
		product = Product.all.to_a.map{ |x|
			url = x.main_img.url
			x.as_json.update(url:url)
		}
		render :json => product
	end

	def product_params
		category = Category.find(params[:product][:category])
		params.require(:product).permit(:name, :description, :main_img, :sec_img, :price, :inventory, :quant_sold).merge(:category => category)
	end


end
