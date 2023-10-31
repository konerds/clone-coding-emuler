import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter
    basename={
      process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_URL
    }
  >
    <App />
  </BrowserRouter>,
);
