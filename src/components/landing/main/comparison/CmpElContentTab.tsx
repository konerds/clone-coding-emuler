import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { customRP, queryByMaxWidth } from '../../../../utils';
import { useMediaQuery } from 'react-responsive';
import ImageWithRelumeMobile from '../../../../assets/image/img-with-relume-mobile.png';
import ImageWithRelume1 from '../../../../assets/image/img-with-relume-1.png';
import ImageWithRelume2 from '../../../../assets/image/img-with-relume-2.png';
import ImageWithRelume3 from '../../../../assets/image/img-with-relume-3.png';
import ImageWithoutRelumeMobile from '../../../../assets/image/img-without-relume-mobile.png';
import ImageWithoutRelume from '../../../../assets/image/img-without-relume.png';
import { EViewport } from '../../../../interface';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

type TPropsCmpElContentTab = {
  isWithRelume: boolean;
  refImageWillBeLoaded: React.RefObject<HTMLImageElement>;
  positionXImageOverlay: number;
};

const DivWrapperImage = tw.div`
relative block min-h-max opacity-100 [transition:opacity_500ms_ease_0s] max-desktop:w-full max-desktop:max-w-full
`;

const ImgContent = tw.img`
relative mx-auto max-w-[1000px] max-desktop:mx-0 max-desktop:w-full max-desktop:min-w-full max-desktop:max-w-full max-tablet:block
`;

const ImgOverlay = tw.img`
absolute inset-[0%] z-[1] mx-auto block max-w-[1000px] [transform-style:preserve-3d] max-desktop:mx-0 max-desktop:w-full max-desktop:min-w-full max-desktop:max-w-full max-tablet:hidden
`;

const CmpElContentTab: FC<TPropsCmpElContentTab> = ({
  isWithRelume,
  refImageWillBeLoaded,
  positionXImageOverlay,
}) => {
  const isMobile = useMediaQuery(queryByMaxWidth(EViewport.TABLET));
  const customRPImgOverlay = (positionX: 'start' | 'end') => {
    return customRP({
      transform: `translate3d(${
        positionX === 'start' ? '' : '-'
      }${positionXImageOverlay}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    });
  };
  return (
    <SwitchTransition>
      <CSSTransition
        key={isWithRelume ? 'with relume' : 'without relume'}
        addEndListener={(node, done) =>
          node.addEventListener('transitionend', done, false)
        }
        classNames="transition-fade"
      >
        <DivWrapperImage>
          {isMobile ? (
            <ImgContent
              ref={isWithRelume ? refImageWillBeLoaded : undefined}
              src={
                isWithRelume ? ImageWithRelumeMobile : ImageWithoutRelumeMobile
              }
              loading={isWithRelume ? 'lazy' : 'eager'}
              alt={isWithRelume ? 'with relume' : 'without relume'}
            />
          ) : isWithRelume ? (
            <>
              <ImgContent
                ref={refImageWillBeLoaded}
                src={ImageWithRelume1}
                alt="with relume 1"
                loading="lazy"
              />
              <ImgOverlay
                style={customRPImgOverlay('end')}
                src={ImageWithRelume2}
                alt="with relume 2"
                loading="lazy"
              />
              <ImgOverlay
                style={customRPImgOverlay('start')}
                src={ImageWithRelume3}
                alt="with relume 3"
                loading="lazy"
              />
            </>
          ) : (
            <ImgContent
              ref={refImageWillBeLoaded}
              src={ImageWithoutRelume}
              alt="without relume"
              loading="eager"
            />
          )}
        </DivWrapperImage>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default CmpElContentTab;
