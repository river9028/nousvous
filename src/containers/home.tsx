import React, { useState } from 'react';
import { Footer, Home, SidePanel } from '../components';

// 전역에서 사용할 수 있는 전역 컨텍스트로 선언해 불러와 사용
import { SidePanelContext } from '../context';

const HomeContainer = () => {
  // 푸터 오른쪽 하단 버튼 클릭시, 사이드 패널을 보여줄 상태 (twitter, instagram)
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
                {/* -eslint 경고로 인해 추가해 주었다. jsx-a11y/label-has-associated-control": 0 */}
                <label>
                  mailing list &nbsp;
                  <Footer.Input />
                </label>
              </Footer.Form>
            </Footer.Group>

            {/* 두 버튼을 감싸고 있는 Footer Group 컴포넌트 상단에 컨텍스트를 감싸 줌 */}
            {/* but, value를 다르게 지정해 서로 다른 Side Panel이 나올 수 있도록 함 */}
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
        {/* SidePanel Group도 위와 동일 */}
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
