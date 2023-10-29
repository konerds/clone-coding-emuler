import { FC, Fragment } from 'react';
import tw from 'tailwind-styled-components';
import { TObjContentPrivacyPolicy } from '../../interface';

const StrongContent = tw.strong`
`;

const LinkContent = tw.a`
text-[-webkit-link]
`;

type TPropsCmpElContentPrivacyPolicy = {
  content: TObjContentPrivacyPolicy;
};

const CmpElContentPrivacyPolicy: FC<TPropsCmpElContentPrivacyPolicy> = ({
  content,
}) => {
  return (
    <Fragment>
      {content.type === 'strong' ? (
        <StrongContent>{content.text}</StrongContent>
      ) : content.type === 'a' ? (
        <LinkContent href={content.href} target="_blank">
          {content.text}
        </LinkContent>
      ) : (
        content.text
      )}
    </Fragment>
  );
};

export default CmpElContentPrivacyPolicy;
