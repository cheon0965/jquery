import { createContext, useContext } from 'react';

const themeDefault = { border: '10px solid green' };
const themeContext = createContext(themeDefault);

function Sub1() {
  return (
    <themeContext.Provider value={{ border: '10px solid blue' }}>
      <div>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  );
}

function Sub2() {
  return (
    <div>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
}

function Sub3() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}
export default function App() {
  const theme = useContext(themeContext);
  return (
    <div className="root" style={theme}>
      <h1>Hello World!</h1>
      <Sub1 />
    </div>
  );
}
