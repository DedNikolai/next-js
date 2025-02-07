'use client'

import { useEffect, useState } from "react";
import { AppLink } from "./shared/components/app-linl";
import { ROUTING } from "./routing";

type ArticlePreviewType = {
    name: string;
    header: string;
  }

  const getLikeFey = (articleName: string) => `next_js_like_${articleName}`
  
  function ArticlePreveiw({name, header}: ArticlePreviewType) {
    const likeKey = getLikeFey(name);
    const [like, setLike] = useState(false);

    const handleLike = () => {
        localStorage.setItem(likeKey, 'liked');
        setLike(true)
    }

    useEffect(() => {
        const likeValue = localStorage.getItem(likeKey);
        setLike(likeValue === 'liked')
    }, [name])
   
    return (
      <>
        <AppLink href={ROUTING.article(name)}>{header}</AppLink>
        <button type="button" onClick={handleLike}>{like ? '*' : `Like`}</button>
      </>
    )
  }

  export default ArticlePreveiw;