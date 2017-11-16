class AddNickNameColumnToTeams < ActiveRecord::Migration[5.1]
  def change
    add_column :teams, :nick_name, :string
  end
end
