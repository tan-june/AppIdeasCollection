import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BinaryConverter from './components/BinaryConverter';
import ConvertDollartoCents from './components/ConvertDollartoCents';
import DefaultPage from './components/DefaultPage'
import BorderRadiusDisplayer from './components/BorderRadiusDisplayer'
import './index.css';
import FlipHorizontalorVertical from './components/FlipHorizontalorVertical';
import LoremIpsumGenerator from './components/LoremIpsum';
import GithubStatus from './components/GithubStatus';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/binary-exchange" element={<BinaryConverter />} />
        <Route path="/dollar-to-cents" element={<ConvertDollartoCents />} />
        <Route path="/border-radius" element={<BorderRadiusDisplayer />} />
        <Route path="/flip-image" element={<FlipHorizontalorVertical />} />
        <Route path="/lorem-ipsum" element={<LoremIpsumGenerator />} />
        <Route path="/github-status" element={<GithubStatus />} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
