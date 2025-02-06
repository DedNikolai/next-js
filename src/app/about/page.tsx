import Image from "next/image";
import spanch from './spanch-bob.jpg';
import styles from './About.module.css';

export default function AboutPage() {
    return (
        <article className={styles.root}>
            <h1>ABOUT</h1>
            <Image src={spanch} alt="vercel" width={200} height={200}/>
        </article>
    )
}