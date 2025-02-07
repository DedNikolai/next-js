// import { ERRORS } from '../errors';
import { ERRORS } from '../errors';
import articles from './db.json';
import { delayed } from './delay';

export function getAllArticles() {
  return delayed(articles, { timeout: 1500 });
}

// export function getArticleByName(articleName: string) {
//   const article = articles.find((x) => x.name === articleName);

//   if (!article) {
//     throw new Error(ERRORS.NOT_FOUND);
//   }

//   return delayed(article);
// }

export async function getArticleByName(name: string) {
  const allArticles = await getAllArticles();
  const article = allArticles.find(article => article.name == name);

  if (!article) throw new Error(ERRORS.NOT_FOUND)

  return article;

}