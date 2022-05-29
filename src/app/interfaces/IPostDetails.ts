import {IPost} from "./IPost";

export interface IPostDetails extends IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
