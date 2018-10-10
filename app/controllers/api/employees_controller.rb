class Api::EmployeesController < ApplicationController
  def index
    @employees = Employee.all
    render json: @employees
  end

  def create
    @employee = Employee.create(employee_params)
    render json: @employees
  end

  def update
    @employee = Employee.find(params[:id])
    @employee.update(employee_params)
    @employees = Employee.all
    render json: @employees
  end

  def destroy
    @employee=Employee.find(params[:id])
    @employee.destroy
    @employees = Employee.all
    render json: @employees
  end

  private

  def employee_params
    params.require(:employee).permit(:first_name, :last_name, :gender, :position, :email)
  end
end
