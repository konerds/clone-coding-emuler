import { FC } from 'react';
import CmpLayoutConfirmation from '../../components/confirmation/CmpLayoutConfirmation';

type TPropsPageConfirmation = {
  handlerOnRequestCloseModal: () => void;
};

const PageConfirmation: FC<TPropsPageConfirmation> = ({
  handlerOnRequestCloseModal,
}) => {
  return (
    <CmpLayoutConfirmation
      handlerOnRequestCloseModal={handlerOnRequestCloseModal}
    />
  );
};

export default PageConfirmation;
