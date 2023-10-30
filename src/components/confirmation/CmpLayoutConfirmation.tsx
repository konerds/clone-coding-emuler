import { FC } from 'react';
import CmpHeaderConfirmation from './CmpHeaderConfirmation';
import CmpMainConfirmation from './CmpMainConfirmation';

const CmpLayoutConfirmation: FC = () => {
  return (
    <>
      <CmpHeaderConfirmation />
      <CmpMainConfirmation />
    </>
  );
};

export default CmpLayoutConfirmation;
