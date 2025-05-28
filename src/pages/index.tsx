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
            LayerEdge is a decentralized verification layer that enables
            scalable, cost-efficient, and secure zk-proof verification, backed
            by Bitcoin. It is designed to serve as a universal infrastructure
            layer for verifying off-chain computation.
          </p>
          <div className={styles.buttons}>
            <Link className={clsx(styles.getStartedButton)} to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img
            src="https://dr6rqdr0y14sm.cloudfront.net/images/home.gif"
            alt="gif animation"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`LayerEdge Documentation - Bitcoin Backed Internet`}
      description="Explore LayerEdge's official documentation to learn how zk-proofs, recursive aggregation, and light node verification bring scalable, trust-minimized computation to Bitcoin. Discover how LayerEdge enables rollups, dApps, and modular chains to verify securely with minimal on-chain cost on Bitcoin."
      noFooter
    >
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
