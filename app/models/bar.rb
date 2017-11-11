class Bar < ApplicationRecord
  belongs_to :team
  has_many :posts
end
