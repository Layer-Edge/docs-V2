import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    // LEARN SECTION
    {
      type: 'html',
      value: '<span class="menu__section-title">Learn</span>',
      className: 'menu__section-title-container',
    },
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'intro',
      },
      items: [
        'introduction-to-layerEdge/what-is-layerEdge',
        'introduction-to-layerEdge/why-layerEdge'
      ]
    },
    {
      type: 'category',
      label: 'Proof Aggregation Layer',
      link: {
        type: 'doc',
        id: 'proof-aggregation-layer/index',
      },
      items: [
        // 'proof-aggregation-layer/index',
        'proof-aggregation-layer/bitcoin-anchoring',
        'proof-aggregation-layer/data-availability-layer-da-layer',
        'proof-aggregation-layer/general-prover-verifier-system',
        'proof-aggregation-layer/verification-layer'
      ]
    },
    {
      type: 'category',
      label: 'Light Node Verification',
      link: {
        type: 'doc',
        id: 'light-node-verification/index',
      },
      items: [
        // 'light-node-verification/index',
        'light-node-verification/practical-considerations',
        'light-node-verification/randomized-proof-selection',
        'light-node-verification/role-of-light-nodes',
        'light-node-verification/security-analysis',
        'light-node-verification/verification-workflow'
      ]
    },
    {
      type: 'category',
      label: 'State Transition Verification',
      link: {
        type: 'doc',
        id: 'state-transition-verification/index',
      },
      items: [
        // 'state-transition-verification/index',
        'state-transition-verification/cryptographic-guarantees',
        'state-transition-verification/full-workflow',
        'state-transition-verification/modular-verification',
        'state-transition-verification/optimistic-execution'
      ]
    },
    {
      type: 'category',
      label: 'High-Throughput Architecture',
      link: {
        type: 'doc',
        id: 'high-throughput-architecture/index',
      },
      items: [
        // 'high-throughput-architecture/index',
        'high-throughput-architecture/additional-scalability-features',
        'high-throughput-architecture/aggregator-vs.-verifier-workloads-and-empirical-performance-observations',
        'high-throughput-architecture/verification-complexity-and-parallelized-verification'
      ]
    },
    {
      type: 'category',
      label: 'Security Model',
      link: {
        type: 'doc',
        id: 'security-model/index',
      },
      items: [
        // 'security-model/index',
        'security-model/advanced-cryptographic-protections',
        'security-model/bitcoin-pow-anchoring',
        'security-model/economic-incentives',
        'security-model/probabilistic-sampling'
      ]
    },

    // BUILD SECTION
    {
      type: 'html',
      value: '<span class="menu__section-title">Build</span>',
      className: 'menu__section-title-container',
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/index',
      },
      items: [
        // 'getting-started/index',
        'getting-started/prerequisites',
        'getting-started/integration-flow',
        'getting-started/running-light-node',
        'getting-started/submitting-proofs',
        'getting-started/tips-troubleshooting'
      ]
    },
    {
      type: 'doc',
      id: 'try-layeredge-devnet/index',
      label: 'Try LayerEdge (Devnet)'
    },
    {
      type: 'category',
      label: 'Developer Guide',
      link: {
        type: 'doc',
        id: 'developer-guide/index',
      },
      items: [
        // 'developer-guide/index',
        {
          type: 'category',
          label: 'Run Node',
          // link: {
          //   type: 'doc',
          //   id: 'developer-guide/run-node/index',
          // },
          items: [
            // 'developer-guide/run-node/index',
            'developer-guide/run-node/setup-guide',
            'developer-guide/run-node/faq-troubleshooting'
          ]
        }
      ]
    },
    {
      type: 'doc',
      id: 'use-cases/index',
      label: 'Use Cases'
    },
    {
      type: 'category',
      label: 'Network',
      link: {
        type: 'doc',
        id: 'network/network-info',
      },
      items: [
        'network/network-info',
        {
          type: 'category',
          label: 'Consensus',
          link: {
            type: 'doc',
            id: 'network/consensus/index',
          },
          items: [
            // 'network/consensus/index',
            'network/consensus/proof-of-aggregation',
            'network/consensus/stochastic-sampling',
            'network/consensus/universal-validator-set'
          ]
        }
      ]
    },

    // COMMUNITY SECTION
    {
      type: 'html',
      value: '<span class="menu__section-title">Community</span>',
      className: 'menu__section-title-container',
    },
    {
      type: 'doc',
      id: 'community-and-support/index',
      label: 'Community and Support'
    },
    {
      type: 'category',
      label: 'Tokenomics & Economic Model',
      link: {
        type: 'doc',
        id: 'tokenomics-and-economic-model/index',
      },
      items: [
        // 'tokenomics-and-economic-model/index',
        'tokenomics-and-economic-model/additional-scalability-features',
        'tokenomics-and-economic-model/layeredge-utility-token-and-incentives',
        'tokenomics-and-economic-model/token-demand-and-reward-framework',
        'tokenomics-and-economic-model/token-flow-and-network-equilibrium'
      ]
    },
    {
      type: 'category',
      label: 'Frequently Asked Questions',
      link: {
        type: 'doc',
        id: 'frequently-asked-questions-faqs/index',
      },
      items: [
        // 'frequently-asked-questions-faqs/index',
        'frequently-asked-questions-faqs/true-rollups-on-bitcoin'
      ]
    },
    {
      type: 'link',
      label: 'Twitter',
      href: 'https://x.com/layeredge',
    },
    {
      type: 'link',
      label: 'Discord',
      href: 'https://discord.com/invite/layeredge',
    },
    {
      type: 'link',
      label: 'Medium',
      href: 'https://blog.layeredge.io',
    },
    {
      type: 'link',
      label: 'Telegram',
      href: 'https://t.me/layeredge',
    },
    {
      type: 'link',
      label: 'GitHub',
      href: 'https://github.com/orgs/Layer-Edge/repositories',
    },
  ],
};

export default sidebars;