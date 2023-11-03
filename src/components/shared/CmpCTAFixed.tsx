import { FC, useState, useRef, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { getHeightOffsetByRef, getPositionScrollWindow } from '../../utils';

const DivContainer = tw.div`
fixed inset-[16px_0%_auto] z-[1000] mx-auto flex w-[90%] max-w-[1360px] justify-end desktop:inset-[24px_0%_auto] desktop:block
`;

const ImgIcon = tw.img`
mr-[12px] h-[20px] w-[20px] [filter:invert(100%)] max-mobile-landscape:hidden
`;

type TPropsLinkCTAFixed = {
  $isTouchedProcess?: boolean;
  $isTouchedContact?: boolean;
};
const LinkCTAFixed = tw.a<TPropsLinkCTAFixed>`
static right-[5vw] top-[16px] z-[500] flex items-center rounded-[8px] border-[2px] border-black bg-[color:#0a0a0a] px-[24px] py-[10px] text-[13px] font-bold uppercase tracking-[0.8px] text-white shadow-[2px_0_6px_0_rgba(0,0,0,0.1)] [text-decoration:none] hover:bg-[color:#0a0a0a] mobile-landscape:top-[18px] mobile-landscape:py-[12px] mobile-landscape:text-[14px] desktop:fixed desktop:top-[24px]
${(p) =>
  !!p.$isTouchedProcess
    ? 'border-white bg-white text-[#0a0a0a] hover:bg-white'
    : p.$isTouchedContact
    ? 'hidden'
    : ''}
`;

type TPropsCmpCTAFixed = {
  icon?: string;
  href: string;
  textBtn: string;
  objPosSectionForLanding?: {
    posYSectionWrapperProcess: [number, number];
    posYSectionWrapperContact: [number, number];
  };
};

const CmpCTAFixed: FC<TPropsCmpCTAFixed> = ({
  icon,
  href,
  textBtn,
  objPosSectionForLanding,
}) => {
  const posTopScrollWindow = getPositionScrollWindow('y');
  const refLinkCTAFixed = useRef<HTMLAnchorElement>(null);
  const heightLinkCTAFixed = getHeightOffsetByRef(refLinkCTAFixed, true);
  const [isTouchedProcess, setIsTouchedProcess] = useState(false);
  const [isTouchedContact, setIsTouchedContact] = useState(false);
  useEffect(() => {
    if (!!objPosSectionForLanding) {
      if (
        posTopScrollWindow + heightLinkCTAFixed >
          objPosSectionForLanding.posYSectionWrapperProcess[0] &&
        posTopScrollWindow - heightLinkCTAFixed <
          objPosSectionForLanding.posYSectionWrapperProcess[1]
      ) {
        setIsTouchedProcess(true);
      } else {
        setIsTouchedProcess(false);
      }
    }
  }, [
    heightLinkCTAFixed,
    posTopScrollWindow,
    objPosSectionForLanding?.posYSectionWrapperProcess,
  ]);
  useEffect(() => {
    if (!!objPosSectionForLanding) {
      if (
        posTopScrollWindow + heightLinkCTAFixed >
          objPosSectionForLanding.posYSectionWrapperContact[0] &&
        posTopScrollWindow - heightLinkCTAFixed <
          objPosSectionForLanding.posYSectionWrapperContact[1]
      ) {
        setIsTouchedContact(true);
      } else {
        setIsTouchedContact(false);
      }
    }
  }, [
    heightLinkCTAFixed,
    posTopScrollWindow,
    objPosSectionForLanding?.posYSectionWrapperContact,
  ]);
  return (
    <DivContainer>
      <LinkCTAFixed
        href={href}
        $isTouchedProcess={isTouchedProcess}
        $isTouchedContact={isTouchedContact}
        ref={refLinkCTAFixed}
      >
        {!!icon && <ImgIcon src={icon} loading="lazy" alt="" />}
        <div>{textBtn}</div>
      </LinkCTAFixed>
    </DivContainer>
  );
};

export default CmpCTAFixed;
