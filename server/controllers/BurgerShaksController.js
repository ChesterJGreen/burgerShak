import BaseController from '../utils/BaseController'

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

}