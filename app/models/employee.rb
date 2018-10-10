class Employee < ApplicationRecord
  has_many :tasks,  dependent: :destroy
end
