class Api::JobsController < ApplicationController
  before_action :set_category
  before_action :set_job, only: [:show, :update, :destroy]
  
  def index
    render json: Category.jobs
  end

  def show
    render json: Job.all
  end

  def create
    job = @category.jobs.new(job_params)
    if (job.save)
      render json: job
    else
      render json: job.errors, status: 422
    end
  end

  def update
    if(@job.update(job_params))
      render json: @item
    else
      render json: @job.errors, status: 422
    end
  end

  def destroy
    job = @job.destroy
    render json: job
  end

  private

  def set_job
    @job = Category.jobs.find(params[:id])
  end

  def set_category
    @category = Category.find(params[:category_id])
  end

  def job_params
    params.require(:job).permit(:title,  :company, :salary, :category_id)
  end
  
end
