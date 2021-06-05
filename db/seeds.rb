# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Item.destroy_all
Job.destroy_all

    10.times do
    Category.create(name: Faker::Commerce.product_name, listings: Faker::Game.platform, price:Faker::Commerce.price)
    10.times do |i|
    Item.create(name: Faker::Commerce.product_name, description:Faker::Commerce.department, price: Faker::Commerce.price)
    10.times do |i|
    Job.create(title: Faker::Job.title, company: Faker::Company.name, salary: Faker::Commerce.price)
      end
    end
  end
puts "seeded"
