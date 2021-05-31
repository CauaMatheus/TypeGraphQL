import { IsEmail, IsNotEmpty } from "class-validator";

import { Field, InputType } from "type-graphql";

@InputType()
class CreateUserDTO {
  @Field()
  @IsNotEmpty()
  firstName: string

  @Field()
  @IsNotEmpty()
  lastName: string

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string
}

export { CreateUserDTO };