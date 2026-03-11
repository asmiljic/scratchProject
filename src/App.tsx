import React from 'react';

interface Props {
  title?: string;
}

function App({ title = 'Hello, World!' }: Props): React.JSX.Element {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
