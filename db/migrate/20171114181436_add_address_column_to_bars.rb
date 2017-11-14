class AddAddressColumnToBars < ActiveRecord::Migration[5.1]
  def change
    add_column :bars, :address, :string
  end
end
