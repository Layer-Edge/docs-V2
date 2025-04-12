import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

// Define icons for each feature
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
            <path d="M12 33V20L34 30V43" className={styles.iconStroke} strokeWidth="2" />
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
            <rect x="12" y="12" width="24" height="24" rx="2" className={styles.iconSecondary} />
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
            <circle cx="24" cy="24" r="16" className={styles.iconStroke} strokeWidth="2" />
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
};

const FeatureList: FeatureItem[] = [
  {
    title: "Learn",
    Icon: GraduationIcon,
    description: (
      <>
        Layeredge is a secure computation network that decentralizes trust for
        high value data in the same way that blockchains decentralized
        transactions.
      </>
    ),
  },
  {
    title: "Build",
    Icon: BuilderIcon,
    description: (
      <>Start building on Layeredge with one of our developer SDKs.</>
    ),
  },
  {
    title: "Community",
    Icon: CommunityIcon,
    description: (
      <>
        Join the Layeredge community to connect, collaborate, and contribute to
        the future of blind computation.
      </>
    ),
  },
];

function Feature({ title, Icon, description }: FeatureItem) {
    return (
        <div className={clsx("col", styles.featureCol)}>
            <div className={styles.featureCard}>
                <div className={styles.featureContent}>
                    <Icon />
                    <Heading as="h3" className={styles.featureTitle}>
                        {title}
                    </Heading>
                    <p className={styles.featureDescription}>{description}</p>
                </div>
            </div>
        </div>
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
