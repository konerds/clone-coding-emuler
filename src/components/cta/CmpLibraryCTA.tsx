import { FC } from 'react';
import tw from 'tailwind-styled-components';

const DivContainer = tw.div`
flex w-full items-center justify-center bg-[#1d1c1e] px-[5%] py-[2rem] max-tablet:flex-col max-tablet:pb-[4rem] max-tablet:text-center
`;

const DivWrapperText = tw.div`
mr-[1.5rem] max-tablet:mb-[1.5rem] max-tablet:mr-[0rem]
`;

const DivBlockText = tw.div`
text-white
`;

const ButtonViewLibrary = tw.button`
inline-block cursor-pointer rounded-[20rem] border-[1px] border-white bg-transparent px-[1.5rem] py-[0.75rem] text-center text-[0.875rem] leading-[inherit] tracking-[0em] text-white [text-decoration:none]
`;

const CmpLibraryCTA: FC = () => {
  return (
    <DivContainer>
      <DivWrapperText>
        <DivBlockText>
          This cloneable was built in under 1.5 hours using the Relume Library
        </DivBlockText>
      </DivWrapperText>
      <ButtonViewLibrary type="button">View Relume Library</ButtonViewLibrary>
    </DivContainer>
  );
};

export default CmpLibraryCTA;