import React, { useState, useEffect, useCallback, useContext, createContext } from 'react';

// Define the props interface
interface MyFuncProps {
  age: number;
}

// Define the context
interface MyContextValue {
  count: number;
  handleClick: () => void;
}
const MyContext = createContext<MyContextValue>({
  count: 0,
  handleClick: () => {}
});

// Define the functional component
const MyFuncComponent: React.FC<MyFuncProps> = ({ age }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const myContextValue = { count, handleClick };

  return (
    <div>
      <h2>I am {age} years old</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <MyContext.Provider value={myContextValue}>
        <ChildComponent />
      </MyContext.Provider>
    </div>
  );
};

function ChildComponent() {
  const { count, handleClick } = useContext(MyContext);
  return (
    <div>
      <h2>Count from context: {count}</h2>
      <button onClick={handleClick}>Increment from context</button>
    </div>
  );
}

export default MyFuncComponent;
