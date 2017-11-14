class AddStateColumnToBars < ActiveRecord::Migration[5.1]
  def change
    add_column :bars, :state, :string
  end
end
