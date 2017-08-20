export interface PostListItem {
  title: string;
  slug: string;
  content: string;
  description: string;
  create_date: Date;
}

export interface PostDetail extends PostListItem {
  content: string;
}
