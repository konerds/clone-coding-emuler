import { memo, Fragment } from 'react';

import { tw } from '../../utils';
import { TObjContentPrivacyPolicy } from '../../interface';

const LinkContent = tw.a`
text-[-webkit-link]
`;

type TPropsCmpElContentPrivacyPolicy = {
  content: TObjContentPrivacyPolicy;
};

const CmpElContentPrivacyPolicy = ({
  content,
}: TPropsCmpElContentPrivacyPolicy) => {
  return (
    <Fragment>
      {content.type === 'strong' ? (
        <strong>{content.text}</strong>
      ) : content.type === 'a' ? (
        <LinkContent
          href={content.href}
          target={content.isTargetBlank ? '_blank' : '_self'}
        >
          {content.text}
        </LinkContent>
      ) : (
        content.text
      )}
    </Fragment>
  );
};

export default memo(CmpElContentPrivacyPolicy);
