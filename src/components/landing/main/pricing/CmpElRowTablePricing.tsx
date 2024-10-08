import { memo, Fragment } from 'react';

import { tw } from '../../../../utils';
import { IObjSupport } from '../../../../interface';
import { capitalizeLetterFirst } from '../../../../utils';
import IconTick from '../../../../assets/image/icon/icon-tick.svg';

type TPropsCmpElRowTablePricing = {
  objRow: IObjSupport;
};

const DivDataTablePricing = tw.div`
grid gap-[16px] [grid-auto-columns:1fr] [grid-template-columns:1fr_1fr_1fr] [grid-template-rows:auto]
`;

const DivTextDataTablePricing = tw.div`
mb-0 self-center text-center text-[16px] leading-[24px] text-white max-mobile-landscape:text-[14px]
`;

const DivRowTablePricing = tw.div`
grid gap-[16px] py-[16px] [border-bottom:1px_none_#ffffff26] [border-top:1px_solid_#ffffff26] [grid-auto-columns:1fr] [grid-template-columns:0.5fr_1.25fr] [grid-template-rows:auto] max-tablet:[grid-template-columns:1.25fr]
`;

const H6TextFeature = tw.h6`
text-white max-tablet:justify-self-center max-tablet:text-[14px] max-tablet:leading-[22px]
`;

const ImgIconTick = tw.img`
justify-self-center
`;

const CmpElRowTablePricing = ({ objRow }: TPropsCmpElRowTablePricing) => {
  return (
    <DivRowTablePricing>
      <H6TextFeature>{objRow.typeSupport.replaceAll('-', ' ')}</H6TextFeature>
      <DivDataTablePricing>
        {objRow.listSupport.map((objSupport, idxObjSupport) => {
          const typeofSupport = typeof objSupport.support;
          return (
            <Fragment key={idxObjSupport}>
              {typeofSupport === 'string' ? (
                <DivTextDataTablePricing>
                  {capitalizeLetterFirst(objSupport.support as string)}
                </DivTextDataTablePricing>
              ) : typeofSupport === 'boolean' && objSupport.support ? (
                <ImgIconTick src={IconTick} alt="Tick icon" />
              ) : (
                <div></div>
              )}
            </Fragment>
          );
        })}
      </DivDataTablePricing>
    </DivRowTablePricing>
  );
};

export default memo(CmpElRowTablePricing);
