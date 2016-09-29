Rails.application.routes.draw do
	get "/categories" => 'categories#index'
	get "/products" => 'products#index'
	get "/products/:id" => 'products#show'
	
end
