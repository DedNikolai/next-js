export default function ArticlePage(props: Params) {
    const {params} = props;
    const {articleName} = params;
    return (
        <h1>{`Article Page: ${articleName}`}</h1>
    )
};

