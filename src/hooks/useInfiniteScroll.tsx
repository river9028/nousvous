import React, { useState, useEffect } from 'react';

type ItemType = {
  id: number;
  title: string;
  caption: string;
  thumb: string;
  slides: { type: string; src: string }[];
  'thumb-size': string;
  'background-color': string;
};

const useInfiniteScroll = (items: ItemType[]): ItemType[] => {
  // initialState로 item 3개만 담아 놓은 배열로 지정
  const [count, setCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      // console.log('scrolling');

      // 문서의 높이(스크롤 되어야 할 부분)
      const maxHeight = document.body.clientHeight;
      // Y축 스크롤이 위치한 좌표 + 브라우저 창 화면의 높이
      const currentScroll = window.scrollY + window.innerHeight;

      // console.log(window.scrollY, window.innerHeight);
      // console.log(maxHeight, currentScroll);

      if (maxHeight <= Math.round(currentScroll)) {
        setCount((prevCount) => {
          // prev의 길이와 items 길이가 같을 경우
          if (prevCount >= items.length) {
            return prevCount;
          }

          // prev와 items 길이가 다를 경우,
          return prevCount + 3;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  return items.slice(0, count);
};

export default useInfiniteScroll;
