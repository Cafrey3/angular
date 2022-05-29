import {IComment} from "./IComment";

export interface ICommentDetails extends IComment {
  postId: number;
  id: string;
  name: string;
  email: string;
  body: string;
}
