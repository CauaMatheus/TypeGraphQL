import { IsNotEmpty } from "class-validator"
import { Field, InputType } from "type-graphql"

@InputType()
class CreateVideoDTO {
  @Field()
  @IsNotEmpty()
  description: string

  @Field()
  @IsNotEmpty()
  title: string

  @Field()
  @IsNotEmpty()
  category: string

  @Field()
  @IsNotEmpty()
  author: string
}

export { CreateVideoDTO };