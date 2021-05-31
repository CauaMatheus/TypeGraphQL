import { Document, model, Schema } from "mongoose"

type VideoType = {
  title: string,
  description: string,
  category: string
}

const VideoSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const VideoModel = model<VideoType & Document>('Video', VideoSchema);
export { VideoModel };