import { IObjPricing, IObjSupport, TPricing } from '../interface';

export const customRP = (obj: React.CSSProperties) => obj;

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
