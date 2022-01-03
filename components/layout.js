import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

export const siteTitle = "절대음감 챌린지";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="절대음감에 도전해보자!" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← 처음으로</Link>
          </div>
        )}
      </div>
      <footer className={styles.footer}>
        <a href="https://vrisel.github.io/" target="_blank" rel="noreferrer">
          Made by
          <strong className={styles.logo}>
            VRISEL{" "}
            <Image src="/vrisel.png" alt="Vrisel Logo" width={16} height={16} />
          </strong>
        </a>
      </footer>
    </div>
  );
}
