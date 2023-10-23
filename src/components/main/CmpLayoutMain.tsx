import { FC, createElement } from 'react';
import { ReactComponent as IconArrowDownNatural } from '../../assets/image/icon/icon-arrow-down-natural.svg';
import { ReactComponent as IconCMSUserFriendly } from '../../assets/image/icon/icon-cms-user-friendly.svg';
import { ReactComponent as IconProcessWork1 } from '../../assets/image/icon/icon-step1-visual-design.svg';
import { ReactComponent as IconProcessWork2 } from '../../assets/image/icon/icon-step2-webflow-dev.svg';
import { ReactComponent as IconProcessWork3 } from '../../assets/image/icon/icon-step3-feedback.svg';
import { ReactComponent as IconProcessWork4 } from '../../assets/image/icon/icon-step4-onboarding.svg';
import { ReactComponent as IconProcessWork5 } from '../../assets/image/icon/icon-step5-launch.svg';
import ImgBgProcessWork from '../../assets/image/bg-image-process-work.png';

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
  return (
    <main>
      <div className="bg-gradient-main-top absolute -left-[70px] -top-[41px] h-[280px] w-[280px] rotate-[165deg] rounded-full opacity-80 blur-3xl"></div>
      <section className="relative z-[10] px-[5%] pb-[64px] pt-[40px]">
        <div className="text-center text-[40px] leading-[48px] tracking-tight">
          Your designer's favourite web developer
        </div>
        <div className="mt-[24px] text-center text-[16px] leading-[26px] tracking-tight">
          Relume can build your Figma, Sketch or Adobe XD website design pixel
          perfect on Webflow.
        </div>
        <div className="mt-[42.61px] flex flex-col items-center">
          <div className="text-[11px] font-semibold">SEE FOR YOURSELF</div>
          <IconArrowDownNatural className="mt-[15.89px]" />
        </div>
        <iframe
          className="mt-[56px] rounded-lg border-[2px] border-black"
          width="100%"
          height="390.29px"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQ5dHDQBsXPO21b03SHuq6Z%2FRelume-Website-Design%3Fnode-id%3D0%253A1"
          allowFullScreen
        ></iframe>
      </section>
      <section className="relative grid grid-cols-1 gap-y-[56px] px-[5%] pb-[64px] pt-[40px]">
        {listObjBenefit.map((objBenefit, idxObjBenefit) => {
          return (
            <div key={idxObjBenefit} className="z-[10] tracking-tighter">
              <div className="flex items-center">
                <IconCMSUserFriendly className="mr-[16px] h-[32px] w-[32px]" />
                <span className="text-[24px] leading-[32px] tracking-tighter">
                  {objBenefit.title}
                </span>
              </div>
              <div className="mt-[16px] text-[16px] leading-[26px] tracking-tighter">
                {objBenefit.desc}
              </div>
            </div>
          );
        })}
        <div className="bg-gradient-main-top absolute -right-[48.71px] bottom-[30px] h-[280px] w-[280px] -rotate-[30deg] rounded-full opacity-80 blur-3xl"></div>
      </section>
      <section className="relative z-[10] bg-[#0a0a0a] px-[5%] py-[64px] text-white">
        <div className="text-center">
          <div className="text-[36px] leading-[44px] tracking-tight">
            How it works
          </div>
          <div className="mt-[24px] text-[18px] leading-[33px] tracking-tight">
            As highly experienced Webflow experts, Relume will carefully
            translate your designs to code using Webflow best practices.
          </div>
        </div>
        <div className="mt-[64px] grid grid-cols-1 gap-y-[44px]">
          {listObjProcessWork.map((objProcess, idxObjProcess) => {
            return (
              <div
                key={idxObjProcess}
                className="relative flex flex-col items-center rounded-2xl border-[2px] border-white px-[5%] py-[16px]"
              >
                <div className="absolute -top-[24px] left-[5%] flex h-[40px] w-[40px] items-center justify-center rounded-full border-[2px] border-white bg-[#0a0a0a]">
                  {idxObjProcess + 1}
                </div>
                <div
                  style={{ backgroundImage: `url(${ImgBgProcessWork})` }}
                  className="bg-gradient-image-process-work flex w-full items-center justify-center rounded-3xl bg-cover"
                >
                  {createElement(objProcess.image, {
                    className: 'w-[240px] h-[240px]',
                  })}
                </div>
                <div className="mt-[24px] pb-[10px] pt-[8px]">
                  <div className="text-[24px] leading-[32px] tracking-tight">
                    {objProcess.title}
                  </div>
                  <div className="mt-[8px] text-[18px] leading-[1.5] tracking-tight">
                    {objProcess.descSentence}
                  </div>
                  <div className="mt-[16px] text-[16px] leading-[1.5] tracking-tight text-[#ffffffd9]">
                    {objProcess.descParagraph}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="px-[5%] py-[64px]">
        <div className="mb-[48px] text-center">
          <div className="mb-[24px] mt-[16px] text-[36px] leading-[44px] tracking-tight">
            Don't compromise your design with average web development
          </div>
          <div className="mb-[10px] text-[18px] leading-[1.5] tracking-tight">
            You've gone to all this effort to create your beautiful design -
            don't compromise with average development. We guarantee pixel
            perfect design and smooth interactions that delight your users.
          </div>
        </div>
      </section>
    </main>
  );
};

export default CmpLayoutMain;
