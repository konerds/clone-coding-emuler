import { useState, useEffect } from 'react';
import { EViewport, IObjPricing, IObjSupport, TPricing } from '../interface';

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
      if (!!!objMatched) {
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

export const getPositionScrollWindow = (axis: 'x' | 'y') => {
  const [positionScroll, setPositionScroll] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setPositionScroll(axis === 'y' ? window.scrollY : window.scrollX);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return positionScroll;
};

export const getPositionYByRef = <T extends HTMLElement>(
  refEl: React.RefObject<T>,
  isObserveOnlyRef?: boolean,
) => {
  const [positionTopEl, setPositionTopEl] = useState(0);
  const [positionBottomEl, setPositionBottomEl] = useState(0);

  useEffect(() => {
    if (!!refEl.current) {
      const fnCbSetPositionY: ResizeObserverCallback = () => {
        const posTopNew = refEl.current?.getBoundingClientRect().top;
        const posBottomNew = refEl.current?.getBoundingClientRect().bottom;
        if (!!posTopNew && !!posBottomNew) {
          setPositionTopEl(posTopNew);
          setPositionBottomEl(posBottomNew);
        }
      };
      const observerResize = new ResizeObserver(fnCbSetPositionY);

      observerResize.observe(
        !!isObserveOnlyRef ? refEl.current : document.body,
      );
      return () => {
        observerResize.disconnect();
      };
    }
  }, [refEl.current, !!isObserveOnlyRef ? undefined : document.body]);

  return [positionTopEl, positionBottomEl];
};

export const getHeightOffsetByRef = <T extends HTMLElement>(
  refEl: React.RefObject<T>,
  isObserveOnlyRef?: boolean,
) => {
  const [heightEl, setHeightEl] = useState(0);

  useEffect(() => {
    if (!!refEl.current) {
      const fnCbSetPositionY: ResizeObserverCallback = () => {
        const heightNew = refEl.current?.getBoundingClientRect().height;
        const topNew = refEl.current?.getBoundingClientRect().top;
        if (!!heightNew && !!topNew) {
          setHeightEl(heightNew + topNew);
        }
      };
      const observerResize = new ResizeObserver(fnCbSetPositionY);

      observerResize.observe(isObserveOnlyRef ? refEl.current : document.body);
      return () => {
        observerResize.disconnect();
      };
    }
  }, [refEl.current, isObserveOnlyRef ? undefined : document.body]);

  return heightEl;
};
