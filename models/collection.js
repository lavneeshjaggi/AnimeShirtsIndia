import { Schema, model } from "mongoose";

const CollectionSchema = new Schema({
  title: {
    type: String,
  },
  routeName: {
    type: String,
  },
  items: [
    {
      name: {
        type: String,
      },
      imageUrl: {
        type: String,
      },
      description: {
        type: String,
      },
      sizes: [
        {
          size: {
            type: String,
          },
          quantity: {
            type: String,
          },
          price: {
            type: Number,
          },
        },
      ],
      reviews: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "Users",
          },
          content: {
            type: String,
          },
          likes: [
            {
              user: {
                type: Schema.Types.ObjectId,
                ref: "Users",
              },
            },
          ],
        },
      ],
    },
  ],
});

export default model("Collection", CollectionSchema);
