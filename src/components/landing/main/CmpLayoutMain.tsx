import { memo } from 'react';
import CmpContentHero from './hero/CmpContentHero';
import CmpLayoutBenefit from './benefit/CmpLayoutBenefit';
import CmpLayoutProcess from './process/CmpLayoutProcess';
import CmpLayoutComparison from './comparison/CmpLayoutComparison';
import CmpLayoutBuiltToSpec from './built-to-spec/CmpLayoutBuiltToSpec';
import CmpLayoutPricing from './pricing/CmpLayoutPricing';
import CmpLayoutTeam from './team/CmpLayoutTeam';
import CmpLayoutFAQ from './faq/CmpLayoutFAQ';
import CmpLayoutContact from './contact/CmpLayoutContact';
import { getHeightWindow } from '../../../utils';

type TPropsCmpLayoutMain = {
  refSectionWrapperProcess: React.RefObject<HTMLElement>;
  refSectionWrapperContact: React.RefObject<HTMLElement>;
};

const CmpLayoutMain = ({
  refSectionWrapperProcess,
  refSectionWrapperContact,
}: TPropsCmpLayoutMain) => {
  const heightWindow = getHeightWindow();
  return (
    <>
      <CmpContentHero />
      <CmpLayoutBenefit />
      <CmpLayoutProcess
        heightWindow={heightWindow}
        refSectionWrapper={refSectionWrapperProcess}
      />
      <CmpLayoutComparison heightWindow={heightWindow} />
      <CmpLayoutBuiltToSpec />
      <CmpLayoutPricing />
      <CmpLayoutTeam />
      <CmpLayoutFAQ />
      <CmpLayoutContact refSectionWrapper={refSectionWrapperContact} />
    </>
  );
};

export default memo(CmpLayoutMain);
