class RemovePublishedToNews < ActiveRecord::Migration
  def change
      
      remove_column :news, :published, :boolean 
      
  end
end
