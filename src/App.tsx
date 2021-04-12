import React from 'react';
import { Home } from './components';

function App() {
  return (
    <Home>
      <Home.Pane>
        <Home.Group>
          <Home.TextLink>Together</Home.TextLink>
          <Home.Background isVideo src='videos/background/together.mp4' />
        </Home.Group>

        <Home.Group>
          <Home.TextLink>Nicolas Burrows</Home.TextLink>

          <Home.Background src='images/background/nicolas-burrows.jpg' />
        </Home.Group>

        <Home.Group>
          <Home.TextLink>Jay Cover</Home.TextLink>
          <Home.Background src='images/background/jay-cover.jpg' />
        </Home.Group>

        <Home.Group>
          <Home.TextLink>William Luz</Home.TextLink>
          <Home.Background src='images/background/william-luz.jpg' />
        </Home.Group>
      </Home.Pane>
    </Home>
  );
}

export default App;
