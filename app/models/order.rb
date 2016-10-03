class Order < ApplicationRecord
  belongs_to :user
  belongs_to :ship
  belongs_to :bill
end
