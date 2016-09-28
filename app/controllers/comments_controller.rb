class CommentsController < ApplicationController
    def create
        comment = Comment.new(content:params[:content], user:current_user, product:params[:product_id])
        if comment.save
            puts "comment: success"
            redirect_to '/#'
        else
            puts "comment: something went wrong"
            redirect_to '/#'
        end
    end

    def destroy
        Comment.destroy(params[:id])
        redirect_to '/#'
    end
end
