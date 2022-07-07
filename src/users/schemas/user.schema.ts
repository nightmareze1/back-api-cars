import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    match: /.+\@.+\..+/,
  },

  password: {
    type: String,
    require: true,
  },

  // cars: [{ type: Schema.Types.ObjectId, ref: 'Cars' }],
});
