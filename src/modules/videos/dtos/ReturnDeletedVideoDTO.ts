import { Field, ObjectType } from "type-graphql";

@ObjectType()
class ReturnDeletedVideoDTO {
  @Field()
  ok: number

  @Field()
  n: number

  @Field()
  deletedCount: number
}

export { ReturnDeletedVideoDTO };
