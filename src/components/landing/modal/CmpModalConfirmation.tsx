import { memo } from 'react';
import CmpLayoutConfirmation from '../../confirmation/CmpLayoutConfirmation';

type TPropsPageConfirmation = {
  handlerRequestCloseModal: () => void;
};

const PageConfirmation = ({
  handlerRequestCloseModal,
}: TPropsPageConfirmation) => {
  return (
    <CmpLayoutConfirmation
      handlerRequestCloseModal={handlerRequestCloseModal}
    />
  );
};

export default memo(PageConfirmation);
