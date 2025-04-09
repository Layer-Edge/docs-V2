import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <h2 className={styles.heroSubtitle}>{siteConfig.tagline}</h2>
          <p className={styles.heroDescription}>
            Layeredge is a secure computation network that decentralizes trust
            for high value data in the same way that blockchains decentralized
            transactions.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary" to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          Image
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
