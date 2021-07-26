import { fakeDb } from '../db/fakedb'
import { BadRequest } from '../utils/Errors'

class BurgerShaksService {
  getAll() {
    return fakeDb.burgers
  }

  getById(id) {
    const burger = fakeDb.burgers.find(b => b.id === id)
    if (!burger) {
      throw new BadRequest('Invalid Burger ID')
    }
    return burger
  }

  create(body) {
    fakeDb.burgers.push(body)
    return body
  }

  edit(body) {
    let old = this.getById(body.id)
    old = { ...old, ...body }
    this.delete(old.id)
    fakeDb.burgers.push(old)
    return old
  }

  delete(id) {
    const index = fakeDb.burgers.findIndex(b => b.id.toString() === id)
    // @ts-ignore
    if (index > -1) {
      throw new BadRequest('Invalid Id')
    }
    fakeDb.burgers.splice(index, 1)
  }
}

export const burgerShaksService = new BurgerShaksService()
