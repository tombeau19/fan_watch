class Team < ApplicationRecord
    has_many :bars, dependent: :destroy
end
