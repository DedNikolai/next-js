'use client'

import Link from "next/link"
import { ERRORS } from "./errors"
import { AppLink } from "./shared/components/app-linl"

export default function ErrorPage({error}: {error: Error}) {
    if (error.message === ERRORS.NOT_FOUND) {
        return (
            <>
                <h2>Article not found</h2>
                <AppLink href='/'>GO HOME</AppLink>
            </>
        )
    }
    return (
        <>
            <h2>Internal Server Error</h2>
            <Link href='/'>GO HOME</Link>
        </>
    )
}