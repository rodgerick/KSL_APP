class Api::CategoiresController < ApplicationController 

  before_action :set_category, only: %i[show edit update destroy]

  def index
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
  end

  def new
    @category = Category.new
  end

  def edit
    @category = Category.find(params[:id])
  end

  def create
    @category = Category.new(category_params)
    resopond_to do |format|
      if @category.save
        format.html { redirect_to @category, notice: "Category was successfully created!" }
        format.json { render :show, status: :created. location: @category }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @category.errors, status: :unprocessable_entity}
      end
    end
  end

  def update
    resopond_to do |format|
      if @category.update(category_params)
        format.html { redirect_to @category, notice: "Category was successfully updated!" }
        format.json { render :show, status: :ok, location: @category }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @category.destroy
    resopond_to do |format|
      format.html { redirect_to categoryies_url, notice: "Category was successfully deleted!" }
      format.jsom { head :no_content }
    end
  end
  
  private
  def set_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name, :listings, :price)
  end

end
