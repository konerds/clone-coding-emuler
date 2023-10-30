import { FC } from 'react';
import CmpHeaderConfirmation from './CmpHeaderConfirmation';
import CmpMainConfirmation from './CmpMainConfirmation';

type TPropsCmpLayoutConfirmation = {
  handlerOnRequestCloseModal: () => void;
};

const CmpLayoutConfirmation: FC<TPropsCmpLayoutConfirmation> = ({
  handlerOnRequestCloseModal,
}) => {
  return (
    <>
      <CmpHeaderConfirmation />
      <CmpMainConfirmation
        handlerOnRequestCloseModal={handlerOnRequestCloseModal}
      />
    </>
  );
};

export default CmpLayoutConfirmation;
