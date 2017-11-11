class CreateBars < ActiveRecord::Migration[5.1]
  def change
    create_table :bars do |t|
      t.string :name
      t.integer :rating
      t.string :image_url
      t.string :yelp_id
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
