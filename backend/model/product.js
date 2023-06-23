import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
  },
  description: {
    type: String,
    required: [true, "please enter product description"],
  },
  price: {
    type: Number,
    required: [true, "please enter product price"],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter product category"],
    enum: {
      values: [
        "electronic,",
        "camera",
        "laptop",
        "accessories",
        "headphones",
        "sports",
      ],
      message: "please select product category",
    },
  },

  seller: {
    type: String,
    required: [true, "please enter product Seller"],
  },
  stock: {
    type: Number,
    required: [true, "please enter product Stock"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.models("Product", productSchema);
