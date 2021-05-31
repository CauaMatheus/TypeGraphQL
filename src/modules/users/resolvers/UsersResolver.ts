import { isEmail } from "class-validator";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { FindUserByEmailDTO } from "../dtos/FindUserByEmailDTO";
import { ReturnUserDTO } from "../dtos/ReturnUserDTO";
import { UserModel } from "../models/User";

@Resolver()
class UsersResolvers {
  @Mutation(() => ReturnUserDTO)
  async createUser(@Arg('userData') createUserDTO: CreateUserDTO) {
    const userAlreadyExist = await UserModel.findOne({ email: createUserDTO.email });
    if(userAlreadyExist){
      throw new Error('User already exist!')
    }

    return await UserModel.create(createUserDTO)
  }

  @Query(() => ReturnUserDTO)
  async getUserByEmail(@Arg('email') email: string) {
    return await UserModel.findOne({ email});
  }
}
export { UsersResolvers };