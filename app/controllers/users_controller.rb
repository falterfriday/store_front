class UsersController < ApplicationController
	def create
		user = User.new(user_params)
		if user.save
			render :json => user
		else
			render :json => user.errors.full_messages
		end
	end

	def update
		User.update(params[:user_id], :first_name => params[:first_name], :last_name => params[:last_name], :email => params[:email])
		render :json => User.find(params[:user_id])
	end

	def login
		user = User.find_by(email: params[:email])
		if user && user.authenticate(params[:password])
			render :json => user
		elsif user
			render :json => {logerror: "Your password does not match our records"}
		else
			render :json => {logerror: "Your email does not match any of our records"}
		end
	end
	def show 
		render :json => User.find(params[:user_id])
	end
	private
	def user_params
		bool = false;
		params.require(:user).permit(:first_name, :last_name, :email, :password).merge(:admin => bool)
	end
end
