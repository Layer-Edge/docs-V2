import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Geometric pattern SVG similar to Nillion's design
function GeometricPattern() {
  return (
      <svg
          viewBox="0 0 500 500"
          className={styles.geometricPattern}
          width="400"
          height="400"
      >
        {/* Create octagon base shape */}
        <polygon
            points="200,50 350,50 450,200 450,350 350,450 200,450 50,350 50,200"
            className={styles.geometricPattern}
        />

        {/* Create the web-like effect with multiple rotated squares */}
        {Array.from({length: 12}).map((_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const scale = 0.95 - (i * 0.05);

          return (
              <rect
                  key={i}
                  x="150"
                  y="150"
                  width="200"
                  height="200"
                  transform={`rotate(${i * 15}, 250, 250) scale(${scale})`}
                  className={styles.geometricPattern}
              />
          );
        })}
      </svg>
  );
}

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
              <Link
                  className={clsx(styles.getStartedButton)}
                  to="/docs/intro"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.geometricShape}>
              <GeometricPattern />
            </div>
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
