class OrdersController < ApplicationController

    def index
        render :json => Orders.all
    end

    def create
        order = Order.new(
            user: current_user,
            status:"processing",
            ship_info: @ship_info,
            bill_info: @bill_info,
            total: @total
            )
        if order.save
            puts "order: success"
            redirect_to '/#'
        else
            puts "order: something went wrong"
            redirect_to '/#'
        end
    end

    def update
        Order.update(params[:id],status: params[:status])
        render :json => Order.all
    end

    def destroy
        Order.destroy(params[:id])
        redirect_to '/#'
    end

    def show
        render :json => Order.find(params[:id])
    end
end
