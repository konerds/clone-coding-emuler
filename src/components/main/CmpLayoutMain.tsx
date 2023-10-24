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

const CmpLayoutMain: FC = () => {
  const listObjBenefit = [
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
  const listObjProcessWork = [
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
  const listObjExBuiltToSpec = [
    {
      name: 'Goodhousing.com.au',
      type: 'CONSTRUCTION COMPANY',
      quoteClient:
        '"They have a strong work ethic and really care about the end product, which made the whole process feel seamless." - Lily',
      linkFigma:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F76D0zWGXi4FJydVnMuzumL%2FWebsite-Design%3Fnode-id%3D1%253A488',
      linkWebflow: '',
    },
    {
      name: 'Lauraavery.com.au',
      type: 'SKIN CARE STUDIO',
      quoteClient: `"You can tell there is a lot of thought put behind every detail. I don't think they could have done a better job!" - Laura`,
      linkFigma:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F76D0zWGXi4FJydVnMuzumL%2FWebsite-Design%3Fnode-id%3D1%253A10',
      linkWebflow: '',
    },
    {
      name: 'Yolomedia.com.au',
      type: 'CREATIVE AGENCY',
      quoteClient: `"Props to them, they manage to always get the design spot on, it's quite impressive." - Tristan`,
      linkFigma:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F76D0zWGXi4FJydVnMuzumL%2FWebsite-Design%3Fnode-id%3D148%253A1749',
      linkWebflow: '',
    },
  ];

  return (
    <main>
      <CmpContentHero />
      <CmpContentBenefit listObjBenefit={listObjBenefit} />
      <CmpContentProcess listObjProcessWork={listObjProcessWork} />
      <CmpContentComparison />
      <CmpContentBuiltToSpec listObjExBuiltToSpec={listObjExBuiltToSpec} />
      <section className="relative px-[5%] py-[64px] text-center">
        <div className="bg-blur-circle-top-left"></div>
        <div className="relative z-[10]">
          <div className="mb-[48px]">
            <div className="mb-[24px] mt-[16px] text-[36px] font-medium leading-[44px]">
              Pricing
            </div>
            <div className="mb-[10px] inline-block text-[18px] leading-[1.5]">
              Here's what it will cost in per-page
              <br />
              to convert your design to Webflow.
            </div>
          </div>
          <div className="min-h-[1000px] rounded-[16px] bg-[#161616] px-[16px] py-[24px]"></div>
        </div>
        <div className="bg-blur-circle-bottom-right"></div>
      </section>
      <section className="relative px-[5%] py-[64px] text-center">
        <div className="min-h-[1000px]"></div>
        <div className="bg-blur-circle-bottom-left"></div>
      </section>
      <section className="relative px-[5%] py-[64px] text-center">
        <div className="min-h-[1000px]"></div>
        <div className="bg-blur-circle-bottom-right"></div>
      </section>
      <section className="relative bg-[#0a0a0a] py-[64px] text-center">
        <div className="mb-[40px] px-[5%] text-white">
          <div className="mb-[16px] mt-[16px] text-[36px] font-medium leading-[44px]">
            Get started
          </div>
          <div className="mb-[10px] inline-block text-[18px] leading-[1.5]">
            It only takes a few minutes to kick off a project. Fill in the
            details below and we'll be in touch.
          </div>
        </div>
        <div className="min-h-[600px]"></div>
      </section>
    </main>
  );
};

export default CmpLayoutMain;
