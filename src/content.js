import React from 'react';
import TitleSlide from './components/TitleSlide';
import ContentSlide from './components/ContentSlide';

export default [
  {
    component: TitleSlide,
    content: { children: 'What makes a business investable?' },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Agenda',
      bullets: [
        'Intro',
        'How VCs Operate',
        'What VCs Look for in a Potential Investment',
        'Demo',
      ],
    },
  },
  {
    component: TitleSlide,
    content: { children: 'Intro' },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Background',
      bullets: [
        `Grew up in Karachi, Pakistan`,
        `Lived in Dubai, Joburg, Windsor, Boston`,
        `Transitioned from a business degree to software engineering`,
        `Current at TDAmeritrade building thinkorswim Web`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'VCIC',
      bullets: [
        `International VC competition for undergrad and graduate students`,
        `24 hours to research 3 companies`,
        `3 rounds: due diligence, partner discussion, negotation`,
      ],
    },
  },
  {
    component: TitleSlide,
    content: { children: 'How VCs Operate' },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Structure',
      bullets: [
        `10 year fund duration`,
        `Start new fund every 3 years`,
        `Shapes return requirements over time`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Required Return',
      bullets: [
        `3x money over lifetime of fund (10 years) - 30M`,
        `1/3 of investments will lose money - 10M lost`,
        `1/3 of investments will go even - 10M retained (no return)`,
        `1/3 of investments need to go 10x - (10M needs to become 100M to reach approx goal of 3 x 30M)`,
        `Succeeding pays for innovation across startups`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Terminology',
      bullets: [
        `Equity`,
        `Pre-Money - 0.25M investment on 1M is 20% stake`,
        `Post-Money - 0.25M investment on 1M is 25% stake`,
        `Convertible Note`,
        `Safe`,
      ],
    },
  },
  {
    component: TitleSlide,
    content: { children: 'How VCs Operate Questions' },
  },
  {
    component: TitleSlide,
    content: { children: 'What VCs Look for in a Potential Investment' },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Bottom Line Question',
      bullets: [`Will this go 10x or better?`],
    },
  },
  {
    component: TitleSlide,
    content: { children: 'Product-Market Fit' },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Solving a Real Problem',
      bullets: [
        `Make something hard or annoying easier`,
        `Reduce friction between parties`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'MVP-mindedness',
      bullets: [
        `Zappos originally only bought the shoes after customers bought them`,
        `Dropbox simply created a video explaining what their product does to find out what the reception would be, rather than putting in the resources to build it first`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Real Revenue is the best POC',
      bullets: [`SaaS companies often get paid to build betas`],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Purpose',
      bullets: [
        `Attracts customers who care about social change`,
        `Indicates greater motivation from founders`,
      ],
    },
  },
  {
    component: TitleSlide,
    content: { children: 'Product-Market Fit Questions' },
  },
  {
    component: TitleSlide,
    content: { children: 'Business Model' },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Timing: not too early or late',
      bullets: [
        `Flooz - digital currency in the late 90s`,
        `Medical televisits`,
        `Grocery delivery`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Large enough Total Addressable Market (real or analog)',
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Attractive scaling ecnomics',
      bullets: [`Revenue = Lifetime value - Acquisition cost`],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Network effects',
      bullets: [`Facebook is a perfect example`, `Double edged sword`],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Exit Strategy',
      bullets: [`IPO`, `Acquisition`],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Intellectual Property',
      bullets: [
        `Barrier to entry for competitors - stay competitive longer`,
        `Caveat - IP is sometimes only a psychological barrier due to cost of enforcement`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: '10x better than incumbents',
      bullets: [`MoviePass vs A List`],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Stickiness',
      bullets: [
        `Spaces with big opportunity often have intertia`,
        `Digication`,
        `Trilogy Education`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Headroom for founders on cap table',
      bullets: [
        `Retention of ownership is a strong incentive for founders`,
        `Less practical over time but still ideal`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Thriving ecosystem',
      bullets: [
        `Will you have to build everything or is there a support system in place`,
        `Riot Games and esports`,
      ],
    },
  },
  {
    component: TitleSlide,
    content: { children: 'Business Model Questions' },
  },
  {
    component: TitleSlide,
    content: { children: 'Team' },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Previous successes',
      bullets: [
        `The Lubins exited Reppr early so they could have a success on their belts`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Relevant background',
      bullets: [
        `An analyst at EY has accolades, but is not entirely convincing when they expain an expansion strategy for a laundry app business`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Success condition mindedness',
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Focus',
      bullets: [
        `It's easy to drown in opportunity`,
        `Example: Analytics on a book publishing platform`,
      ],
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Ability to lead and develop teams',
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'Obsession',
    },
  },
  {
    component: ContentSlide,
    content: {
      title: '2-3 founders',
    },
  },
  {
    component: ContentSlide,
    content: {
      title: 'No strategic red flags',
      bullets: [
        `"I want to hire a domain expert with your money"`,
        `1% of 1% of market claims`,
        `Outrageous growth claims`,
      ],
    },
  },
  {
    component: TitleSlide,
    content: { children: 'Team Questions' },
  },
  {
    component: TitleSlide,
    content: { children: 'Demo' },
  },
  {
    component: ContentSlide,
    content: {
      title: (
        <iframe
          src='https://docs.google.com/spreadsheets/d/e/2PACX-1vStKurNsaIXsmdEfR-avDiPpPtzSEqbjth9bWusNefWxeawvvtwbQy270RpuWSVP0514TqTYkeEXLVh/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false'
          style={{
            height: '80%',
            width: '100%',
          }}
        />
      ),
      takeFullSpace: true,
    },
  },

  {
    component: TitleSlide,
    content: { children: 'Demo Questions' },
  },
  {
    component: TitleSlide,
    content: { children: 'Fin' },
  },
];
