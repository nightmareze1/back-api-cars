import { Schema } from 'mongoose';

export const PhotoSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});
