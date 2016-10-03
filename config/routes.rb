Rails.application.routes.draw do
	root "categories#renderindex"
	get "/categories" => 'categories#index'
	get "/products" => 'products#index'
	get "/products/:id" => 'products#show'
	post "/users/:id/cart" => 'users#addToCart'
end
