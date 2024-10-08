import { memo, useState, useLayoutEffect } from 'react';

import { tw } from '../../../utils';
import { ReactComponent as IconLogoHeaderPrimary } from '../../../assets/image/icon/icon-logo-header-primary.svg';
import { ReactComponent as IconLogoHeaderSecondary } from '../../../assets/image/icon/icon-logo-header-secondary.svg';
import CmpElMenu from './CmpElMenu';
import { useMediaQuery } from 'react-responsive';
import { queryByMaxWidth } from '../../../utils';
import { EViewport, IObjMenuHeader } from '../../../interface';
import { Link, useLocation } from 'react-router-dom';
import { getListObjMenuHeader } from '../../../api';

const HeaderNavBar = tw.header`
absolute inset-[0%_0%_auto] z-[100] flex h-[80px] flex-row items-center justify-center [transform:translate(0px,0px)] desktop:h-[96px]
`;

const DivContainerNavBar = tw.div`
relative z-[2] mx-auto flex w-[90%] max-w-[1360px] items-center justify-between gap-[16px] desktop:grid desktop:[grid-auto-columns:1fr] desktop:[grid-template-columns:0.25fr_1fr_0.25fr] desktop:[grid-template-rows:auto]
`;

const DivLogoPrimary = tw.div`
absolute inset-[0%] z-0 text-black max-mobile-landscape:text-center
`;

const DivLogoSecondary = tw.div`
absolute inset-[0%] z-[1] text-white max-mobile-landscape:text-left max-mobile-landscape:underline
`;

const DivWrapperListMenu = tw.div`
mx-auto flex items-center justify-between
`;

const CmpLayoutHeader = () => {
  const { pathname } = useLocation();
  const isWithinTablet = useMediaQuery(queryByMaxWidth(EViewport.DESKTOP));
  const [listObjMenuHeader, setListObjMenuHeader] = useState<IObjMenuHeader[]>(
    [],
  );
  useLayoutEffect(() => {
    getListObjMenuHeader().then((dataListObjMenuHeader) => {
      if (dataListObjMenuHeader) {
        setListObjMenuHeader(dataListObjMenuHeader);
      }
    });
  }, []);
  return (
    <HeaderNavBar>
      <DivContainerNavBar>
        <Link
          to="/"
          className="relative inline-block h-[33.33px] w-[124px] max-w-full desktop:[grid-area:span_1_/_span_1_/_span_1_/_span_1]"
        >
          <DivLogoPrimary>
            <IconLogoHeaderPrimary />
          </DivLogoPrimary>
          <DivLogoSecondary>
            <IconLogoHeaderSecondary />
          </DivLogoSecondary>
        </Link>
        {!isWithinTablet && !pathname.split('/').includes('privacy-policy') && (
          <DivWrapperListMenu>
            {listObjMenuHeader?.map((objMenu, idxObjMenu) => {
              return <CmpElMenu key={idxObjMenu} objMenu={objMenu} />;
            })}
          </DivWrapperListMenu>
        )}
      </DivContainerNavBar>
    </HeaderNavBar>
  );
};

export default memo(CmpLayoutHeader);
