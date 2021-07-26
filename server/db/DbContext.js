import ValueSchema from '../models/Value'
// import BurgersSchema from '../models/Burgers'
import mongoose from 'mongoose'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  // Burgers = mongoose.model('Burgers', BurgersSchema);
}

export const dbContext = new DbContext()
