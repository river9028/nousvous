import React, { useState } from 'react';
import { Footer, Home, SidePanel } from '../components';
import { SidePanelContext } from '../context';

const HomeContainer = () => {
  const [showInstagram, setShowInstagram] = useState(false);
  const [showTwitter, setShowTwitter] = useState(false);

  return (
    <>
      <Home>
        <Home.Pane>
          <Home.Group>
            <Home.TextLink to='together'>Together</Home.TextLink>
            <Home.Background isVideo src='videos/background/together.mp4' />
          </Home.Group>

          <Home.Group>
            <Home.TextLink to='nicolas-burrows'>Nicolas Burrows</Home.TextLink>
            <Home.Background src='images/background/nicolas-burrows.jpg' />
          </Home.Group>

          <Home.Group>
            <Home.TextLink to='jay-cover'>Jay Cover</Home.TextLink>
            <Home.Background src='images/background/jay-cover.jpg' />
          </Home.Group>

          <Home.Group>
            <Home.TextLink to='william-luz'>William Luz</Home.TextLink>
            <Home.Background src='images/background/william-luz.jpg' />
          </Home.Group>
        </Home.Pane>

        <Footer>
          <Footer.Frame>
            <Footer.Group>
              <Footer.Form>
                <label>
                  mailing list &nbsp;
                  <Footer.Input />
                </label>
              </Footer.Form>
            </Footer.Group>

            <Footer.Group>
              <SidePanelContext.Provider
                value={{
                  showSidePanel: showTwitter,
                  setShowSidePanel: setShowTwitter,
                }}
              >
                <Footer.Button>twitter</Footer.Button>
              </SidePanelContext.Provider>
              <SidePanelContext.Provider
                value={{
                  showSidePanel: showInstagram,
                  setShowSidePanel: setShowInstagram,
                }}
              >
                <Footer.Button>instagram</Footer.Button>
              </SidePanelContext.Provider>
            </Footer.Group>
          </Footer.Frame>
        </Footer>
      </Home>

      <SidePanel>
        <SidePanelContext.Provider
          value={{
            showSidePanel: showInstagram,
            setShowSidePanel: setShowInstagram,
          }}
        >
          <SidePanel.Group>
            <SidePanel.Close />
            <SidePanel.TextLink href='https://www.instagram.com/nous_vous_collective/'>
              Follow us on Instagram
            </SidePanel.TextLink>
          </SidePanel.Group>
        </SidePanelContext.Provider>

        <SidePanelContext.Provider
          value={{
            showSidePanel: showTwitter,
            setShowSidePanel: setShowTwitter,
          }}
        >
          <SidePanel.Group>
            <SidePanel.Close />
            <SidePanel.TextLink href='https://twitter.com/nousvous'>
              Follow us on Twitter
            </SidePanel.TextLink>
          </SidePanel.Group>
        </SidePanelContext.Provider>
      </SidePanel>
    </>
  );
};

export default HomeContainer;
