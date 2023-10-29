import { FC } from 'react';
import tw from 'tailwind-styled-components';

type TPropsCmpElMenuTab = {
  flagBtn: boolean;
  isWithRelume: boolean;
  setIsWithRelume: React.Dispatch<React.SetStateAction<boolean>>;
};

type TPropsButtonMenu = {
  $isSelected: boolean;
};
const ButtonMenu = tw.button<TPropsButtonMenu>`
relative inline-block max-w-full cursor-pointer border-b-[2px] bg-transparent px-0 py-[8px] text-left align-top text-[#222222] opacity-100 transition-all duration-300 ease-[ease] [text-decoration:none] hover:transform-none hover:bg-transparent hover:shadow-none max-mobile-landscape:block
${(p) =>
  p.$isSelected
    ? '[border-bottom-color:#161616]'
    : '[border-bottom-color:transparent]'}
`;

const DivWrapperNav = tw.div`
font-bold uppercase tracking-[0.28px] text-[#0a0a0a] [text-decoration:none]
`;

const CmpElMenuTab: FC<TPropsCmpElMenuTab> = ({
  flagBtn,
  isWithRelume,
  setIsWithRelume,
}) => {
  return (
    <ButtonMenu
      type="button"
      $isSelected={flagBtn === isWithRelume}
      onClick={() => {
        setIsWithRelume(flagBtn);
      }}
    >
      <DivWrapperNav className="text-[13px] font-bold leading-[20px] tracking-[0.28px] mobile-landscape:text-[14px]">
        {flagBtn ? 'WITH RELUME' : 'WITHOUT RELUME'}
      </DivWrapperNav>
    </ButtonMenu>
  );
};

export default CmpElMenuTab;
