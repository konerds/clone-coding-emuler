import { memo } from 'react';

import { tw } from '../../../../utils';
import { IObjRoster } from '../../../../interface';

type TPropsCmpElRoster = {
  objRoster: IObjRoster;
};

const DivWrapper = tw.div`
mb-[8px] flex w-full items-center rounded-[100px] border-[2px] border-black bg-white p-[2px]
`;

const ImgRoster = tw.img`
h-[32px] w-[32px]
`;

const H6Roster = tw.h6`
z-[5] mx-[8px] my-0 text-[11px] leading-[20px] tracking-[0.4px] text-black tablet:text-[10px]
`;

const CmpElRoster = ({ objRoster }: TPropsCmpElRoster) => {
  return (
    <DivWrapper>
      <ImgRoster src={objRoster.imagePerson} alt={objRoster.name} />
      <H6Roster>WEBFLOW EXPERT</H6Roster>
    </DivWrapper>
  );
};

export default memo(CmpElRoster);
