import React, { PropsWithChildren, useContext, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import * as dotenv from 'dotenv';
import { ProjectContext } from '../../context';
import { Container, Slide, Image, Video } from './styles/carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useElementSize } from '../../hooks';

dotenv.config();

type Product = {
  name: string;
  section: string;
  pname: string;
  price: number;
  'shipping-charge': { UK: number; Europe: number; Worldwide: number };
  description: string;
  'img-url': string;
  stock: number;
};

type Item = {
  id: number;
  title: string;
  caption: string;
  thumb: string;
  slides: { type: string; src: string }[];
  'thumb-size': string;
  'background-color': string;
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface CarouselProps<T> {
  infoRef?: React.MutableRefObject<HTMLDivElement | null>;
  contentsRef?: React.MutableRefObject<HTMLDivElement | null>;
  currentContent: T | null;
}

// const Carousel: React.FC<{
//   infoRef?: React.MutableRefObject<HTMLDivElement | null>;
//   contentsRef?: React.MutableRefObject<HTMLDivElement | null>;
//   currentContent: Product | Item | null;
// }> = ({ infoRef, contentsRef, currentContent, ...restProps }) => {

// https://stackoverflow.com/questions/53958028/how-to-use-generics-in-props-in-react-in-a-functional-component
const Carousel = <T extends { slides: { src: string; type: string }[] }>({
  infoRef,
  contentsRef,
  currentContent,
  ...restProps
}: PropsWithChildren<CarouselProps<T>>): React.ReactElement | null => {
  const size = useElementSize(infoRef);

  if (currentContent == null) {
    return <></>;
  }
  const { slides } = currentContent;

  return (
    <Container>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div>
            <Slide
              contentSize={
                (contentsRef?.current?.clientHeight as number) ?? undefined
              }
              infoSize={(size?.height as number) ?? undefined}
            >
              <div>
                {slide.type === 'image' ? (
                  <Image
                    size={size?.height ?? undefined}
                    src={`${process.env.PUBLIC_URL}/${slide.src}`}
                  />
                ) : (
                  <Video
                    size={size?.height ?? undefined}
                    src={`${process.env.REACT_APP_CDN_PUBLIC_URL}/${slide.src}`}
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                )}
              </div>
            </Slide>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;
