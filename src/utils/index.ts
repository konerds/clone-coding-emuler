import { useState, useEffect, createContext, useContext } from 'react';

import _tw from 'tailwind-styled-components';
import { EViewport, IObjPricing, IObjSupport, TPricing } from '../interface';

export const tw = _tw;

export const customRP = (obj: React.CSSProperties) => obj;

export const queryByMaxWidth = (maxWidth: EViewport) => {
  return { maxWidth: maxWidth - 0.02 };
};

export const capitalizeLetterFirst = (strInput: string) => {
  return strInput.charAt(0).toUpperCase() + strInput.slice(1);
};

export const getTypeConvertedPricingToPublic = (type: TPricing) => {
  switch (type) {
    case 'basic':
    case 'advanced':
      return capitalizeLetterFirst(type);
    case 'professional':
      return 'Very Advanced';
    default:
  }
  return null;
};

export const getListObjConvertedByTypeSupport = (listObj: IObjPricing[]) => {
  return listObj.reduce((listPrev, objCurrent) => {
    objCurrent.listSupport.forEach((objSupport) => {
      const objMatched = listPrev.find(
        (element) => element.typeSupport === objSupport.type,
      );
      if (!objMatched) {
        listPrev.push({
          typeSupport: objSupport.type,
          listSupport: [
            {
              typePricing: objCurrent.type,
              support: objSupport.support,
            },
          ],
        });
      } else {
        objMatched.listSupport.push({
          typePricing: objCurrent.type,
          support: objSupport.support,
        });
      }
    });
    return listPrev;
  }, [] as IObjSupport[]);
};

export const getHeightByRef = <T extends HTMLElement>(
  refEl: React.RefObject<T>,
  isIncludePositionTop?: boolean,
) => {
  const [heightEl, setHeightEl] = useState(0);
  useEffect(() => {
    if (refEl.current) {
      const fnCbSetPositionY: ResizeObserverCallback = () => {
        const heightNew = refEl.current?.getBoundingClientRect().height;
        const posTopNew = refEl.current?.getBoundingClientRect().top;
        if (!!heightNew) {
          setHeightEl(
            isIncludePositionTop && !!posTopNew
              ? heightNew + posTopNew
              : heightNew,
          );
        }
      };
      const observerResize = new ResizeObserver(fnCbSetPositionY);
      observerResize.observe(refEl.current);
      return () => {
        observerResize.disconnect();
      };
    }
  }, []);
  return heightEl;
};

export const getHeightWindow = () => {
  const [heightWindow, setHeightWindow] = useState(window?.innerHeight || 0);
  useEffect(() => {
    const handlerSetHeightWindow = () => {
      setHeightWindow(window?.innerHeight || 0);
    };
    window.addEventListener('resize', handlerSetHeightWindow);
    return () => {
      window.removeEventListener('resize', handlerSetHeightWindow);
    };
  }, []);
  return heightWindow;
};

export const VerticalScrollPositionContext = createContext(0);

export function usePositionScrollWindow() {
  return useContext(VerticalScrollPositionContext);
}
