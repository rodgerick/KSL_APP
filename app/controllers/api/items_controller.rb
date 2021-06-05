class Api::ItemsController < ApplicationController

  def create
    @category = Category.find(params[:category_id])
    @item = @category.items.create(item_params)
    redirect_to category_path(@category)
  end

  private
    def item_params
      params.require(:item).permit(:name, :description, :price)
    end
  end
    
end
