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
