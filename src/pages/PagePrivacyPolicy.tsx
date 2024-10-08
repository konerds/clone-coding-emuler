import { memo } from 'react';
import IconMessage from '../assets/image/icon/icon-message.svg';
import CmpCTAFixed from '../components/shared/CmpCTAFixed';
import CmpLayoutHeader from '../components/shared/header/CmpLayoutHeader';
import CmpLayoutPrivacyPolicy from '../components/privacy-policy/CmpLayoutPrivacyPolicy';

const PagePrivacyPolicy = () => {
  return (
    <>
      <CmpCTAFixed icon={IconMessage} textBtn="get in touch" href="#" />
      <CmpLayoutHeader />
      <CmpLayoutPrivacyPolicy />
    </>
  );
};

export default memo(PagePrivacyPolicy);
