import React from 'react';
import { Footer, Home, PressButton } from '../components';

const Main = () => {
  return (
    <>
      <PressButton>
        <PressButton.Caption>
          <b>Nous Vous Press</b>
          &nbsp; Books, prints & editions
        </PressButton.Caption>

        <PressButton.Logo src='/images/logo/nvpress.svg' />
      </PressButton>

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

        <Footer>
          <Footer.Frame>
            <Footer.Group>
              <Footer.Form>
                <label>
                  mailing list
                  <Footer.Input />
                </label>
              </Footer.Form>
            </Footer.Group>

            <Footer.Group>
              <Footer.Button>twitter</Footer.Button>
              <Footer.Button>instagram</Footer.Button>
            </Footer.Group>
          </Footer.Frame>
        </Footer>
      </Home>
    </>
  );
};
export default Main;
