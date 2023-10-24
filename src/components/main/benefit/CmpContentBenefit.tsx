import { FC } from 'react';
import { ReactComponent as IconCMSUserFriendly } from '../../../assets/image/icon/icon-cms-user-friendly.svg';
import { IObjBenefit } from '../../../interface';

type TPropsCmpContentBenefit = {
  listObjBenefit: IObjBenefit[];
};

const CmpContentBenefit: FC<TPropsCmpContentBenefit> = ({ listObjBenefit }) => {
  return (
    <section className="relative">
      <div className="relative z-[10] grid grid-cols-1 gap-x-[40px] gap-y-[56px] px-[5%] pb-[64px] pt-[40px]">
        {listObjBenefit.map((objBenefit, idxObjBenefit) => {
          return (
            <div key={idxObjBenefit}>
              <div className="mb-[16px] flex items-center">
                <IconCMSUserFriendly className="mr-[16px] h-[32px] w-[32px]" />
                <span className="text-[24px] font-medium leading-[32px] -tracking-[0.64px]">
                  {objBenefit.title}
                </span>
              </div>
              <div className="mb-[10px] text-[16px] leading-[1.5] -tracking-[0.32px]">
                {objBenefit.desc}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-blur-circle-bottom-right"></div>
    </section>
  );
};

export default CmpContentBenefit;
