import { memo, useState, useRef, useEffect } from 'react';

import { tw, usePositionScrollWindow } from '../../utils';
import { getHeightByRef } from '../../utils';

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
  p.$isTouchedProcess
    ? 'border-white bg-white text-[#0a0a0a] hover:bg-white'
    : p.$isTouchedContact
      ? 'hidden'
      : ''}
`;

type TPropsCmpCTAFixed = {
  icon?: string;
  href: string;
  textBtn: string;
  refSectionWrapperProcess?: React.RefObject<HTMLElement>;
  refSectionWrapperContact?: React.RefObject<HTMLElement>;
};

const CmpCTAFixed = ({
  icon,
  href,
  textBtn,
  refSectionWrapperProcess,
  refSectionWrapperContact,
}: TPropsCmpCTAFixed) => {
  const posTopScroll = usePositionScrollWindow();
  const refLinkCTAFixed = useRef<HTMLAnchorElement>(null);
  const heightOffsetLinkCTAFixed = getHeightByRef(refLinkCTAFixed, true);
  const [isTouchedProcess, setIsTouchedProcess] = useState(false);
  const [isTouchedContact, setIsTouchedContact] = useState(false);
  useEffect(() => {
    if (!!posTopScroll && refSectionWrapperProcess?.current) {
      setIsTouchedProcess(
        posTopScroll + heightOffsetLinkCTAFixed >
          refSectionWrapperProcess.current.offsetTop &&
          posTopScroll <
            refSectionWrapperProcess.current.offsetTop +
              refSectionWrapperProcess.current.offsetHeight,
      );
    }
  }, [
    posTopScroll,
    heightOffsetLinkCTAFixed,
    refSectionWrapperProcess?.current,
  ]);
  useEffect(() => {
    if (!!posTopScroll && refSectionWrapperContact?.current) {
      setIsTouchedContact(
        posTopScroll + heightOffsetLinkCTAFixed >
          refSectionWrapperContact.current.offsetTop &&
          posTopScroll <
            refSectionWrapperContact.current.offsetTop +
              refSectionWrapperContact.current.offsetHeight,
      );
    }
  }, [
    posTopScroll,
    heightOffsetLinkCTAFixed,
    refSectionWrapperContact?.current,
  ]);
  return (
    <DivContainer>
      <LinkCTAFixed
        href={href}
        $isTouchedProcess={isTouchedProcess}
        $isTouchedContact={isTouchedContact}
        ref={refLinkCTAFixed}
      >
        {icon && <ImgIcon src={icon} alt="" />}
        <div>{textBtn}</div>
      </LinkCTAFixed>
    </DivContainer>
  );
};

export default memo(CmpCTAFixed);
