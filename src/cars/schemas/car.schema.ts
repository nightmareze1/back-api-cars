import { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export const CarSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  images: {
    type: [
      {
        name: String,
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // user: { type: Schema.Types.ObjectId, ref: 'Users' },
});
