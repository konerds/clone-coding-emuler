import { memo } from 'react';

import { tw } from '../../../utils';
import { Link } from 'react-router-dom';
import { ReactComponent as IconFooterLogoPrimary } from '../../../assets/image/icon/icon-logo-footer-primary.svg';
import { ReactComponent as IconFooterLogoSecondary } from '../../../assets/image/icon/icon-logo-footer-secondary.svg';

const FooterWrapper = tw.section`
relative z-0 bg-[color:#0a0a0a] py-[40px]
`;

const DivContainer = tw.div`
static mx-auto block w-[90%] max-w-[1360px]
`;

const DivWrapperFooter = tw.div`
mb-[56px] flex justify-between max-tablet:mb-[48px]
`;

const DivWrapperLogo = tw.div`
relative flex w-full items-center justify-between
`;

const LinkWrapperLogo = tw.a`
relative inline-block h-[calc((100/3)*1px)] w-[124px] max-w-full
`;

type TPropsDivContainerLogo = {
  $type: 'primary' | 'secondary';
};
const DivContainerLogo = tw.div<TPropsDivContainerLogo>`
absolute inset-[0%]
${(p) => (p.$type === 'primary' ? 'z-0 text-white' : 'z-[1] text-black')}
`;

const LinkButtonContactFooter = tw.a`
text-[16px] leading-[1.3] text-white [text-decoration:none]
`;

const DivWrapperCredit = tw.div`
flex items-center justify-between max-tablet:flex-col-reverse
`;

const ParagraphDescCredit = tw.p`
text-[14px] text-[#ffffffa6]
`;

const ParagraphTitleCredit = tw.p`
text-[16px] leading-[1.5] text-[#ffffffa6] [text-decoration-color:#ffffffa6] [text-decoration:underline] max-tablet:mb-[16px]
`;

const CmpLayoutFooter = () => {
  return (
    <FooterWrapper>
      <DivContainer>
        <DivWrapperFooter>
          <DivWrapperLogo>
            <LinkWrapperLogo href="#">
              <DivContainerLogo $type="primary">
                <IconFooterLogoPrimary width={125} height={34} />
              </DivContainerLogo>
              <DivContainerLogo $type="secondary">
                <IconFooterLogoSecondary width={125} height={34} />
              </DivContainerLogo>
            </LinkWrapperLogo>
            <LinkButtonContactFooter href="#">
              hello@relume.io
            </LinkButtonContactFooter>
          </DivWrapperLogo>
        </DivWrapperFooter>
        <DivWrapperCredit>
          <ParagraphDescCredit>
            © 2021, Relume. All Rights Reserved.
          </ParagraphDescCredit>
          <ParagraphTitleCredit>
            <Link
              to="/privacy-policy"
              className="text-[16px] leading-[1.5] text-[#ffffffa6] [text-decoration-color:#ffffffa6] [text-decoration:underline]"
            >
              Privacy Policy
            </Link>
          </ParagraphTitleCredit>
        </DivWrapperCredit>
      </DivContainer>
    </FooterWrapper>
  );
};

export default memo(CmpLayoutFooter);
