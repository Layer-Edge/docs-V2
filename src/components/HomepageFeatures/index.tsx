import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

// Define icons for each feature
const BookIcon = () => (
  <div className={styles.featureIcon}>
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main book body */}
      <rect
        x="10"
        y="12"
        width="28"
        height="32"
        rx="2"
        className={styles.iconPrimary}
      />
      {/* Book spine/binding */}
      <rect
        x="10"
        y="12"
        width="4"
        height="32"
        rx="2"
        className={styles.iconSecondary}
      />
      {/* Book pages indicator */}
      <rect
        x="12"
        y="10"
        width="26"
        height="2"
        rx="1"
        fill="#FFFFFF"
        opacity="0.3"
      />
      <rect
        x="12"
        y="8"
        width="24"
        height="2"
        rx="1"
        fill="#FFFFFF"
        opacity="0.2"
      />

      {/* Text lines on the book cover */}
      <rect
        x="16"
        y="18"
        width="18"
        height="1.5"
        rx="0.75"
        fill="#FFFFFF"
        opacity="0.8"
      />
      <rect
        x="16"
        y="22"
        width="14"
        height="1.5"
        rx="0.75"
        fill="#FFFFFF"
        opacity="0.7"
      />
      <rect
        x="16"
        y="26"
        width="16"
        height="1.5"
        rx="0.75"
        fill="#FFFFFF"
        opacity="0.6"
      />
      <rect
        x="16"
        y="30"
        width="12"
        height="1.5"
        rx="0.75"
        fill="#FFFFFF"
        opacity="0.5"
      />
      <rect
        x="16"
        y="34"
        width="15"
        height="1.5"
        rx="0.75"
        fill="#FFFFFF"
        opacity="0.4"
      />
      <rect
        x="16"
        y="38"
        width="10"
        height="1.5"
        rx="0.75"
        fill="#FFFFFF"
        opacity="0.4"
      />
    </svg>
  </div>
);

const GraduationIcon = () => (
  <div className={styles.featureIcon}>
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 5L2 15L24 25L46 15L24 5Z" className={styles.iconPrimary} />
      <path
        d="M12 33V20L34 30V43"
        className={styles.iconStroke}
        strokeWidth="2"
      />
      <path
        d="M24 36C27.3137 36 30 33.3137 30 30C30 26.6863 27.3137 24 24 24C20.6863 24 18 26.6863 18 30C18 33.3137 20.6863 36 24 36Z"
        className={styles.iconSecondary}
      />
    </svg>
  </div>
);

const BuilderIcon = () => (
  <div className={styles.featureIcon}>
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12"
        y="12"
        width="24"
        height="24"
        rx="2"
        className={styles.iconSecondary}
      />
      <path
        d="M18 22H30"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 26H30"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 30H24"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const CommunityIcon = () => (
  <div className={styles.featureIcon}>
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24"
        cy="24"
        r="16"
        className={styles.iconStroke}
        strokeWidth="2"
      />
      <path d="M14 24H34" className={styles.iconStroke} strokeWidth="2" />
      <path d="M24 14V34" className={styles.iconStroke} strokeWidth="2" />
      <circle cx="24" cy="24" r="6" className={styles.iconTertiary} />
    </svg>
  </div>
);

type FeatureItem = {
  title: string;
  Icon: React.ComponentType;
  description: React.ReactNode;
  path: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Quick Guide",
    Icon: BookIcon,
    description: (
      <>
        The Alpha Mainnet of Edgen Chain is live. You can now bridge, swap,
        claim, and stake $EDGEN on LayerEdge’s modular execution layer —
        seamlessly connected to edgenOS, our decentralized verifier system.
      </>
    ),
    path: "/docs/guide",
  },
  {
    title: "Learn",
    Icon: GraduationIcon,
    description: (
      <>
        LayerEdge is a decentralized verification network that brings
        trust-minimized computation to Bitcoin by aggregating and verifying
        zk-proofs from external systems—enabling high-integrity data validation
        without centralized trust.
      </>
    ),
    path: "/docs/intro",
  },
  {
    title: "Build",
    Icon: BuilderIcon,
    description: (
      <>Start building on LayerEdge with one of our developer SDKs.</>
    ),
    path: "/docs/build/",
  },
  {
    title: "Community",
    Icon: CommunityIcon,
    description: (
      <>
        Join the LayerEdge community to connect, collaborate, and contribute to
        the future of decentralized verification.
      </>
    ),
    path: "/docs/community-and-support/",
  },
];

function Feature({ title, Icon, description, path }: FeatureItem) {
  return (
    <Link to={path} className={clsx("col", styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureContent}>
          <Icon />
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): React.ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { FeatureList };
