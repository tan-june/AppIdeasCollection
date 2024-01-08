import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BinaryConverter from './components/BinaryConverter';
import ConvertDollartoCents from './components/ConvertDollartoCents';
import DefaultPage from './components/DefaultPage'
import BorderRadiusDisplayer from './components/BorderRadiusDisplayer'
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/binary-exchange" element={<BinaryConverter />} />
        <Route path="/dollar-to-cents" element={<ConvertDollartoCents />} />
        <Route path="/border-radius" element={<BorderRadiusDisplayer />} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
