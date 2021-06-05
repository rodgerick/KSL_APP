class Category < ApplicationRecord
  has_many :items, dependent: :destroy
  has_many :jobs, dependent: :destroy

  validates :name, presence: true
  validates :listings, presence: true
  validates :price, presence: true
end 