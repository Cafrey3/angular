import {IComment} from "./IComment";

export interface ICommentDetails extends IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
