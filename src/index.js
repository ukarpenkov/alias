import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  AdaptivityProvider,
  ConfigProvider
} from '@vkontakte/vkui';
import App from './App';
import '@vkontakte/vkui/dist/vkui.css';
import './index.css'
import bridge from '@vkontakte/vk-bridge';


bridge.send('VKWebAppInit')

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

