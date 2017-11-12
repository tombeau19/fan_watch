class Bar < ApplicationRecord
  belongs_to :team
  has_many :posts, dependent: :destroy
end
