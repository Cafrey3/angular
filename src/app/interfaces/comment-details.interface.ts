import {CommentInerface} from "./comment.inerface";

export interface CommentDetailsInterface extends CommentInerface {
  postId: number;
  id: string;
  name: string;
  email: string;
  body: string;
}
