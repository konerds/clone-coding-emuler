import { FC, createElement } from 'react';
import ImgBgGradientAngle from '../../../assets/image/img-bg-gradient-angle.png';
import { IObjProcessWork } from '../../../interface';

type TPropsCmpContentProcess = {
  listObjProcessWork: IObjProcessWork[];
};

const CmpContentProcess: FC<TPropsCmpContentProcess> = ({
  listObjProcessWork,
}) => {
  return (
    <section className="relative">
      <div className="z-[10] bg-[#0a0a0a] px-[5%] py-[64px] text-white">
        <div className="text-center">
          <div className="text-[36px] leading-[44px] -tracking-[1.92px]">
            How it works
          </div>
          <div className="mt-[24px] text-[18px] leading-[33px] -tracking-[0.4px]">
            As highly experienced Webflow experts, Relume will carefully
            translate your designs to code using Webflow best practices.
          </div>
        </div>
        <div className="mt-[64px] grid grid-cols-1 gap-y-[44px]">
          {listObjProcessWork.map((objProcess, idxObjProcess) => {
            return (
              <div
                key={idxObjProcess}
                className="relative flex flex-col items-center rounded-2xl border-[2px] border-white px-[5%] py-[16px]"
              >
                <div className="absolute -top-[24px] left-[5%] flex h-[40px] w-[40px] items-center justify-center rounded-full border-[2px] border-white bg-[#0a0a0a]">
                  {idxObjProcess + 1}
                </div>
                <div
                  style={{ backgroundImage: `url(${ImgBgGradientAngle})` }}
                  className="bg-blur-image-process-work flex w-full items-center justify-center"
                >
                  {createElement(objProcess.image, {
                    className: 'w-[240px] h-[240px]',
                  })}
                </div>
                <div className="mt-[24px] pb-[10px] pt-[8px]">
                  <div className="text-[24px] leading-[32px] -tracking-[0.64px]">
                    {objProcess.title}
                  </div>
                  <div className="mt-[8px] text-[18px] leading-[1.5] -tracking-[0.4px]">
                    {objProcess.descSentence}
                  </div>
                  <div className="mt-[16px] text-[16px] leading-[1.5] -tracking-[0.32px] text-[#ffffffd9]">
                    {objProcess.descParagraph}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CmpContentProcess;
