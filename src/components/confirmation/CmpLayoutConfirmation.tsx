import { memo } from 'react';
import CmpHeaderConfirmation from './CmpHeaderConfirmation';
import CmpMainConfirmation from './CmpMainConfirmation';

type TPropsCmpLayoutConfirmation = {
  handlerRequestCloseModal: () => void;
};

const CmpLayoutConfirmation = ({
  handlerRequestCloseModal,
}: TPropsCmpLayoutConfirmation) => {
  return (
    <>
      <CmpHeaderConfirmation />
      <CmpMainConfirmation
        handlerRequestCloseModal={handlerRequestCloseModal}
      />
    </>
  );
};

export default memo(CmpLayoutConfirmation);
