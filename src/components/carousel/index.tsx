import React, { useContext, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import * as dotenv from 'dotenv';
import { ProjectContext } from '../../context';
import { Container, Slide, Image, Video } from './styles/carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCarouselRect } from '../../hooks';

dotenv.config();

type Item = {
  id: number;
  title: string;
  caption: string;
  thumb: string;
  slides: { type: string; src: string }[];
  'thumb-size': string;
  'background-color': string;
};

const Carousel: React.FC = ({ ...restProps }) => {
  const { infoRef, contentsRef, currentProject } = useContext(ProjectContext);

  const size = useCarouselRect(infoRef);

  if (currentProject == null) {
    return <></>;
  }
  const { slides } = currentProject;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div>
            <Slide
              contentSize={contentsRef.current?.clientHeight as number}
              infoSize={size.height as number}
            >
              <div>
                {slide.type === 'image' ? (
                  <Image
                    size={size.height}
                    src={`${process.env.REACT_APP_CDN_PUBLIC_URL}/${slide.src}`}
                  />
                ) : (
                  <Video
                    size={size.height}
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
