import { FC } from 'react';
import { ReactComponent as IconCMSUserFriendly } from '../../../assets/image/icon/icon-cms-user-friendly.svg';

interface IObjBenefit {
  title: string;
  desc: string;
}

type TPropsCmpContentBenefit = {
  listObjBenefit: IObjBenefit[];
};

const CmpContentBenefit: FC<TPropsCmpContentBenefit> = ({ listObjBenefit }) => {
  return (
    <section className="relative px-[5%] pb-[64px] pt-[40px]">
      <div className="relative z-[10] grid grid-cols-1 gap-y-[56px]">
        {listObjBenefit.map((objBenefit, idxObjBenefit) => {
          return (
            <div key={idxObjBenefit} className="tracking-tighter">
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
      </div>
      <div className="bg-blur-circle-bottom-right"></div>
    </section>
  );
};

export default CmpContentBenefit;
