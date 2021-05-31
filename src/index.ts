import 'reflect-metadata';
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import './database/connection';
import { VideoResolver } from './modules/videos/resolvers/VideoResolver';
import { UsersResolvers } from './modules/users/resolvers/UsersResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UsersResolvers, VideoResolver]
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 3000 }).then(({ url }) =>  console.log(`Server is running at ${url}`) )
}

bootstrap()