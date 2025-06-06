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
          <h2 className={styles.heroSubtitle}>People Backed Internet</h2>
          <p className={styles.heroDescription}>
            LayerEdge is a dual-layer protocol designed for the People-Backed
            Internet—where every device can participate in decentralized
            verification, and every application can anchor trust across chains.
            At its core are two tightly integrated systems: edgenOS, a
            decentralized zk-verification layer powered by everyday devices, and
            Edgen Chain, a high-performance, EVM-compatible L1 built with the
            Cosmos SDK.{" "}
          </p>
          <p className={styles.heroDescription}>
            Together, they transform zk-proof verification into a global
            coordination layer, recursively aggregating proofs and anchoring
            them every 24 hours to multiple blockchains.
          </p>
          <div className={styles.buttons}>
            <Link className={clsx(styles.getStartedButton)} to="/docs/guide">
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
