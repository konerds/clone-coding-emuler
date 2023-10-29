import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { IObjPricing } from '../../../../interface';
import { getTypeConvertedPricingToPublic } from '../../../../utils';

type TPropsCmpElHeaderTablePricing = {
  objPricing: IObjPricing;
  idxObjPricing: number;
};

const DivWrapper = tw.div`
relative
`;

const H5TextTypePage = tw.h5`
mt-0 text-center text-white max-desktop:leading-[28px] max-tablet:text-[20px] max-tablet:leading-[24px] max-mobile-landscape:text-[18px]
`;

const H4TextPrice = tw.h4`
mb-0 text-center text-white max-tablet:text-[22px] max-tablet:leading-[28px] max-mobile-landscape:text-[20px]
`;

const SpanTextFromPricing = tw.span`
mb-0 text-center text-[16px] leading-[24px] text-white max-mobile-landscape:text-[14px]
`;

const SpanTextUnitPricing = tw.span`
text-[14px] leading-[22px] max-mobile-landscape:text-[12px]
`;

const DivTextDataTablePricing = tw.div`
mb-0 text-center text-[16px] leading-[24px] text-white max-mobile-landscape:text-[14px]
`;

const CmpElHeaderTablePricing: FC<TPropsCmpElHeaderTablePricing> = ({
  objPricing,
  idxObjPricing,
}) => {
  return (
    <DivWrapper>
      <H5TextTypePage>
        {getTypeConvertedPricingToPublic(objPricing.type) +
          ' ' +
          objPricing.unit}
      </H5TextTypePage>
      <H4TextPrice>
        <SpanTextFromPricing>{'from '}</SpanTextFromPricing>
        {' $' + objPricing.priceUSD.toLocaleString() + ' '}
        {idxObjPricing === 0 && (
          <SpanTextUnitPricing>{'USD'}</SpanTextUnitPricing>
        )}
      </H4TextPrice>
      <DivTextDataTablePricing>
        {'Per ' + objPricing.unit}
      </DivTextDataTablePricing>
    </DivWrapper>
  );
};

export default CmpElHeaderTablePricing;
