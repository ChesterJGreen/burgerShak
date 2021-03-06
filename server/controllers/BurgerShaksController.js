import BaseController from '../utils/BaseController'
import { burgerShaksService } from '../services/BurgerShaksService'
import { fakeDb } from "../db/fakedb"

export class BurgerShaksController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  getAll(req, res, next) {
    try {
      const burgers = burgerShaksService.getAll()
      res.send(burgers)
    } catch (e) {
      next(e)
    }
  }

  getById(req, res, next) {
    try {
      const burger = burgerShaksService.getById(req.params.id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  create(req, res, next) {
    try {
      const burger = burgerShaksService.create(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  edit(req, res, next) {
    try {
      const burger = burgerShaksService.edit(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  delete(req, res, next) {
    try {
      burgerShaksService.delete(req.params.id)
      res.send('deleted')
    } catch (error) {
      next(error)
    }
  }
}
