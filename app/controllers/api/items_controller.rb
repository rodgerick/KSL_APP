class Api::ItemsController < ApplicationController
before_action :set_category
before_action :set_item only: [:update, :destroy]
  
  def index
    render json: @category.items
  end

  def show
    render json: Item.all
  end

  def create
    item = @category.items.new(item_params)
    if (item.save)
      render json: item
    else
      render json: item.errors, status: 422
    end
  end

  def update
    if(@item.update(item_params))
      render json: @item
    else
      render json: @item.errors, status: 422
    end
  end

  def destroy
    item = @item.destroy
    render json: item
  end

  private

  def set_item
    @item = Category.items.find(params[:id])
  end

  def set_category
    @category = Category.find(params[:category_id])
  end

  def item_params
    params.require(:item).permit(:name,  :description, :price, :category_id)
  end
    
end
