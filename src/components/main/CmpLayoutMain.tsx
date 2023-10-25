import { FC } from 'react';
import CmpContentHero from './hero/CmpContentHero';
import CmpLayoutBenefit from './benefit/CmpLayoutBenefit';
import CmpContentProcess from './process/CmpContentProcess';
import CmpContentComparison from './comparison/CmpContentComparison';
import CmpContentBuiltToSpec from './built-to-spec/CmpContentBuiltToSpec';
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
      <CmpContentProcess listObjProcessWork={listObjProcessWork} />
      <CmpContentComparison />
      <CmpContentBuiltToSpec listObjExBuiltToSpec={listObjExBuiltToSpec} />
      <CmpContentPricing listObjPricing={listObjPricing} />
      <CmpContentTeam listObjTeam={listObjTeam} listObjRoster={listObjRoster} />
      <CmpContentFAQ listObjFAQ={listObjFAQ} />
      <CmpContentContact />
    </>
  );
};

export default CmpLayoutMain;
