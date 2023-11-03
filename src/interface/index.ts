export enum EViewport {
  MOBILE_PORTRAIT = 0,
  MOBILE_LANDSCAPE = 480,
  TABLET = 768,
  DESKTOP = 992,
  DESKTOP_LARGER = 1280,
}

export interface IObjMenuHeader {
  text: string;
  href: string;
}

export interface IObjBenefit {
  title: string;
  desc: string;
}

export interface IObjProcessWork {
  iconStep: string;
  image: string;
  title: string;
  desc: {
    sentence: string;
    paragraph: string;
  };
}

export interface IObjExBuiltToSpec {
  name: string;
  type: string;
  colorBadgeType: string;
  quoteClient: {
    content: string;
    author: string;
  };
  link: {
    figma: string;
    web: string;
  };
}

export interface IObjTeam {
  introduce: string;
  imageProfile: string;
  positionProfile: string;
  nameProfile: string;
  iconArrow: string;
  textFact: string;
  imageFact1: string;
  altImageFact1: string;
  imageFact2: string;
  altImageFact2: string;
}

export interface IObjRoster {
  name: string;
  imagePerson: string;
}

export interface IObjFAQ {
  question: string;
  answer: string;
}

export type TPricing = 'basic' | 'advanced' | 'professional';

type TSupport =
  | 'design-complexity'
  | 'responsive-development'
  | 'seo-setup'
  | 'content-population'
  | 'cms-implementation'
  | 'advanced-animations';

type TComplexityDesign = 'low' | 'medium' | 'high';

export interface IObjPricing {
  type: TPricing;
  priceUSD: number;
  unit: string;
  listSupport: (
    | { type: 'design-complexity'; support: TComplexityDesign }
    | { type: TSupport; support: boolean }
  )[];
}

export interface IObjSupport {
  typeSupport: string;
  listSupport: {
    typePricing: string;
    support: boolean | TComplexityDesign;
  }[];
}

export type TObjContentPrivacyPolicy =
  | {
      type: 'plain' | 'strong';
      text: string;
    }
  | {
      type: 'a';
      isTargetBlank?: boolean;
      href: string;
      text: string;
    };

export interface IObjPrivacyPolicy {
  type: 'paragraph' | 'heading';
  content: TObjContentPrivacyPolicy[];
}

type TMsgSubmit = 'success' | 'failure';
export type TObjStateMsgSubmit =
  | {
      type: 'none';
    }
  | {
      type: TMsgSubmit;
      msg?: string;
    };
