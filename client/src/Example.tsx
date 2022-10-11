import React from 'react';
import logo from './logo.svg';

function Example() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3050/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Testing</p>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{!data ? 'Loading...' : data}</p>
      </header>
    </div>
  );
}

export default Example;
