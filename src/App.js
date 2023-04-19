import logo from './logo.svg';
import './App.css';
import MyClassComponent from './MyClassComponent.tsx';
import MyFuncComponent from './MyFuncComponent.tsx';
import MyComponent from './MyComponent.tsx';
import MyComponent1 from './MyComponent1.tsx';

function App() {
  return (
    <div className="App">
      <MyClassComponent name="John" />
      <MyFuncComponent age={25} />
      <MyComponent/>
      <MyComponent1/>
    </div>
  );
}

export default App;
