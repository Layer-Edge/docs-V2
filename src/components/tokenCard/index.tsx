import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import Heading from "@theme/Heading";
import ThemedImage from "@theme/ThemedImage";
import styles from "../HomepageFeatures/styles.module.css";

type FeatureItem = {
  title: string;
  Icon?: React.ComponentType;
  iconLight?: string;
  iconDark?: string;
  description: React.ReactNode;
  path: string;
};

interface FeatureCardsProps {
  features: FeatureItem[];
}

function Feature({
  title,
  Icon,
  iconLight,
  iconDark,
  description,
  path,
}: FeatureItem) {
  return (
    <Link to={path} className={clsx("col", styles.featureCol ,styles.tokenCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureContent}>
          {Icon ? (
            <Icon />
          ) : iconLight && iconDark ? (
            <div className={styles.featureIcon}>
              <ThemedImage
                alt={`${title} icon`}
                sources={{
                  light: iconLight,
                  dark: iconDark,
                }}
                // width={auto}
                height={30}
              />
            </div>
          ) : null}
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function FeatureCards({
  features,
}: FeatureCardsProps): React.ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.featureRow)}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Feature, type FeatureItem };
