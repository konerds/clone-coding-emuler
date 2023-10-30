import { FC } from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { ReactComponent as IconFooterLogoPrimary } from '../../assets/image/icon/icon-logo-footer-primary.svg';
import { ReactComponent as IconFooterLogoSecondary } from '../../assets/image/icon/icon-logo-footer-secondary.svg';

const DivWrapper = tw.div`
absolute inset-[0%_0%_auto] z-[100] flex h-[96px] flex-row items-center justify-center [transform:translate(0px,0px)] max-desktop:h-[80px]
`;

const DivContainer = tw.div`
relative z-[2] mx-auto grid w-[90%] max-w-[1360px] items-center justify-between justify-items-center gap-[16px] [grid-auto-columns:1fr] [grid-template-columns:2.25fr] [grid-template-rows:auto] max-desktop:flex max-desktop:justify-center
`;

type TPropsDivContainerLogo = {
  $type: 'primary' | 'secondary';
};
const DivContainerLogo = tw.div<TPropsDivContainerLogo>`
absolute inset-[0%]
${(p) => (p.$type === 'primary' ? 'z-0 text-white' : 'z-[1] text-black')}
`;

const CmpHeaderConfirmation: FC = () => {
  return (
    <DivWrapper>
      <DivContainer>
        <Link
          to="/"
          className="relative inline-block h-[calc((100/3)*1px)] w-[124px] max-w-full"
        >
          <DivContainerLogo $type="primary">
            <IconFooterLogoPrimary width={125} height={34} />
          </DivContainerLogo>
          <DivContainerLogo $type="secondary">
            <IconFooterLogoSecondary width={125} height={34} />
          </DivContainerLogo>
        </Link>
      </DivContainer>
    </DivWrapper>
  );
};

export default CmpHeaderConfirmation;
