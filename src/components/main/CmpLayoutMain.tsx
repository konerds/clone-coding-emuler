import { FC } from 'react';
import { ReactComponent as IconProcessWork1 } from '../../assets/image/icon/icon-step1-visual-design.svg';
import { ReactComponent as IconProcessWork2 } from '../../assets/image/icon/icon-step2-webflow-dev.svg';
import { ReactComponent as IconProcessWork3 } from '../../assets/image/icon/icon-step3-feedback.svg';
import { ReactComponent as IconProcessWork4 } from '../../assets/image/icon/icon-step4-onboarding.svg';
import { ReactComponent as IconProcessWork5 } from '../../assets/image/icon/icon-step5-launch.svg';
import CmpContentHero from './hero/CmpContentHero';
import CmpContentBenefit from './benefit/CmpContentBenefit';
import CmpContentProcess from './process/CmpContentProcess';
import CmpContentComparison from './comparison/CmpContentComparison';
import CmpContentBuiltToSpec from './built-to-spec/CmpContentBuiltToSpec';
import {
  IObjBenefit,
  IObjExBuiltToSpec,
  IObjProcessWork,
} from '../../interface';
import CmpContentPricing from './pricing/CmpContentPricing';
import CmpContentTeam from './team/CmpContentTeam';
import CmpContentQNA from './qna/CmpContentQNA';
import CmpContentContact from './contact/CmpContentContact';

const CmpLayoutMain: FC = () => {
  const listObjBenefit: IObjBenefit[] = [
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
  const listObjProcessWork: IObjProcessWork[] = [
    {
      image: IconProcessWork1,
      title: 'Share your designs',
      descSentence: 'Determine costs and timeline...',
      descParagraph:
        'We review your designs in detail and provide you with a fixed-price-breakdown for each page and a timeline for the project.',
    },
    {
      image: IconProcessWork2,
      title: 'Begin development',
      descSentence: 'Begin building on Webflow...',
      descParagraph: `If you're happy with the price, we'll start the work right away, by building each page across mobile, tablet and desktop.`,
    },
    {
      image: IconProcessWork3,
      title: 'Provide feedback',
      descSentence: 'Add the final polish...',
      descParagraph: `Once we're 80% of the way through to completion, we will share a link for you to review the website on a staging site and provide feedback.`,
    },
    {
      image: IconProcessWork4,
      title: 'Webflow training & support',
      descSentence: 'Learn how to use Webflow...',
      descParagraph:
        'We provide you with post-30 day launch support and a library of personalised tutorials on how to use your new website so that you are well equiped to take control of the website.',
    },
    {
      image: IconProcessWork5,
      title: 'Launch new website',
      descSentence: 'Release it to the world...',
      descParagraph:
        'Once the website has been put through final testing, we will transfer the website to your own Webflow account and domain and launch the website on your desired date.',
    },
  ];
  const listObjExBuiltToSpec: IObjExBuiltToSpec[] = [
    {
      name: 'Goodhousing.com.au',
      type: 'CONSTRUCTION COMPANY',
      colorBadgeType: '#d4eff0',
      quoteClient:
        '"They have a strong work ethic and really care about the end product, which made the whole process feel seamless." - Lily',
      linkFigma:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F76D0zWGXi4FJydVnMuzumL%2FWebsite-Design%3Fnode-id%3D1%253A488',
      linkWeb: 'https://goodhousing.com.au',
    },
    {
      name: 'Lauraavery.com.au',
      type: 'SKIN CARE STUDIO',
      colorBadgeType: '#e9e5dd',
      quoteClient: `"You can tell there is a lot of thought put behind every detail. I don't think they could have done a better job!" - Laura`,
      linkFigma:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F76D0zWGXi4FJydVnMuzumL%2FWebsite-Design%3Fnode-id%3D1%253A10',
      linkWeb: 'https://lauraavery.com.au',
    },
    {
      name: 'Yolomedia.com.au',
      type: 'CREATIVE AGENCY',
      colorBadgeType: '#deeffa',
      quoteClient: `"Props to them, they manage to always get the design spot on, it's quite impressive." - Tristan`,
      linkFigma:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F76D0zWGXi4FJydVnMuzumL%2FWebsite-Design%3Fnode-id%3D148%253A1749',
      linkWeb: 'https://www.yolomedia.com.au',
    },
  ];

  return (
    <main className="text-[#161616]">
      <CmpContentHero />
      <CmpContentBenefit listObjBenefit={listObjBenefit} />
      <CmpContentProcess listObjProcessWork={listObjProcessWork} />
      <CmpContentComparison />
      <CmpContentBuiltToSpec listObjExBuiltToSpec={listObjExBuiltToSpec} />
      <CmpContentPricing />
      <CmpContentTeam />
      <CmpContentQNA />
      <CmpContentContact />
    </main>
  );
};

export default CmpLayoutMain;
