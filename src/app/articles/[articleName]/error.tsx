'use client'

import { AppLink } from "@/app/shared/components/app-linl";

export default function ArticleError() {
    return (
        <>
            <h2>Wrong Article Name</h2>
            <AppLink href='/'>GO HOME</AppLink>
        </>
    )
}