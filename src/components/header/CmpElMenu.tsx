import { FC, useState } from 'react';
import tw from 'tailwind-styled-components';
import { IObjMenuHeader } from '../../interface';

type TPropsCmpElMenu = {
  objMenu: IObjMenuHeader;
};

const LinkWrapper = tw.a`
mr-[16px] max-w-full p-[16px] [text-decoration:none]
`;

const DivWrapperTextMenu = tw.div`
h-[20px] overflow-hidden [text-decoration:none]
`;

type TPropsDivTextMenu = {
  $isHoverOnMenu: boolean;
};
const DivTextMenu = tw.div<TPropsDivTextMenu>`
font-bold uppercase tracking-[0.28px] text-[#0a0a0a] transition-transform will-change-transform [text-decoration:none] [transform-style:preserve-3d]
${(p) =>
  p.$isHoverOnMenu
    ? '[transform:translate3d(0px,-20px,0px)_scale3d(1,1,1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,0deg)]'
    : '[transform:translate3d(0px,0px,0px)_scale3d(1,1,1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,0deg)]'}
`;

const CmpElMenu: FC<TPropsCmpElMenu> = ({ objMenu }) => {
  const [isHoverOnMenu, setIsHoverOnMenu] = useState(false);
  return (
    <LinkWrapper href={objMenu.href}>
      <DivWrapperTextMenu
        onMouseOver={(e) => {
          e.stopPropagation();
          setIsHoverOnMenu(true);
        }}
        onMouseOut={(e) => {
          e.stopPropagation();
          setIsHoverOnMenu(false);
        }}
      >
        <DivTextMenu $isHoverOnMenu={isHoverOnMenu}>{objMenu.text}</DivTextMenu>
        <DivTextMenu $isHoverOnMenu={isHoverOnMenu}>{objMenu.text}</DivTextMenu>
      </DivWrapperTextMenu>
    </LinkWrapper>
  );
};

export default CmpElMenu;
