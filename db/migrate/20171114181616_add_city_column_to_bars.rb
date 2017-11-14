class AddCityColumnToBars < ActiveRecord::Migration[5.1]
  def change
    add_column :bars, :city, :string
  end
end
