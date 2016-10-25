class Product < ApplicationRecord
  belongs_to :category
  has_attached_file :main_img
  has_attached_file :sec_img
  validates_attachment_content_type :main_img, :content_type => ["image/jpeg", "image/jpg", "image/png", "image/gif"]
  validates_attachment_content_type :sec_img, :content_type => ["image/jpeg", "image/jpg", "image/png", "image/gif"]

end
