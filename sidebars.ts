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
        'introduction-to-layerEdge/why-layerEdge',
        'introduction-to-layerEdge/what-is-layerEdge', 
      ]
    },
    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'doc',
        id: 'architecture/index',
      },
      items: [
        'architecture/verification-layer',
        'architecture/general-prover-verifier-system',
        'architecture/data-availability-layer-da-layer',
        'architecture/bitcoin-anchoring',
        'architecture/built-on-babylon',
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
        'light-node-verification/role-of-light-nodes',
        'light-node-verification/randomized-proof-selection',
        'light-node-verification/verification-workflow',
        'light-node-verification/security-analysis',
        'light-node-verification/practical-considerations',
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
        'state-transition-verification/optimistic-execution',
        'state-transition-verification/modular-verification',
        'state-transition-verification/cryptographic-guarantees',
        'state-transition-verification/full-workflow',
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
        'high-throughput-architecture/verification-complexity-and-parallelized-verification',
        'high-throughput-architecture/aggregator-vs.-verifier-workloads-and-empirical-performance-observations',
        'high-throughput-architecture/additional-scalability-features',
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
        'security-model/bitcoin-pow-anchoring',
        'security-model/advanced-cryptographic-protections',
        'security-model/probabilistic-sampling',
        'security-model/economic-incentives',
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
        'getting-started/prerequisites',
        'getting-started/running-light-node',
        'getting-started/submitting-proofs',
        'getting-started/integration-flow',
        'getting-started/tips-troubleshooting'
      ]
    },
    {
      type: 'doc',
      id: 'try-layeredge-devnet/index',
      label: 'Try LayerEdge (Devnet)'
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
            'network/consensus/proof-of-aggregation',
            'network/consensus/stochastic-sampling',
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
        'tokenomics-and-economic-model/layeredge-utility-token-and-incentives',
        'tokenomics-and-economic-model/token-utility-and-reward-framework',
        'tokenomics-and-economic-model/token-flow-and-network-equilibrium',
        'tokenomics-and-economic-model/additional-scalability-features',
        'tokenomics-and-economic-model/EDGEN-Token',
      ]
    },
    {
      type: 'category',
      label: 'Frequently Asked Questions',
      link: {
        type: 'doc',
        id: 'frequently-asked-questions-faqs/index',
      },
      items: []
    },
  ],
};

export default sidebars;