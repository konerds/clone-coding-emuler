import { FC, createElement } from 'react';
import tw from 'tailwind-styled-components';
import { customRP } from '../../../utils';
import ImgBgGrainLatest from '../../../assets/image/img-bg-grain-latest.png';
import ImgBgGradientAngle from '../../../assets/image/img-bg-gradient-angle.png';
import { ReactComponent as IconLock } from '../../../assets/image/icon/icon-lock.svg';

type TPropsCmpContentTeam = {
  listObjTeam: {
    introduce: string;
    imageProfile: string;
    iconArrow: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
    classNameIconArrow: string;
  }[];
  listObjRoster: {
    name: string;
    imagePerson: string;
  }[];
};

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImgBgGrainLatest})`,
});
const SectionWrapper = tw.section`
relative bg-[size:300px_300px] bg-[position:0px_0px] py-[120px] max-desktop:py-[104px] max-tablet:py-[64px]
`;

const CmpContentTeam: FC<TPropsCmpContentTeam> = ({
  listObjTeam,
  listObjRoster,
}) => {
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <div className="relative z-[10] px-[5%] py-[64px]">
        <div className="mx-auto mb-[48px] flex flex-col text-center">
          <div className="mb-[24px] mt-[16px] text-[36px] font-medium leading-[44px]">
            <span className="break-words -tracking-[1.92px]">
              Meet the team that cares about{' '}
            </span>
            <span className="whitespace-nowrap -tracking-[1.92px]">
              good design
            </span>
          </div>
          <div className="mb-[10px] inline-block break-words text-[18px] leading-[1.5] -tracking-[0.4px]">
            Meet our company founders Dan and Adam
          </div>
        </div>
        <div className="mb-[24px] grid grid-cols-1 gap-x-[40px] gap-y-[24px]">
          {listObjTeam.map((objTeam, idxObjTeam) => {
            return (
              <div
                key={idxObjTeam}
                className="flex flex-col items-stretch rounded-[16px] border-[2px] border-[#161616] bg-white p-[16px]"
              >
                <div className="relative mb-[24px] flex items-center justify-center rounded-[12px] bg-[#d8d5d1]">
                  <img
                    className="-ml-[8px] mt-[48px] w-[90%] max-w-[400px]"
                    src={objTeam.imageProfile}
                    alt="dan"
                  />
                  {createElement(objTeam.iconArrow, {
                    className: objTeam.classNameIconArrow,
                  })}
                </div>
                <div className="mb-[24px] text-[18px] leading-[1.5] -tracking-[0.4px]">
                  {objTeam.introduce}
                </div>
                <button
                  type="button"
                  className="relative flex items-center justify-center rounded-[8px] border-[2px] border-black bg-white px-[32px] py-[12px]"
                >
                  <IconLock className="absolute left-[16px] top-[12px]" />
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[14px] font-bold leading-[20px] tracking-[0.8px]">
                    UNLOCK RANDOM FACTS
                  </span>
                </button>
              </div>
            );
          })}
        </div>
        <div className="rounded-[16px] bg-[#161616] p-[16px]">
          <div
            style={{ backgroundImage: `url(${ImgBgGradientAngle})` }}
            className="bg-blur-image-process-work mb-[24px] flex h-[192px] min-h-[192px] w-full min-w-[192px] flex-col items-center overflow-hidden px-[18px]"
          >
            <div>
              {listObjRoster.map((objRoster, idxObjRoster) => {
                return (
                  <div
                    key={idxObjRoster}
                    className="mb-[8px] flex items-center rounded-full border-[2px] border-black bg-white p-[2px]"
                  >
                    <img
                      className="h-[32px] w-[32px]"
                      src={objRoster.imagePerson}
                      alt={objRoster.name}
                    />
                    <div className="mx-[8px] flex items-center text-[11px] font-bold leading-[20px] tracking-[0.4px]">
                      WEBFLOW EXPERT
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-[24px] mr-[40px] text-white">
            <div className="my-[8px] text-[14px] font-bold leading-[22px] tracking-[0.7px]">
              SUPPORTED BY
            </div>
            <div className="mb-[16px] text-[32px] font-medium leading-[40px] -tracking-[0.8px]">
              The Relume Roster
            </div>
            <div className="mb-[10px] inline-block text-[16px] leading-[1.5] -tracking-[0.32px] text-[#ffffffa6]">
              The Relume Roster is an exclusive, flexible and dynamic team of
              Webflow Experts that assist Dan and Adam in executing projects for
              Relume.
            </div>
          </div>
          <div>
            <div className="mb-[24px] mt-[8px] inline-block text-[14px] font-bold leading-[22px] tracking-[0.7px] text-white">
              CAPABILITIES
            </div>
            <div className="flex flex-wrap">
              {[
                'WEB DESIGN (UX/UI)',
                'DESIGN SYSTEM IMPLEMENTATION',
                'WEBFLOW DEVELOPMENT',
                'BRANDING',
                'ANIMATION',
                'ART DIRECTION',
                'ILLUSTRATION',
                'PLATFORM INTEGRATION',
              ].map((badgeCapability, idxBadgeCapability) => {
                return (
                  <div
                    key={idxBadgeCapability}
                    className="mb-[8px] mr-[8px] flex w-fit items-center justify-center rounded-[8px] bg-[#ffffff26] px-[8px] py-[6px] text-[14px] leading-[20px]"
                  >
                    <span className="text-[12px] font-bold leading-[12px] text-white">
                      {badgeCapability}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blur-circle-bottom-left"></div>
    </SectionWrapper>
  );
};

export default CmpContentTeam;
