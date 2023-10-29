import {
  IObjBenefit,
  IObjExBuiltToSpec,
  IObjFAQ,
  IObjMenuHeader,
  IObjPricing,
  IObjProcessWork,
  IObjRoster,
  IObjTeam,
} from '../interface';
import IconCircleStep1 from '../assets/image/icon/icon-circle-step1.svg';
import IconCircleStep2 from '../assets/image/icon/icon-circle-step2.svg';
import IconCircleStep3 from '../assets/image/icon/icon-circle-step3.svg';
import IconCircleStep4 from '../assets/image/icon/icon-circle-step4.svg';
import IconCircleStep5 from '../assets/image/icon/icon-circle-step5.svg';
import IconProcessWork1 from '../assets/image/icon/icon-step1-visual-design.svg';
import IconProcessWork2 from '../assets/image/icon/icon-step2-webflow-dev.svg';
import IconProcessWork3 from '../assets/image/icon/icon-step3-feedback.svg';
import IconProcessWork4 from '../assets/image/icon/icon-step4-onboarding.svg';
import IconProcessWork5 from '../assets/image/icon/icon-step5-launch.svg';
import ImgProfileDan from '../assets/image/img-profile-dan.png';
import ImgArrowDan from '../assets/image/img-arrow-dan.svg';
import ImgFact1ProfileDan from '../assets/image/img-fact1-dan.png';
import ImgFact2ProfileDan from '../assets/image/img-fact2-dan.png';
import ImgProfileAdam from '../assets/image/img-profile-adam.png';
import ImgFact1ProfileAdam from '../assets/image/img-fact1-adam.png';
import ImgFact2ProfileAdam from '../assets/image/img-fact2-adam.png';
import ImgArrowAdam from '../assets/image/img-arrow-adam.svg';
import ImgPerson1Roster from '../assets/image/img-person1-roster.png';
import ImgPerson2Roster from '../assets/image/img-person2-roster.png';
import ImgPerson3Roster from '../assets/image/img-person3-roster.png';
import ImgPerson4Roster from '../assets/image/img-person4-roster.png';
import ImgPerson5Roster from '../assets/image/img-person5-roster.png';

export const listObjMenuHeader: IObjMenuHeader[] = [
  { text: 'how it works', href: '#' },
  { text: 'out work', href: '#' },
  { text: 'pricing', href: '#' },
  { text: 'the team', href: '#' },
  { text: 'faq', href: '#' },
];

export const listObjBenefit: IObjBenefit[] = [
  {
    title: 'Attention to detail',
    desc: 'Many developers cringe at the thought of pixel perfection. Not us, we live and breath pixels and understand the effort it takes to make a website beautiful.',
  },
  {
    title: 'No headaches',
    desc: 'Gone are the days of going back and forth with developers when reviewing the design. We get it right the first time, which saves you time and headaches.',
  },
  {
    title: 'Fast execution',
    desc: "As highly experienced Webflow developers we're able to build your website within 2-4 weeks depending on the complexity of the design.",
  },
  {
    title: 'Easy and reliable',
    desc: `Just as important as our code quality, we care about design details, communication, timelines and project management.`,
  },
];

export const listObjProcessWork: IObjProcessWork[] = [
  {
    iconStep: IconCircleStep1,
    image: IconProcessWork1,
    title: 'Share your designs',
    desc: {
      sentence: 'Determine costs and timeline...',
      paragraph:
        'We review your designs in detail and provide you with a fixed-price-breakdown for each page and a timeline for the project.',
    },
  },
  {
    iconStep: IconCircleStep2,
    image: IconProcessWork2,
    title: 'Begin development',
    desc: {
      sentence: 'Begin building on Webflow...',
      paragraph: `If you're happy with the price, we'll start the work right away, by building each page across mobile, tablet and desktop.`,
    },
  },
  {
    iconStep: IconCircleStep3,
    image: IconProcessWork3,
    title: 'Provide feedback',
    desc: {
      sentence: 'Add the final polish...',
      paragraph: `Once we're 80% of the way through to completion, we will share a link for you to review the website on a staging site and provide feedback.`,
    },
  },
  {
    iconStep: IconCircleStep4,
    image: IconProcessWork4,
    title: 'Webflow training & support',
    desc: {
      sentence: 'Learn how to use Webflow...',
      paragraph:
        'We provide you with post-30 day launch support and a library of personalised tutorials on how to use your new website so that you are well equiped to take control of the website.',
    },
  },
  {
    iconStep: IconCircleStep5,
    image: IconProcessWork5,
    title: 'Launch new website',
    desc: {
      sentence: 'Release it to the world...',
      paragraph:
        'Once the website has been put through final testing, we will transfer the website to your own Webflow account and domain and launch the website on your desired date.',
    },
  },
];

export const listObjExBuiltToSpec: IObjExBuiltToSpec[] = [
  {
    name: 'Goodhousing.com.au',
    type: 'CONSTRUCTION COMPANY',
    colorBadgeType: '#d4eff0',
    quoteClient: {
      content:
        'They have a strong work ethic and really care about the end product, which made the whole process feel seamless.',
      author: 'Lily',
    },
    link: {
      figma:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F76D0zWGXi4FJydVnMuzumL%2FWebsite-Design%3Fnode-id%3D1%253A488',
      web: 'https://goodhousing.com.au',
    },
  },
  {
    name: 'Lauraavery.com.au',
    type: 'SKIN CARE STUDIO',
    colorBadgeType: '#e9e5dd',
    quoteClient: {
      content:
        "You can tell there is a lot of thought put behind every detail. I don't think they could have done a better job!",
      author: 'Laura',
    },
    link: {
      figma:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F76D0zWGXi4FJydVnMuzumL%2FWebsite-Design%3Fnode-id%3D1%253A10',
      web: 'https://lauraavery.com.au',
    },
  },
  {
    name: 'Yolomedia.com.au',
    type: 'CREATIVE AGENCY',
    colorBadgeType: '#deeffa',
    quoteClient: {
      content:
        "Props to them, they manage to always get the design spot on, it's quite impressive.",
      author: 'Tristan',
    },
    link: {
      figma:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F76D0zWGXi4FJydVnMuzumL%2FWebsite-Design%3Fnode-id%3D148%253A1749',
      web: 'https://www.yolomedia.com.au',
    },
  },
];

export const listObjPricing: IObjPricing[] = [
  {
    type: 'basic',
    priceUSD: 1000,
    unit: 'page',
    listSupport: [
      { type: 'design-complexity', support: 'low' },
      { type: 'responsive-development', support: true },
      { type: 'seo-setup', support: true },
      { type: 'content-population', support: true },
      { type: 'cms-implementation', support: true },
      { type: 'advanced-animations', support: false },
    ],
  },
  {
    type: 'advanced',
    priceUSD: 2500,
    unit: 'page',
    listSupport: [
      { type: 'design-complexity', support: 'medium' },
      { type: 'responsive-development', support: true },
      { type: 'seo-setup', support: true },
      { type: 'content-population', support: true },
      { type: 'cms-implementation', support: true },
      { type: 'advanced-animations', support: true },
    ],
  },
  {
    type: 'professional',
    priceUSD: 4000,
    unit: 'page',
    listSupport: [
      { type: 'design-complexity', support: 'high' },
      { type: 'responsive-development', support: true },
      { type: 'seo-setup', support: true },
      { type: 'content-population', support: true },
      { type: 'cms-implementation', support: true },
      { type: 'advanced-animations', support: true },
    ],
  },
];

export const listObjTeam: IObjTeam[] = [
  {
    introduce:
      'Dan takes care of day to day business operations, ensures projects run smoothly and finds the best Webflow talent to help execute projects.',
    imageProfile: ImgProfileDan,
    positionProfile: 'co-founder',
    nameProfile: 'Dan',
    iconArrow: ImgArrowDan,
    textFact: '"driven & friendly"',
    imageFact1: ImgFact1ProfileDan,
    altImageFact1:
      'Image and text that reads &quot;started his first business at age 15&quot;',
    imageFact2: ImgFact2ProfileDan,
    altImageFact2:
      'Image and text that reads &quot;can play beethoven blindfolded&quot;',
  },
  {
    introduce:
      'Adam provides creative direction for the business and ensures all projects ensures your website will be built on Webflow, pixel perfect.',
    imageProfile: ImgProfileAdam,
    positionProfile: 'co-founder',
    nameProfile: 'Adam',
    iconArrow: ImgArrowAdam,
    textFact: '"passionate & creative"',
    imageFact1: ImgFact1ProfileAdam,
    altImageFact1: 'Image and text that reads &quot;can moonwalk like MJ&quot;',
    imageFact2: ImgFact2ProfileAdam,
    altImageFact2:
      'Image and text that reads &quot;taught himself photoshop at age 12&quot;',
  },
];

export const listObjRoster: IObjRoster[] = [
  {
    name: '1',
    imagePerson: ImgPerson1Roster,
  },
  {
    name: '2',
    imagePerson: ImgPerson2Roster,
  },
  {
    name: '3',
    imagePerson: ImgPerson3Roster,
  },
  {
    name: '4',
    imagePerson: ImgPerson4Roster,
  },
  {
    name: '5',
    imagePerson: ImgPerson5Roster,
  },
];

export const listCapability = [
  'WEB DESIGN (UX/UI)',
  'DESIGN SYSTEM IMPLEMENTATION',
  'WEBFLOW DEVELOPMENT',
  'BRANDING',
  'ANIMATION',
  'ART DIRECTION',
  'ILLUSTRATION',
  'PLATFORM INTEGRATION',
];

export const listObjFAQ: IObjFAQ[] = [
  {
    question: `Do my designs need to be in Figma, Adobe or Sketch?`,
    answer: `No, we also accept other forms of designs including video files and images.`,
  },
  {
    question: `How long will it take to build my website on Webflow?`,
    answer: `Most website builds take 2-4 weeks to complete. Some websites may take longer depending on the size of the website and the responsiveness of clients.`,
  },
  {
    question: `Why do I need Relume, can’t I build the Webflow website myself?`,
    answer: `A platform and CMS like Webflow is only as good as it's implementation. That's why it's important to hire an expert, like Relume, to help build the core of your Webflow website, so that if you choose to be hands on, you can build upon a strong foundation.`,
  },
  {
    question: `Can I host my Webflow website anywhere?`,
    answer: `We highly recommend that you host your website through Webflow's AWS system if you wish to gain access to all the powerful CMS and hosting features that Webflow has to offer. All hosting plans include automatic backups, version control, SEO management, new features as they are released, and security updates. Hosting your website on Webflow removes the requirement for monthly maintenance retainers that are usually associated with platforms such as Wordpress.`,
  },
  {
    question: `Can you help improve my design?`,
    answer: `Yes, we're more than happy to discuss custom options if you want us to make any adjustments to your current design.`,
  },
  {
    question: `Do I need to provide you with mobile and tablet designs?`,
    answer: `No, we're able to design for mobile and tablet based off your desktop design. However, if you wish to provide your own designs for mobile and tablet then that's fine too.`,
  },
  {
    question: `Do you offer any support?`,
    answer: `Yes. We offer support for the duration of 30 days post launch, so that if you have any questions, we're there to help.`,
  },
  {
    question: `Do you offer Webflow training?`,
    answer: `Yes. We provide our clients with a library of personalised tutorials on how to use your new website so that you are well equipped to take full control and ownership of your website. `,
  },
];
