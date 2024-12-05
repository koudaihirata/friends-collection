import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import List from './Pages/List/page';
import Schedule from './components/Schedule/Schedule';
import Btn from './components/Btn/Btn';
import Weather from './components/Weathr/Weather';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Schedule plase='大阪' day='12/16' lowtemperature='18°' maxtemperature='23°'/>
    <Btn label="完了" />
    <Btn label="パッング完了" />
    <Btn label="テンプレートから選ぶ" />

    <List/>
    <Weather/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
