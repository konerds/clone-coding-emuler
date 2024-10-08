import { memo } from 'react';

import { tw } from '../../../../utils';

type TPropsCmpElBadgeCapability = {
  badgeCapability: string;
};

const DivWrapper = tw.div`
mb-[8px] mr-[8px] inline-block rounded-[8px] bg-[#ffffff26] px-[8px] py-[6px]
`;

const DivCapability = tw.div`
text-[12px] font-bold uppercase leading-[12px] tracking-[0.6px] text-white [text-decoration:none]
`;

const CmpElBadgeCapability = ({
  badgeCapability,
}: TPropsCmpElBadgeCapability) => {
  return (
    <DivWrapper>
      <DivCapability>{badgeCapability}</DivCapability>
    </DivWrapper>
  );
};

export default memo(CmpElBadgeCapability);
