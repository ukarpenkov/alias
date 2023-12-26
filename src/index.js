import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  AdaptivityProvider,
  ConfigProvider

} from '@vkontakte/vkui';
import App from './App';
import '@vkontakte/vkui/dist/vkui.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode >
    </AdaptivityProvider>
  </ConfigProvider>
);

