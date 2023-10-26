import { FC } from 'react';
import CmpContentHero from './hero/CmpContentHero';
import CmpLayoutBenefit from './benefit/CmpLayoutBenefit';
import CmpLayoutProcess from './process/CmpLayoutProcess';
import CmpLayoutComparison from './comparison/CmpLayoutComparison';
import CmpLayoutBuiltToSpec from './built-to-spec/CmpLayoutBuiltToSpec';
import CmpContentPricing from './pricing/CmpContentPricing';
import CmpContentTeam from './team/CmpContentTeam';
import CmpContentFAQ from './faq/CmpContentFAQ';
import CmpContentContact from './contact/CmpContentContact';
import {
  listObjBenefit,
  listObjExBuiltToSpec,
  listObjPricing,
  listObjProcessWork,
  listObjFAQ,
  listObjRoster,
  listObjTeam,
} from '../../data';

const CmpLayoutMain: FC = () => {
  return (
    <>
      <CmpContentHero />
      <CmpLayoutBenefit listObjBenefit={listObjBenefit} />
      <CmpLayoutProcess listObjProcessWork={listObjProcessWork} />
      <CmpLayoutComparison />
      <CmpLayoutBuiltToSpec listObjExBuiltToSpec={listObjExBuiltToSpec} />
      <CmpContentPricing listObjPricing={listObjPricing} />
      <CmpContentTeam listObjTeam={listObjTeam} listObjRoster={listObjRoster} />
      <CmpContentFAQ listObjFAQ={listObjFAQ} />
      <CmpContentContact />
    </>
  );
};

export default CmpLayoutMain;
