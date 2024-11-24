import { Routes, Route } from 'react-router-dom';
import AdvancedJsx from './pages/AdvancedJsx';
import FormPage from './pages/FormPage';
import Destructuring from './pages/Destructuring';
import DOMElement from './pages/DOMElement';
import Closure from './pages/Closure';
import ConditionalRendering from './pages/ConditionalRendering';
import ArrayImmutability from './pages/ArrayImmutability';
import ObjectImmutability from './pages/ObjectImmutability';
import UseEffect from './pages/UseEffect';
import UseCallback from './pages/UseCallback';
import APIFetching from './pages/APIFetching';
import ContextProvider from './pages/ContextProvider';

const App = () => {
  return (
    <Routes>
      <Route path="/advancedjsx" element={<AdvancedJsx />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/destructuring" element={<Destructuring />} />
      <Route path="/domelement" element={<DOMElement />} />
      <Route path="/closure" element={<Closure />} />
      <Route path="/conditionalrendering" element={<ConditionalRendering />} />
      <Route path="/arrayimmutability" element={<ArrayImmutability />} />
      <Route path="/objectimmutability" element={<ObjectImmutability />} />
      <Route path="/useeffect" element={<UseEffect />} />
      <Route path="/usecallback" element={<UseCallback />} />
      <Route path="/apifetching" element={<APIFetching />} />
      <Route path="/contextprovider" element={<ContextProvider />} />
    </Routes>
  );
}

export default App;
