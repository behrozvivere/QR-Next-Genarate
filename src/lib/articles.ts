
import glob from "fast-glob";

interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
  hidden?: boolean;
  lang?: "zh" | "en";
}

export interface ArticleWithSlug extends Article {
  slug: string;
}


export function genMetadata(article: ArticleWithSlug) {
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      images: encodeURI(`/og?title=${article.title}`),
    },
  };
}
