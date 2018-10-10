# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Task.destroy_all
Employee.destroy_all

james = Employee.create(
  first_name: "James",
  last_name: "Smith",
  gender: "M",
  position: "CEO",
  email: "jsmith@gmail.com",
)

analytics = james.tasks.create(
  name: "analytics data",
  status: "urgent",
  notes: "Get it done asap",
  manager: "Joan Davison",
)
trelloUpdate = james.tasks.create(
  name: "trello board update",
  status: "urgent",
  notes: "Get it done asap",
  manager: "Joan Davison",
)
weeklyReport = james.tasks.create(
  name: "weeklyReport",
  status: "moderate",
  notes: "Get it done by Friday",
  manager: "Joan Davison",
)

joan = Employee.create(
  first_name: "Joan",
  last_name: "Davison",
  gender: "F",
  position: "CMO",
  email: "jdavison@gmail.com",
)

marketingReport = joan.tasks.create(
  name: "marketing report",
  status: "urgent",
  notes: "Get it done asap",
  manager: "James Smith",
)
