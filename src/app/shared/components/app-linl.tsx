import Link from "next/link";
import styles from './app-link.module.css'
import { UrlObject } from "url";

export function AppLink(
    {children, href}: {children: React.ReactNode, href: string | UrlObject}
) {
    return <Link href={href} className={styles.root}>{children}</Link>
}