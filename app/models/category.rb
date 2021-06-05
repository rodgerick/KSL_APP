class Category < ApplicationRecord
  has_many :items
  has_many :jobs

  validates :name, presence: true
  validates :linstings, presence: true
  validates :price, presence: true
end 