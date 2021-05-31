import { Field, ObjectType } from "type-graphql";

@ObjectType()
class ReturnUserDTO {
  @Field()
  _id: string

  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field()
  email: string
}

export { ReturnUserDTO };