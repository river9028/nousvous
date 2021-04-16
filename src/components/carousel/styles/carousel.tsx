import styled, { css } from 'styled-components';
import * as dotenv from 'dotenv';

dotenv.config();

export const Container = styled.div`
  position: relative;
  transform: translate(0, -50%);
  top: 50%;

  .slick-slider {
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
  }

  .slick-arrow {
    width: 30px;
    height: 30px;
    background-image: url(${`${process.env.REACT_APP_CDN_PUBLIC_URL}/images/icon/next.svg`});
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    color: #000000;
  }

  .slick-prev {
    transform: rotate(180deg);
  }

  .slick-prev,
  .slick-next {
    &::before {
      content: '';
    }
  }

  .slick-slide > div {
    max-width: 100%;
    /* max-height: calc(100vh - 260px); */
  }
`;

export const Slide = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Image = styled.img<{ size: number | undefined }>`
  max-width: 100%;
  max-height: ${({ size }) => (size ? `calc(100vh - ${size}px)` : '0')};
`;

export const Video = styled.video<{ size: number | undefined }>`
  max-width: 100%;
  max-height: ${({ size }) => (size ? `calc(100vh - ${size}px)` : '0')};
`;
