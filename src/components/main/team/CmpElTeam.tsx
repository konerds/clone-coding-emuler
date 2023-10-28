import { FC, useState, createElement } from 'react';
import tw from 'tailwind-styled-components';
import { IObjTeam } from '../../../interface';
import { ReactComponent as IconLock } from '../../../assets/image/icon/icon-lock.svg';
import { ReactComponent as IconUnlock } from '../../../assets/image/icon/icon-unlock.svg';

type TPropsCmpElTeam = {
  objTeam: IObjTeam;
};

const DivWrapper = tw.div`
flex w-full flex-col justify-start rounded-[16px] border-[2px] border-[#161616] bg-white p-[24px] max-tablet:p-[16px]
`;

const DivContainerProfile = tw.div`
relative mb-[24px] flex w-full items-center justify-center self-center overflow-hidden rounded-[12px] bg-[color:#d8d5d1] [flex:0_1_auto] desktop-larger:h-[610px]
`;

type TPropsImgProfile = {
  $isLocked: boolean;
};
const ImgProfile = tw.img<TPropsImgProfile>`
w-[90%] self-end rounded-[12px] transition-transform duration-700 ease-out will-change-transform max-desktop:max-w-[480px] max-tablet:-ml-[8px] max-tablet:mt-[48px] max-tablet:max-w-[400px] max-tablet:pl-0 desktop-larger:mt-[24px] desktop-larger:max-w-[520px]
${(p) =>
  p.$isLocked
    ? '[transform:translate(0px,0px)]'
    : '[transform-style:preserve-3d] [transform:translate3d(0px,20%,0px)_scale3d(1,1,1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,0deg)]'}
`;

type TPropsImgArrowProfile = {
  $name: string;
};
const ImgArrowProfile = tw.img<TPropsImgArrowProfile>`
absolute bottom-0 top-[64px] z-[20] will-change-transform [transform-style:preserve-3d] max-tablet:top-[64px] max-tablet:w-[72px] max-mobile-landscape:top-[40px] max-mobile-landscape:w-[56px]
${(p) =>
  p.$name === 'Dan'
    ? 'left-[64px] max-tablet:left-[40px] max-mobile-landscape:left-[24px]'
    : p.$name === 'Adam'
    ? 'right-[64px] max-tablet:right-[40px] max-mobile-landscape:right-[24px]'
    : ''}
`;

const DivWrapperImageFact = tw.div`
`;

const ImgFact1 = tw.img`
absolute inset-[15%_auto_auto_5%] w-[134px] max-tablet:w-[107.2px] max-mobile-landscape:left-[2%] max-mobile-landscape:top-[18%] desktop-larger:top-[20%]
`;

const ImgFact2 = tw.img`
absolute inset-[15%_5%_auto_auto] w-[146px] max-tablet:w-[116.8px] max-mobile-landscape:right-[2%] max-mobile-landscape:top-[18%] desktop-larger:top-[20%]
`;

const H6TextFact = tw.h6`
absolute inset-[5%_0%_auto] text-center text-[18px] leading-[26px] max-tablet:text-[16px] max-mobile-landscape:top-[3%]
`;

const DivWrapperIntroduceProfile = tw.div`
relative m-[16px] max-tablet:m-0
`;

const ParagraphIntroduceProfile = tw.p`
mb-[24px] text-center text-[20px] -tracking-[0.4px] max-desktop:text-[18px]
`;

const DivWrapperBtnProfile = tw.div`
flex items-start
`;

const ButtonProfile = tw.button`
relative flex flex-[1_1_0%] items-center justify-center rounded-[8px] border-[2px] border-black bg-white px-[32px] py-[12px] text-center text-[14px] font-bold uppercase tracking-[0.8px] text-black transition-all duration-[400ms] [text-decoration:none] hover:bg-[color:#c2c0bc]
`;

const DivWrapperIcon = tw.div`
absolute inset-[10px_16px] mt-[1px] h-[24px] w-[24px]
`;

const DivTextButtonProfile = tw.div`
text-[12px] mobile-landscape:text-[14px]
`;

const CmpElTeam: FC<TPropsCmpElTeam> = ({ objTeam }) => {
  const [isLocked, setIsLocked] = useState(true);
  const [positionMouseX, setPositionMouseX] = useState(0);
  const [positionMouseY, setPositionMouseY] = useState(0);
  return (
    <DivWrapper>
      <DivContainerProfile
        onMouseMove={(e) => {
          setPositionMouseX(
            parseFloat(((e.clientX / window.innerWidth) * 20 - 10).toFixed(4)),
          );
          setPositionMouseY(
            parseFloat(((e.clientY / window.innerHeight) * 20 - 10).toFixed(4)),
          );
        }}
      >
        <ImgProfile
          src={objTeam.imageProfile}
          loading="eager"
          $isLocked={isLocked}
          alt={`Portrait photo of ${objTeam.positionProfile} ${objTeam.nameProfile}`}
        />
        {isLocked ? (
          <ImgArrowProfile
            src={objTeam.iconArrow}
            loading="lazy"
            $name={objTeam.nameProfile}
            style={{
              transform: `translate3d(${positionMouseX}%, ${positionMouseY}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            }}
            alt={`Arrow pointing to ${objTeam.nameProfile}`}
          />
        ) : (
          <DivWrapperImageFact>
            <ImgFact1 src={objTeam.imageFact1} loading="eager" />
            <ImgFact2 src={objTeam.imageFact2} loading="eager" />
            <H6TextFact>{objTeam.textFact}</H6TextFact>
          </DivWrapperImageFact>
        )}
      </DivContainerProfile>
      <DivWrapperIntroduceProfile>
        <ParagraphIntroduceProfile>
          {objTeam.introduce}
        </ParagraphIntroduceProfile>
      </DivWrapperIntroduceProfile>
      <DivWrapperBtnProfile>
        <ButtonProfile
          type="button"
          onClick={() => {
            setIsLocked(false);
          }}
        >
          <DivWrapperIcon>
            {createElement(isLocked ? IconLock : IconUnlock, {
              width: 16,
              height: 20,
            })}
          </DivWrapperIcon>
          <DivTextButtonProfile>
            {isLocked ? 'unlock random facts' : 'random facts unlocked!'}
          </DivTextButtonProfile>
        </ButtonProfile>
      </DivWrapperBtnProfile>
    </DivWrapper>
  );
};

export default CmpElTeam;
