import { Document, model, Schema } from "mongoose"

type UserType = {
  firstName: string,
  lastName: string,
  email: string,
}

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const UserModel = model<UserType & Document>('User', UserSchema);
export { UserModel };