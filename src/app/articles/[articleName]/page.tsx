import { getArticleByName } from "@/app/(server)/api";

export default async function ArticlePage(props: Params) {
    const {params} = props;
    const {articleName} = await params;
    const article = await getArticleByName(articleName)
    return (
        <>
            <h1>{`Article Page: ${article.name}`}</h1>
            <p>{article.text}</p>
        </>
    )
};

