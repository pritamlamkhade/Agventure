import './App.css';
import Body from './app/Body';
import { Provider } from 'react-redux';
import appStore from './app/store';

function App() {
  return (
      <Provider store={appStore}>
        <div className="bg-[#fefefe] h-[100vw]">
           <Body />
        </div>
      </Provider >

  );
}

export default App;
