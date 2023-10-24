import { FC, useState } from 'react';

interface IObjExBuiltToSpec {
  name: string;
  type: string;
  quoteClient: string;
  linkFigma: string;
  linkWebflow: string;
}

type TPropsCmpContentBuiltToSpec = {
  listObjExBuiltToSpec: IObjExBuiltToSpec[];
};

const CmpContentBuiltToSpec: FC<TPropsCmpContentBuiltToSpec> = ({
  listObjExBuiltToSpec,
}) => {
  const [isTypeFigma, setIsTypeFigma] = useState(true);
  return (
    <section className="relative px-[5%] py-[64px] text-center">
      <div className="bg-blur-circle-top-right"></div>
      <div className="relative z-[10] mb-[48px]">
        <div className="mb-[24px] mt-[16px] text-[36px] font-medium leading-[44px]">
          Websites we've
          <br />
          built to spec
        </div>
        <div className="mb-[10px] inline-block text-[18px] leading-[1.5]">
          See for yourself, compare the
          <br />
          design and development.
        </div>
      </div>
      {listObjExBuiltToSpec.map((objEx, idxObjEx) => {
        return (
          <div
            key={idxObjEx}
            className="relative z-[10] mb-[40px] rounded-[16px] border-[2px] bg-white p-[16px]"
          >
            <div>{objEx.name}</div>
            <div>{objEx.type}</div>
            <div>{objEx.quoteClient}</div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => {
                  setIsTypeFigma(true);
                }}
              >
                DESIGN
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsTypeFigma(false);
                }}
              >
                LIVE WEBSITE
              </button>
            </div>
            {isTypeFigma ? (
              <iframe
                className="rounded-lg"
                width="100%"
                height="390.29px"
                src={objEx.linkFigma}
                allowFullScreen
              ></iframe>
            ) : (
              <iframe
                className="rounded-lg"
                width="100%"
                height="390.29px"
                src={objEx.linkWebflow}
                allowFullScreen
              ></iframe>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CmpContentBuiltToSpec;
