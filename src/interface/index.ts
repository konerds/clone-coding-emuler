export interface IObjBenefit {
  title: string;
  desc: string;
}

export interface IObjProcessWork {
  image: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  title: string;
  descSentence: string;
  descParagraph: string;
}

export interface IObjExBuiltToSpec {
  name: string;
  type: string;
  colorBadgeType: string;
  quoteClient: string;
  linkFigma: string;
  linkWeb: string;
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
