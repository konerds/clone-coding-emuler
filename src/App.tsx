import { useEffect, useState } from 'react';

import { tw, VerticalScrollPositionContext } from './utils';
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
  const [verticalScrollPosition, setVerticalScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setVerticalScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);
  return (
    <VerticalScrollPositionContext.Provider value={verticalScrollPosition}>
      <DivApp $isDev={process.env.NODE_ENV !== 'production'}>
        <RoutesApp />
      </DivApp>
    </VerticalScrollPositionContext.Provider>
  );
};

export default App;
