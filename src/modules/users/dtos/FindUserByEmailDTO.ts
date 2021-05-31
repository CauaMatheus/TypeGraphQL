import { IsEmail, IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
class FindUserByEmailDTO {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export { FindUserByEmailDTO };