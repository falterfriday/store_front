class CommentsController < ApplicationController
    def create
        comment = Comment.new(content:params[:content], user:current_user, product:params[:product_id])
        if comment.save
            puts "comment: success"
        else
            puts "comment: something went wrong"
        end
    end

    def destroy
        Comment.destroy(params[:id])
    end
end
