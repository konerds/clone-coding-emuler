import { FC } from 'react';
import CmpContentHero from './hero/CmpContentHero';
import CmpContentBenefit from './benefit/CmpContentBenefit';
import CmpContentProcess from './process/CmpContentProcess';
import CmpContentComparison from './comparison/CmpContentComparison';
import CmpContentBuiltToSpec from './built-to-spec/CmpContentBuiltToSpec';
import CmpContentPricing from './pricing/CmpContentPricing';
import CmpContentTeam from './team/CmpContentTeam';
import CmpContentQNA from './qna/CmpContentQNA';
import CmpContentContact from './contact/CmpContentContact';
import {
  listObjBenefit,
  listObjExBuiltToSpec,
  listObjPricing,
  listObjProcessWork,
  listObjQNA,
  listObjRoster,
  listObjTeam,
} from '../../data';

const CmpLayoutMain: FC = () => {
  return (
    <>
      <CmpContentHero />
      <CmpContentBenefit listObjBenefit={listObjBenefit} />
      <CmpContentProcess listObjProcessWork={listObjProcessWork} />
      <CmpContentComparison />
      <CmpContentBuiltToSpec listObjExBuiltToSpec={listObjExBuiltToSpec} />
      <CmpContentPricing listObjPricing={listObjPricing} />
      <CmpContentTeam listObjTeam={listObjTeam} listObjRoster={listObjRoster} />
      <CmpContentQNA listObjQNA={listObjQNA} />
      <CmpContentContact />
    </>
  );
};

export default CmpLayoutMain;
