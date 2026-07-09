import { siteName, siteUrl, socialLinks } from '@/lib/site';

// The paper every page in this cluster funnels to.
export const paper = {
  title: 'The Economics of Wash Trading',
  ssrnUrl: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610162',
  ssrnShortUrl: 'https://ssrn.com/abstract=4610162',
  doi: '10.2139/ssrn.4610162',
  doiUrl: 'https://dx.doi.org/10.2139/ssrn.4610162',
  ssrnAuthorUrl: socialLinks.ssrn,
  abstractId: '4610162',
  pages: 85,
  dateWritten: '2023-10-22',
  datePosted: '2023-11-20',
  researchGateUrl:
    'https://www.researchgate.net/publication/375780286_The_Economics_of_Wash_Trading',
  scholarRecordUrl:
    'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tGFdvmgAAAAJ&citation_for_view=tGFdvmgAAAAJ:u-x6o8ySG0sC',
  scholarCitedByUrl:
    'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2223007016064564882&as_sdt=5',
  video: {
    url: 'https://www.youtube.com/watch?v=ITuKRdlAdGA',
    title: 'Advait Jayant - The Economics of Wash Trading in the NFT Markets',
    venue: 'EthCC 2023, Paris',
    uploadDate: '2023-07-19',
    thumbnail: 'https://i.ytimg.com/vi/ITuKRdlAdGA/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/ITuKRdlAdGA',
  },
  keywords: [
    'Wash Trading',
    'Non-Fungible Tokens (NFTs)',
    'Market Efficiency',
    'Token-based Incentives',
    'Cryptocurrency Economics',
  ],
  jel: ['G11', 'G12', 'P34'],
  suggestedCitation:
    'Jayant, Advait, The Economics of Wash Trading (October 22, 2023). Available at SSRN: https://ssrn.com/abstract=4610162 or http://dx.doi.org/10.2139/ssrn.4610162',
  citedBy: [
    {
      label: 'Journal of Banking & Finance',
      href: 'https://www.sciencedirect.com/science/article/abs/pii/S0378426625001499',
    },
    {
      label: 'European Journal of Finance',
      href: 'https://doi.org/10.1080/1351847X.2026.2624485',
    },
    { label: 'NBER working paper', href: 'https://www.nber.org/papers/w34837' },
    {
      label: 'Google Scholar citations',
      href: 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2223007016064564882&as_sdt=5',
    },
  ],
};

// Article registry: one entry per landing page under /research/.
// Order here is the display order on the hub page.
export const articles = [
  {
    slug: 'the-economics-of-wash-trading',
    kicker: 'The paper',
    navLabel: 'The paper',
    title: 'The Economics of Wash Trading',
    metaTitle: 'The Economics of Wash Trading (SSRN Paper)',
    description:
      'The Economics of Wash Trading: an 85-page SSRN paper by Advait Jayant on wash trading in NFT markets, token-based incentives, and market efficiency. Abstract, findings, and citation.',
    dek: 'What an 85-page study of NFT markets says about fake volume, token incentives, and whether manipulation actually works.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'The Economics of Wash Trading',
      'wash trading paper',
      'SSRN 4610162',
      'Advait Jayant',
      'NFT wash trading research',
    ],
  },
  {
    slug: 'wash-trading',
    kicker: 'Explainer',
    navLabel: 'Wash trading',
    title: 'What Is Wash Trading? Definition, Mechanics, and Why It Persists',
    metaTitle: 'Wash Trading: Definition, Mechanics, and Why It Persists',
    description:
      'Wash trading explained: what it is, how self-trades inflate volume in stocks, crypto, and NFT markets, why traders do it, and what the academic evidence says about whether it works.',
    dek: 'A trader sells an asset to themselves and the tape prints real-looking volume. Here is how the oldest manipulation in finance works, and why it refuses to die.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'wash trading',
      'what is wash trading',
      'wash trading definition',
      'wash trading example',
      'fake trading volume',
    ],
  },
  {
    slug: 'nft-markets',
    kicker: 'Explainer',
    navLabel: 'NFT markets',
    title: 'NFT Markets: Structure, Efficiency, and Manipulation',
    metaTitle: 'NFT Markets: Structure, Efficiency, and Manipulation',
    description:
      'How NFT markets actually work: marketplace mechanics, price formation, thin liquidity, and what peer-reviewed research says about efficiency and wash trading in NFT markets.',
    dek: 'Every trade is public, yet the headline numbers routinely lie. What the structure of NFT markets does to prices, volume, and trust.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'NFT markets',
      'NFT market structure',
      'NFT market efficiency',
      'NFT marketplaces',
      'NFT trading volume',
    ],
  },
  {
    slug: 'nft-wash-trading',
    kicker: 'Explainer',
    navLabel: 'NFT wash trading',
    title: 'NFT Wash Trading: Scale, Motives, and What the Data Shows',
    metaTitle: 'NFT Wash Trading: Scale, Motives, and What the Data Shows',
    description:
      'How big is NFT wash trading? On-chain estimates, the two motives behind it, the LooksRare token-incentive episode, and findings from The Economics of Wash Trading (SSRN).',
    dek: 'On some days, most of the reported NFT volume never involved two real people. The data on who wash trades, why, and what it changes.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'NFT wash trading',
      'wash trading NFT',
      'NFT fake volume',
      'NFT market manipulation',
      'how much NFT volume is wash trading',
    ],
  },
  {
    slug: 'wash-trading-detection',
    kicker: 'Methods',
    navLabel: 'Detection',
    title: 'How to Detect Wash Trading: Methods That Hold Up',
    metaTitle: 'Wash Trading Detection: On-Chain Methods That Hold Up',
    description:
      'Wash trading detection methods: self-trade graphs, funding-source analysis, round-trip filters, and statistical tests like Benford’s Law, from equities surveillance to NFT block data.',
    dek: 'You cannot subpoena a wallet. Detection on public blockchains leans on graph structure, funding trails, and statistics instead.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'wash trading detection',
      'detect wash trading',
      'wash trade detection crypto',
      'on-chain forensics',
      'fake volume detection',
    ],
  },
  {
    slug: 'is-wash-trading-illegal',
    kicker: 'Law',
    navLabel: 'Legality',
    title: 'Is Wash Trading Illegal? The Rules in Equities, Crypto, and NFTs',
    metaTitle: 'Is Wash Trading Illegal? Equities, Crypto, and NFT Rules',
    description:
      'Is wash trading illegal? What the Commodity Exchange Act, securities law, the IRS wash sale rule, and the EU’s MiCA regime say, and how the rules reach crypto and NFT markets.',
    dek: 'In regulated futures and equities the answer has been yes since 1936. In crypto and NFTs the answer is: increasingly, and retroactively.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'is wash trading illegal',
      'wash trading legal',
      'wash trading law',
      'crypto wash trading illegal',
      'NFT wash trading legal',
    ],
  },
  {
    slug: 'looksrare-wash-trading',
    kicker: 'Case study',
    navLabel: 'LooksRare',
    title: 'LooksRare and Token Incentives: A Natural Experiment in Wash Trading',
    metaTitle: 'LooksRare Wash Trading: Token Incentives as a Natural Experiment',
    description:
      'The LooksRare episode: how paying traders in LOOKS tokens for volume produced billions in wash trades, and what this natural experiment reveals about incentive design in NFT markets.',
    dek: 'Pay people per dollar of volume and they will manufacture dollars of volume. What LooksRare taught us about incentive design.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'LooksRare wash trading',
      'LooksRare',
      'token incentives',
      'trade-to-earn',
      'LOOKS token rewards',
    ],
  },
  {
    slug: 'crypto-wash-trading',
    kicker: 'Explainer',
    navLabel: 'Crypto exchanges',
    title: 'Crypto Wash Trading: How Exchanges Manufactured Their Own Volume',
    metaTitle: 'Crypto Wash Trading: How Exchanges Manufacture Volume',
    description:
      'Crypto wash trading on centralised exchanges: why venues inflate their own volume, what academic estimates found, and how it differs from NFT wash trading by traders.',
    dek: 'In NFT markets traders faked volume for rewards. On centralised crypto exchanges, the house often faked it for itself.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'crypto wash trading',
      'wash trading crypto exchanges',
      'exchange fake volume',
      'bitcoin wash trading',
      'crypto volume manipulation',
    ],
  },
  {
    slug: 'wash-trading-vs-wash-sale',
    kicker: 'Disambiguation',
    navLabel: 'Vs wash sale',
    title: 'Wash Trading vs Wash Sale: Two Different Things With One Name',
    metaTitle: 'Wash Trading vs Wash Sale: The Difference Explained',
    description:
      'Wash trading vs wash sale: one is market manipulation, the other a tax rule about loss harvesting. What each means, where each applies, and why the confusion persists.',
    dek: 'One is a manipulation offence, the other a tax rule. Confusing them changes what is illegal, who enforces it, and what it costs you.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'wash trading vs wash sale',
      'wash sale rule',
      'wash sale crypto',
      'wash trading difference',
      'tax loss harvesting crypto',
    ],
  },
  {
    slug: 'wash-trading-examples',
    kicker: 'Case studies',
    navLabel: 'Examples',
    title: 'Wash Trading Examples: Five Episodes That Show How It Works',
    metaTitle: 'Wash Trading Examples: Five Real Episodes Explained',
    description:
      'Real wash trading examples: stock pools of the 1920s, crypto exchange volume inflation, the LooksRare trade-to-earn era, NFT floor games, and reward-farming loops, each explained.',
    dek: 'From 1920s stock pools to trade-to-earn NFT loops: five concrete episodes, what each manipulator wanted, and how each was caught.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'wash trading examples',
      'wash trading example',
      'wash trade case study',
      'market manipulation examples',
      'fake volume examples',
    ],
  },
  {
    slug: 'fake-trading-volume',
    kicker: 'Explainer',
    navLabel: 'Fake volume',
    title: 'Fake Trading Volume: How to Read Market Numbers Without Being Fooled',
    metaTitle: 'Fake Trading Volume: How to Spot Inflated Market Numbers',
    description:
      'Fake trading volume distorts rankings, backtests, and market-size claims. Where it comes from, which statistics resist it, and a checklist for auditing any volume number.',
    dek: 'Volume is the most quoted and least verified number in markets. A working guide to reading it like an auditor instead of a mark.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'fake trading volume',
      'fake volume crypto',
      'inflated trading volume',
      'trading volume manipulation',
      'how to verify trading volume',
    ],
  },
  {
    slug: 'nft-market-manipulation',
    kicker: 'Explainer',
    navLabel: 'Manipulation',
    title: 'NFT Market Manipulation: The Complete Taxonomy',
    metaTitle: 'NFT Market Manipulation: Wash Trading, Floor Games, and More',
    description:
      'A taxonomy of NFT market manipulation: wash trading, floor price management, bid supports, sweep-and-relist games, and insider activity, with the evidence on each.',
    dek: 'Wash trading is the headline act, but thin NFT markets invite a whole repertoire. A field taxonomy, with the evidence for each move.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'NFT market manipulation',
      'NFT manipulation',
      'floor price manipulation',
      'NFT scams trading',
      'NFT price manipulation',
    ],
  },
  {
    slug: 'trade-to-earn',
    kicker: 'Mechanism design',
    navLabel: 'Trade-to-earn',
    title: 'Trade-to-Earn: Why Paying for Volume Buys You Wash Trading',
    metaTitle: 'Trade-to-Earn: Why Volume Rewards Buy Wash Trading',
    description:
      'Trade-to-earn programmes pay tokens for trading volume. The economics of why they attract wash trading, the LooksRare evidence, and how to design rewards that buy real activity.',
    dek: 'Every incentive is a price on a behaviour. Trade-to-earn priced the one behaviour a single actor can manufacture without limit.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    keywords: [
      'trade-to-earn',
      'trade to earn crypto',
      'volume rewards token',
      'liquidity mining trading',
      'exchange token incentives',
    ],
  },
];

// Standalone research reports (non-wash-trading), each with its own landing page.
export const reports = [
  {
    slug: 'the-state-of-edge-ai',
    kicker: 'Report',
    navLabel: 'Edge AI report',
    title: 'The State of Edge AI: The Report and What It Got Right',
    metaTitle: 'The State of Edge AI: Report by Advait Jayant et al.',
    description:
      'The State of Edge AI (Peri Labs, 2024): the report on why AI inference moves from cloud to device, its predictions, what happened next, and where to download the PDF.',
    dek: 'Written before on-device AI was a platform feature: why cloud-only intelligence hits latency, privacy, and bandwidth walls.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    pdf: 'https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf',
    scholarRecordUrl:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tGFdvmgAAAAJ&citation_for_view=tGFdvmgAAAAJ:u5HHmVD_uO8C',
    keywords: [
      'The State of Edge AI',
      'edge AI report',
      'on-device AI',
      'edge AI research',
      'Peri Labs',
    ],
  },
  {
    slug: 'beyond-ipos',
    kicker: 'Working paper',
    navLabel: 'Beyond IPOs',
    title: 'Beyond IPOs: The Cyclical Journey from Private to Public and Back Again',
    metaTitle: 'Beyond IPOs: The Private-to-Public-to-Private (P2P2P) Cycle',
    description:
      'Beyond IPOs (SSRN 4610086) by Advait Jayant: a study of 2,585 firms on why companies go public and then return private, the P2P2P cycle, take-private transactions, and post-IPO valuation.',
    dek: 'Why do firms leave the public markets they fought to enter? A study of 2,585 companies on the private-to-public-to-private cycle.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    ssrnUrl: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610086',
    ssrnShortUrl: 'https://ssrn.com/abstract=4610086',
    doi: '10.2139/ssrn.4610086',
    doiUrl: 'https://dx.doi.org/10.2139/ssrn.4610086',
    abstractId: '4610086',
    pages: 48,
    dateWritten: '2023-09-24',
    scholarRecordUrl:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tGFdvmgAAAAJ&citation_for_view=tGFdvmgAAAAJ:2osOgNQ5qMEC',
    keywords: [
      'Beyond IPOs',
      'P2P2P',
      'private to public to private',
      'take-private transaction',
      'why companies go private',
      'IPO research',
    ],
  },
  {
    slug: 'the-aifi-thesis',
    kicker: 'Report',
    navLabel: 'AiFi thesis',
    title: 'The AiFi Thesis: Financing AI Compute as an Asset Class',
    metaTitle: 'The AiFi Thesis: AI Compute as a Financeable Asset Class',
    description:
      'The AiFi Thesis (Peri Labs x GAIB, 2025): the report arguing AI compute becomes a directly financeable asset class and agents need payment rails, plus the predictions it landed.',
    dek: 'The argument that AI compute stops being a cloud line item and becomes something capital markets finance directly. Then Oracle, Blackstone, and AWS made it look obvious.',
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    pdf: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
    scholarRecordUrl:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tGFdvmgAAAAJ&citation_for_view=tGFdvmgAAAAJ:qjMakFHDy7sC',
    keywords: [
      'The AiFi Thesis',
      'AiFi',
      'AI compute financing',
      'AI x DeFi',
      'agent payments',
      'compute asset class',
    ],
  },
];

export function getReport(slug) {
  return reports.find((r) => r.slug === slug);
}

// Complete authored bibliography — every work on the Google Scholar profile.
// Drives the Publications section on /research and the author-corpus JSON-LD.
// `internal` links to a landing page on this site; `href` is the canonical source.
export const publications = [
  {
    group: 'Research papers',
    items: [
      {
        title: 'The Economics of Wash Trading',
        year: 2023,
        venue: 'SSRN Working Paper 4610162',
        type: 'ScholarlyArticle',
        href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610162',
        internal: '/research/the-economics-of-wash-trading',
        doi: '10.2139/ssrn.4610162',
        note: 'Cited in the Journal of Banking & Finance, European Journal of Finance, and an NBER working paper.',
      },
      {
        title: 'Beyond IPOs: The Cyclical Journey from Private to Public and Back Again',
        year: 2023,
        venue: 'SSRN Working Paper 4610086',
        type: 'ScholarlyArticle',
        href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610086',
        internal: '/research/beyond-ipos',
        doi: '10.2139/ssrn.4610086',
      },
    ],
  },
  {
    group: 'Industry reports',
    items: [
      {
        title: 'The AiFi Thesis',
        year: 2025,
        venue: 'Peri Labs x GAIB',
        type: 'Report',
        href: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
        internal: '/research/the-aifi-thesis',
      },
      {
        title: 'The State of Edge AI',
        year: 2024,
        venue: 'Peri Labs',
        type: 'Report',
        href: 'https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf',
        internal: '/research/the-state-of-edge-ai',
      },
    ],
  },
  {
    group: 'Technical books',
    items: [
      {
        title: 'Data Science and Machine Learning Series: Naive Bayes Classifier Advanced Concepts',
        year: 2020,
        venue: 'Technics Publications',
        type: 'Book',
        href: 'https://books.google.com/books?id=Q0A_zQEACAAJ',
      },
      {
        title: 'Data Science and Machine Learning Series: Bayes Theorem and the Naive Bayes Classifier',
        year: 2020,
        venue: 'Technics Publications',
        type: 'Book',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tGFdvmgAAAAJ&citation_for_view=tGFdvmgAAAAJ:d1gkVwhDpl0C',
      },
      {
        title: 'C++ Algorithm Series: Dynamic Programming',
        year: 2019,
        venue: "O'Reilly Media",
        type: 'Book',
        href: 'https://books.google.com/books?id=hIhOzQEACAAJ',
      },
      {
        title: 'C++ Algorithm Series: Binary Trees and Binary Search Trees',
        year: 2019,
        venue: "O'Reilly Media",
        type: 'Book',
        href: 'https://books.google.com/books?id=_uw5zQEACAAJ',
      },
      {
        title: 'C++ Algorithm Series: Stacks and Queues',
        year: 2019,
        venue: "O'Reilly Media",
        type: 'Book',
        href: 'https://books.google.com/books?id=NN5DzQEACAAJ',
      },
      {
        title: 'C++ Algorithm Series: Space Time Complexity Analysis',
        year: 2019,
        venue: "O'Reilly Media",
        type: 'Book',
        href: 'https://books.google.com/books?id=wGBAzQEACAAJ',
      },
      {
        title: 'The MATLAB Series: Functions',
        year: 2019,
        venue: "O'Reilly Media",
        type: 'Book',
        href: 'https://books.google.com/books?id=xveczQEACAAJ',
      },
    ],
  },
];

export const researchHub = {
  title: 'Research by Advait Jayant: Market Structure, AI Infrastructure, and Manipulation',
  description:
    'The complete research of Advait Jayant: SSRN papers on wash trading in NFT markets and the private-to-public-to-private cycle, reports on edge AI and AI compute finance, technical books, and explainers.',
};

export function articleUrl(slug) {
  return `${siteUrl}/research/${slug}`;
}

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(slug, count = 3) {
  const index = articles.findIndex((a) => a.slug === slug);
  if (index === -1) return articles.slice(0, count);
  // Rotate so every page cross-links a different trio of siblings.
  return Array.from({ length: count }, (_, i) => articles[(index + i + 1) % articles.length]);
}

// --- JSON-LD builders -------------------------------------------------------

const personNode = {
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: siteName,
  alternateName: ['Advait', 'Advait Jayant', '0xadvait'],
  url: siteUrl,
  jobTitle: 'Chief Strategy Officer',
  affiliation: { '@type': 'CollegeOrUniversity', name: 'London Business School' },
  sameAs: Object.values(socialLinks),
};

export const scholarlyArticleNode = {
  '@type': 'ScholarlyArticle',
  '@id': `${paper.doiUrl}#paper`,
  headline: paper.title,
  name: paper.title,
  author: { '@id': `${siteUrl}/#person` },
  datePublished: paper.dateWritten,
  url: paper.ssrnUrl,
  sameAs: [
    paper.ssrnShortUrl,
    paper.doiUrl,
    paper.researchGateUrl,
    paper.scholarRecordUrl,
  ],
  subjectOf: { '@id': `${paper.video.url}#video` },
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'DOI', value: paper.doi },
    { '@type': 'PropertyValue', propertyID: 'SSRN', value: paper.abstractId },
  ],
  keywords: paper.keywords.join(', '),
  numberOfPages: paper.pages,
  abstract:
    'A comprehensive examination of the efficiency of non-fungible token (NFT) markets, analysing the relationship between wash trading activities, real trading volumes, and prices, and showing that wash traders predominantly exploit token-based incentives on exchanges such as LooksRare.',
};

export const videoNode = {
  '@type': 'VideoObject',
  '@id': `${paper.video.url}#video`,
  name: paper.video.title,
  description:
    'Advait Jayant presents The Economics of Wash Trading, his research on wash trading and token incentives in NFT markets, at EthCC 2023 in Paris.',
  thumbnailUrl: paper.video.thumbnail,
  uploadDate: paper.video.uploadDate,
  contentUrl: paper.video.url,
  embedUrl: paper.video.embedUrl,
  url: paper.video.url,
  author: { '@id': `${siteUrl}/#person` },
};

export function buildArticleGraph(article, { faqs, isPaperPage = false, includePaper = true } = {}) {
  const url = articleUrl(article.slug);
  const graph = [
    personNode,
    ...(includePaper ? [scholarlyArticleNode] : []),
    ...(isPaperPage ? [videoNode] : []),
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Research', item: `${siteUrl}/research` },
        { '@type': 'ListItem', position: 3, name: article.navLabel, item: url },
      ],
    },
    {
      '@type': isPaperPage ? 'WebPage' : 'Article',
      '@id': `${url}#page`,
      headline: article.title,
      description: article.description,
      url,
      author: { '@id': `${siteUrl}/#person` },
      publisher: { '@id': `${siteUrl}/#person` },
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${siteUrl}/#website` },
      keywords: article.keywords.join(', '),
      ...(includePaper ? { citation: { '@id': `${paper.doiUrl}#paper` } } : {}),
      ...(isPaperPage ? { mainEntity: { '@id': `${paper.doiUrl}#paper` } } : {}),
    },
  ];

  if (faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

// One schema.org node per published work — the full authored corpus.
// Emitted on /research so Google's entity graph sees every publication by name.
export function publicationNodes() {
  return publications.flatMap((section) =>
    section.items.map((item) => ({
      '@type': item.type,
      name: item.title,
      headline: item.title,
      author: { '@id': `${siteUrl}/#person` },
      datePublished: String(item.year),
      url: item.internal ? `${siteUrl}${item.internal}` : item.href,
      ...(item.internal ? { sameAs: item.href } : {}),
      ...(item.doi
        ? { identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: item.doi } }
        : {}),
      publisher: item.venue,
    }))
  );
}
