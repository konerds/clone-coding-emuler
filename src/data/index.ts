import {
  IObjBenefit,
  IObjExBuiltToSpec,
  IObjFAQ,
  IObjMenuHeader,
  IObjPricing,
  IObjPrivacyPolicy,
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
  { text: 'how it works', href: '#How-It-works' },
  { text: 'out work', href: '#Our-Work' },
  { text: 'pricing', href: '#Pricing' },
  { text: 'the team', href: '#Team' },
  { text: 'faq', href: '#FAQ' },
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

export const listObjPrivacyPolicy: IObjPrivacyPolicy[] = [
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: 'This Privacy Policy governs the Websites operated by Relume Tech Pty Ltd. (hereinafter, "us", "we", or “Relume”), including, without limitation, the Website currently located at https://relume.io. By using the Website, you consent to the collection and use of your personal information as outlined in this Privacy Policy.',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: 'We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'heading',
    content: [
      {
        type: 'plain',
        text: '(1) ',
      },
      {
        type: 'strong',
        text: 'Website Visitors',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: `Relume automatically collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Relume's purpose in collecting non-personally identifying information is to better understand how Relume's visitors use its website. From time to time, Relume may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.`,
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'heading',
    content: [
      {
        type: 'plain',
        text: '(2) ',
      },
      {
        type: 'strong',
        text: 'Gathering of Information',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: `Certain visitors to Relume's websites choose to interact with Relume in ways that require Relume to gather personally-identifying information. The amount and type of information that Relume gathers depends on the nature of the interaction. For example, we ask visitors who sign up for our newsletter at https://relume.io to provide a name and email address.`,
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'heading',
    content: [
      {
        type: 'plain',
        text: '(3) ',
      },
      {
        type: 'strong',
        text: 'Security',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: 'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'heading',
    content: [
      {
        type: 'plain',
        text: '(4) ',
      },
      {
        type: 'strong',
        text: 'Protection of Information',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: `Relume discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Relume's behalf or to provide services available at Relume's website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Relume's website, you consent to the transfer of such information to them. Relume will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organisations, as described above, Relume discloses potentially personally-identifying and personally-identifying information only in response to a governmental requests, or when Relume believes in good faith that disclosure is reasonably necessary to protect the property or rights of Relume, third parties or the public at large`,
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'heading',
    content: [
      {
        type: 'plain',
        text: '(5) Google Analytics',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: 'Relume may also use third-party solutions to conduct web analytics, such as Google Analytics. Google Analytics is a web analytics service provided by Google, Inc., which uses cookies to help analyze how users use this website. The information generated by the cookie about your use of this Website (such as your IP address, the URL visited, the date and time the page was viewed) will be transmitted and stored by Google. Google will use this information to monitor your use of this Website, compiling reports on website activity for website operators and providing other services related to website activity and internet usage. Google may transfer this information to third parties where required by law, or where such third parties process information on Google’s behalf. For more information about Google’s privacy policy in respect of Google Analytics, please refer to ',
      },
      {
        type: 'a',
        href: 'http://www.google.com/analytics/learn/privacy.html',
        text: 'http://www.google.com/analytics/learn/privacy.html',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'heading',
    content: [
      {
        type: 'plain',
        text: '(6) ',
      },
      {
        type: 'strong',
        text: 'Links To Other Sites',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: 'Our Service may contain links to external sites that are operated and maintained by third parties over which we have no control. Privacy policies on such linked websites may be different from our Privacy Policy. You access such linked websites at your own risk. We encourage you to review the privacy policy of any such linked website you visit to understand that website’s collection, storage and use of your information.',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'heading',
    content: [
      {
        type: 'plain',
        text: '(7) ',
      },
      {
        type: 'strong',
        text: 'Cookies',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: 'Relume uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: `A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Relume uses cookies to help Relume identify and track visitors, their usage of `,
      },
      {
        type: 'a',
        href: 'https://relume.io',
        text: 'https://relume.io',
      },
      {
        type: 'plain',
        text: `, and their website access preferences. Relume visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Relume's websites, with the drawback that certain features of Relume websites may not function properly without the aid of cookies.`,
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: `By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Relume's use of cookies.`,
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'heading',
    content: [
      {
        type: 'plain',
        text: '(8) ',
      },
      {
        type: 'strong',
        text: 'Privacy Policy Changes',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: `Although most changes are likely to be minor, Relume may change its Privacy Policy from time to time, and in Relume's sole discretion. Relume encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.`,
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: '\u200c',
      },
    ],
  },
  {
    type: 'heading',
    content: [
      {
        type: 'plain',
        text: '(9) ',
      },
      {
        type: 'strong',
        text: 'Feedback',
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'plain',
        text: 'If you would like to ask questions or provide comments regarding this Privacy Policy you may do so by sending us an email at ',
      },
      {
        type: 'a',
        href: '#',
        text: 'hello@relume.io',
      },
    ],
  },
];
