class Bar < ApplicationRecord
  belongs_to :team
  has_many :posts, -> { order(:created_at => :desc) }, dependent: :destroy
end
