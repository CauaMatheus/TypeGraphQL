import { Arg, Mutation, Resolver, Query } from "type-graphql";
import { CreateVideoDTO } from "../dtos/CreateVideoDTO";
import { ReturnDeletedVideoDTO } from "../dtos/ReturnDeletedVideoDTO";
import { ReturnVideoDTO } from "../dtos/ReturnVideoDTO";
import { VideoModel } from "../models/Video";

@Resolver()
class VideoResolver {
  @Mutation(() => ReturnVideoDTO)
  async addVideo(@Arg('videoData') createVideoDTO: CreateVideoDTO) {
    const videoAlreadyExist = await VideoModel.findOne({
      title: createVideoDTO.title,
      author: createVideoDTO.author,
    });
    if(videoAlreadyExist){
      throw new Error('Video already exist!');
    }

    const video = await (await VideoModel.create(createVideoDTO))
    .populate('author')
    .execPopulate();

    return video;
  }

  @Mutation(() => ReturnDeletedVideoDTO)
  async deleteVideo(@Arg('_id') _id: string) {
    return await VideoModel.deleteOne({ _id })
  }

  @Query(() => [ReturnVideoDTO])
  async listVideos() {
    const videos = await VideoModel.find().populate('author');
    console.log(videos);
    return videos;
  }
}

export { VideoResolver };
