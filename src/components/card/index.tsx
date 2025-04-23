import React from "react";
import Link from "@docusaurus/Link";
import styles from "./card.module.css";

export default function TopicGrid({ topics }) {
  return (
    <div className={styles.topicGrid}>
      {topics.map((topic, index) => (
        <div key={index} className={styles.topicCard}>
          <Link to={topic.link} className={styles.titleLink}>
            <h3 className={styles.cardTitle}>📄 {topic.title}</h3>
          </Link>
          <p>{topic.description}</p>
        </div>
      ))}
    </div>
  );
}
