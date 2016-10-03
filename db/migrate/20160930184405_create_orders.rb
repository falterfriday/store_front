class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :status
      t.float :total
      t.references :user, foreign_key: true
      t.references :ship, foreign_key: true
      t.references :bill, foreign_key: true

      t.timestamps
    end
  end
end
