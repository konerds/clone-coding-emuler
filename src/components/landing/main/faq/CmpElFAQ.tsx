import { FC, useState } from 'react';
import tw from 'tailwind-styled-components';
import AnimateHeight from 'react-animate-height';
import { IObjFAQ } from '../../../../interface';
import IconChevron from '../../../../assets/image/icon/icon-chevron.svg';

type TPropsCmpElFAQ = {
  objFAQ: IObjFAQ;
};

const DivBlockFAQ = tw.div`
-mb-[2px] border-[2px] border-[color:#161616] px-0 py-[24px] [border-style:solid_none]
`;

const DivWrapperQuestion = tw.div`
flex cursor-pointer items-center justify-between max-mobile-landscape:items-start
`;

const H5Question = tw.h5`
my-0
`;

const ImgIconChevron = tw.img`
mr-0 w-[28px] transition-transform duration-500 [transform-style:preserve-3d] max-mobile-landscape:mt-[10px] max-mobile-landscape:w-[20px]
`;

const DivWrapperAnswer = tw.div`
overflow-hidden
`;

const ParagraphAnswer = tw.p`
ml-0 mt-[24px]
`;

const CmpElFAQ: FC<TPropsCmpElFAQ> = ({ objFAQ }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <DivBlockFAQ>
      <DivWrapperQuestion
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        <H5Question>{objFAQ.question}</H5Question>
        <ImgIconChevron
          src={IconChevron}
          loading="lazy"
          style={{
            transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
              isShow ? '180deg' : '0deg'
            }) skew(0deg, 0deg)`,
          }}
          alt="Chevron"
        />
      </DivWrapperQuestion>
      <AnimateHeight duration={500} height={isShow ? 'auto' : 0}>
        <DivWrapperAnswer>
          <ParagraphAnswer>
            {objFAQ.answer}
            <br />
          </ParagraphAnswer>
        </DivWrapperAnswer>
      </AnimateHeight>
    </DivBlockFAQ>
  );
};

export default CmpElFAQ;
