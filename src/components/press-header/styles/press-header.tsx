import styled from 'styled-components';
import * as dotenv from 'dotenv';

dotenv.config();

export const Container = styled.div`
  position: absolute;
  width: calc(100vw - 35px);
  top: 0px;
  /* right: 35px; */
  padding-right: 35px;
  height: auto;
  box-sizing: border-box;
  padding: 30px 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  z-index: 9;
  font-size: 1.414rem;
  font-weight: bold;
  line-height: 1.4em;

  @media (min-width: 45em) {
    // right로 설정시, 스크롤 유무에 따라 요소의 정렬이 움직임.
    // 스크롤이 생기면서 브라우저 창이 줄어들고, 50px만큼 오른쪽에서 왼쪽으로 요소가 움직이기 때문에 유무에 따라 움직이는 폭이 달라진다.
    // 그래서 padding-right 속성으로 바꿔주면 defualt 위치에서 해당 가로 길이에서 50px만큼 오른쪽 패딩을 먹기때문에(boder-box) 스크롤이 유무와 상관없이 고정된 위치에 요소가 위치한다.
    /* right: 50px; */
    padding-right: 50px;
    width: calc(100vw - 50px);
  }
`;
export const Link = styled.a`
  cursor: pointer;
`;

export const Left = styled.div`
  border: 0;
  background: transparent;

  @media (max-width: 50em) {
    display: none;
  }

  ${Link}:hover {
    text-decoration: underline;
  }
`;

export const Center = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  background: transparent;

  @media (max-width: 50em) {
    position: relative;
    left: 0;
    transform: translate(0, 0);
  }
`;

export const Right = styled.div`
  ${Link}:hover {
    color: grey;
  }
`;

export const Image = styled.img`
  height: 60px;
  filter: brightness(0) invert(0);
`;
