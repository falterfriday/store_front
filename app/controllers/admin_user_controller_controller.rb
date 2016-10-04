class AdminUserControllerController < ApplicationController
    def login
        user = User.find_by_email(email: params[:email])
        if user && user.authenticate(params[:password])
            render :json => user
        else
            render :json => "Invalid Login Creddentials"
        end
    end
end
