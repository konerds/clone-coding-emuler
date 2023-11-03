import { FC } from 'react';
import CmpContentHero from './hero/CmpContentHero';
import CmpLayoutBenefit from './benefit/CmpLayoutBenefit';
import CmpLayoutProcess from './process/CmpLayoutProcess';
import CmpLayoutComparison from './comparison/CmpLayoutComparison';
import CmpLayoutBuiltToSpec from './built-to-spec/CmpLayoutBuiltToSpec';
import CmpLayoutPricing from './pricing/CmpLayoutPricing';
import CmpLayoutTeam from './team/CmpLayoutTeam';
import CmpLayoutFAQ from './faq/CmpLayoutFAQ';
import CmpLayoutContact from './contact/CmpLayoutContact';

type TPropsCmpLayoutMain = {
  posTopScroll: number;
  heightWindow: number;
  refSectionWrapperProcess: React.RefObject<HTMLElement>;
  refSectionWrapperContact: React.RefObject<HTMLElement>;
};

const CmpLayoutMain: FC<TPropsCmpLayoutMain> = ({
  posTopScroll,
  heightWindow,
  refSectionWrapperProcess,
  refSectionWrapperContact,
}) => {
  return (
    <>
      <CmpContentHero />
      <CmpLayoutBenefit />
      <CmpLayoutProcess
        posTopScroll={posTopScroll}
        heightWindow={heightWindow}
        refSectionWrapper={refSectionWrapperProcess}
      />
      <CmpLayoutComparison
        posTopScroll={posTopScroll}
        heightWindow={heightWindow}
      />
      <CmpLayoutBuiltToSpec />
      <CmpLayoutPricing />
      <CmpLayoutTeam />
      <CmpLayoutFAQ />
      <CmpLayoutContact refSectionWrapper={refSectionWrapperContact} />
    </>
  );
};

export default CmpLayoutMain;
