class AddAttachmentSecImgToProducts < ActiveRecord::Migration
  def self.up
    change_table :products do |t|
      t.attachment :sec_img
    end
  end

  def self.down
    remove_attachment :products, :sec_img
  end
end
