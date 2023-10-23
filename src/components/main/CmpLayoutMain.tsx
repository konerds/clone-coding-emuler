import { FC } from 'react';
import { ReactComponent as IconArrowDownNatural } from '../../assets/image/icon/icon-arrow-down-natural.svg';
import { ReactComponent as IconCMSUserFriendly } from '../../assets/image/icon/icon-cms-user-friendly.svg';

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
      <section className="relative z-[10] bg-[#0a0a0a] py-[64px]"></section>
    </main>
  );
};

export default CmpLayoutMain;
