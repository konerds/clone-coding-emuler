import { memo, useState, useEffect, createContext, useContext } from 'react';

import _tw from 'tailwind-styled-components';
import { EViewport, IObjPricing, IObjSupport, TPricing } from '../interface';

export const tw = {
  iframe: <T extends object>(...args: Parameters<typeof _tw.iframe<T>>) =>
    memo(_tw.iframe<T>(...args)),
  main: <T extends object>(...args: Parameters<typeof _tw.main<T>>) =>
    memo(_tw.main<T>(...args)),
  header: <T extends object>(...args: Parameters<typeof _tw.header<T>>) =>
    memo(_tw.header<T>(...args)),
  section: <T extends object>(...args: Parameters<typeof _tw.section<T>>) =>
    memo(_tw.section<T>(...args)),
  div: <T extends object>(...args: Parameters<typeof _tw.div<T>>) =>
    memo(_tw.div<T>(...args)),
  span: <T extends object>(...args: Parameters<typeof _tw.span<T>>) =>
    memo(_tw.span<T>(...args)),
  p: <T extends object>(...args: Parameters<typeof _tw.p<T>>) =>
    memo(_tw.p<T>(...args)),
  button: <T extends object>(...args: Parameters<typeof _tw.button<T>>) =>
    memo(_tw.button<T>(...args)),
  a: <T extends object>(...args: Parameters<typeof _tw.a<T>>) =>
    memo(_tw.a<T>(...args)),
  img: <T extends object>(...args: Parameters<typeof _tw.img<T>>) =>
    memo(_tw.img<T>(...args)),
  h1: <T extends object>(...args: Parameters<typeof _tw.h1<T>>) =>
    memo(_tw.h1<T>(...args)),
  h2: <T extends object>(...args: Parameters<typeof _tw.h2<T>>) =>
    memo(_tw.h2<T>(...args)),
  h3: <T extends object>(...args: Parameters<typeof _tw.h3<T>>) =>
    memo(_tw.h3<T>(...args)),
  h4: <T extends object>(...args: Parameters<typeof _tw.h4<T>>) =>
    memo(_tw.h4<T>(...args)),
  h5: <T extends object>(...args: Parameters<typeof _tw.h5<T>>) =>
    memo(_tw.h5<T>(...args)),
  h6: <T extends object>(...args: Parameters<typeof _tw.h6<T>>) =>
    memo(_tw.h6<T>(...args)),
  form: <T extends object>(...args: Parameters<typeof _tw.form<T>>) =>
    memo(_tw.form<T>(...args)),
  label: <T extends object>(...args: Parameters<typeof _tw.label<T>>) =>
    memo(_tw.label<T>(...args)),
  input: <T extends object>(...args: Parameters<typeof _tw.input<T>>) =>
    memo(_tw.input<T>(...args)),
  textarea: <T extends object>(...args: Parameters<typeof _tw.textarea<T>>) =>
    memo(_tw.textarea<T>(...args)),
};

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
