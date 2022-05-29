import {IPost} from "./IPost";

export interface IPostDetails extends IPost {
  userId: number;
  id: string;
  title: string;
  body: string;
}

