class OrdersController < ApplicationController

    def index
        @orders = Orders.all
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
        Order.update(
            params[:id],
            user: User.find(params[:id]),
            status: params[:status],
            ship_info: @ship_info,
            bill_info: @bill,
            total: @total
            )
    end

    def destroy
        Order.destroy(params[:id])
        redirect_to '/#'
    end

    def show
        @order = Order.find(params[:id])
    end
end