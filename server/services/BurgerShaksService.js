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
}
export const burgerShaksService = new BurgerShaksService()
