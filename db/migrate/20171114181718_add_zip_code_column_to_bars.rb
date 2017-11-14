class AddZipCodeColumnToBars < ActiveRecord::Migration[5.1]
  def change
    add_column :bars, :zip_code, :string
  end
end
