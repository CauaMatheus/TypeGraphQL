import { Field, ObjectType } from "type-graphql";
import { ReturnUserDTO } from "../../users/dtos/ReturnUserDTO";

@ObjectType()
class ReturnVideoDTO {
  @Field()
  description: string

  @Field()
  title: string

  @Field()
  category: string

  @Field()
  author: ReturnUserDTO
}

export { ReturnVideoDTO };