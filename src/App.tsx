import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useLocation } from 'react-router-dom';
import RoutesApp from './routes';

type TPropsDivApp = {
  $isDev: boolean;
};
const DivApp = tw.div<TPropsDivApp>`
${(p) => (p.$isDev ? 'debug-screens' : '')}
bg-inherit
`;

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <DivApp $isDev={process.env.NODE_ENV !== 'production'}>
      <RoutesApp />
    </DivApp>
  );
};

export default App;
