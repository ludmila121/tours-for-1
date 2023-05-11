import Header from './header/Header';
import Tours from './tours';

import {DARK} from 'constants';

import './App.scss';

const App = () => {
  const theme = DARK;

  return (
      <div className='app-container'>
             <Header theme={theme}></Header>
             <Tours theme={theme}></Tours>
      </div>
  );
};
export default App;