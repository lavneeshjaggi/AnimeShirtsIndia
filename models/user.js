import { Schema, model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Collections",
    },
  ],
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.plugin(passportLocalMongoose);

export default model("User", UserSchema);
