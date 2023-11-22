const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

function myMiddlewares(request, response, next) {
  console.log("Você passou pelo Meddleware")

  if (!request.body.isAdmin) {
    return response.json({ message: "user unauthorized" })
  }

  next()
}

const usersController = new UsersController()

usersRoutes.post("/", myMiddlewares, usersController.create)

module.exports = usersRoutes
