import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <h2 className={styles.heroSubtitle}>Bitcoin Backed Internet</h2>
          <p className={styles.heroDescription}>
            Layeredge is a secure computation network that decentralizes trust
            for high value data in the same way that blockchains decentralized
            transactions.
          </p>
          <div className={styles.buttons}>
            <Link className={clsx(styles.getStartedButton)} to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src="https://dr6rqdr0y14sm.cloudfront.net/images/home.gif" alt='gif animation'/>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <Layout
          title={`Docs`}
          description="Documentation for Layeredge"
          noFooter>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
  );
}
