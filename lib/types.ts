export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio: string;
  location?: string;
  figmaUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: Author;
  tags: string[];
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface PostsApiResponse {
  posts: BlogPost[];
  total: number;
}
