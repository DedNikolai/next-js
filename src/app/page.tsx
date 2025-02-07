import { getAllArticles } from "./(server)/api";
import { AppLink } from "./shared/components/app-linl";
import ArticlePreveiw from "./ArticlePreview";

const ARTICLES_PER_PAGE = 10;

export default async function Home(
  {searchParams}: {searchParams: Record<string, string>}
) {
  const params =  await searchParams;
  const page = +params['page'] || 1;
  const allArticles = await getAllArticles();
  const articles = allArticles.slice((page-1)*ARTICLES_PER_PAGE, page*ARTICLES_PER_PAGE)
  const nextPageUrl = {
    search: new URLSearchParams({
      page: (page + 1).toString(),
    }).toString(),
  };

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {articles.map(article => {
          return (
            <li key={article.name}>
              <ArticlePreveiw  name={article.name} header={article.header} />
            </li>
          )
        })}
      </ul>
      <AppLink href={nextPageUrl}>Next</AppLink>
    </>
  );
}
