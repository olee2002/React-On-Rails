class Api::TasksController < ApplicationController
  def index
    @employee = Employee.find(params[:employee_id])
    @tasks = @employee.tasks.all
    render json: @tasks
  end
end
