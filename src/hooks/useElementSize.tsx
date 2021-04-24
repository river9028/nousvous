import React, { useState, useEffect } from 'react';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

// 현재 캐러셀이 있는 컨텐츠의 높이를 얻기 위해 만든 hooks
// 초반에 생각한 방법과 달라지면서 이름이 애매해졌다 😢

// 사용하는 곳에서 ref를 받아와
const useElementSize = (
  ref: React.MutableRefObject<HTMLDivElement | null> | undefined,
): Size => {
  // ref의 브라우저 실시간 사이즈의 상태를 담을 상태
  const [refSize, setRefSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // 사이즈가 바뀔 때 ref의 실제 사이즈로 상태를 업데이트 해준다.
    function handleResize() {
      setRefSize({
        width: ref?.current?.clientWidth ?? undefined,
        height: ref?.current?.clientHeight ?? undefined,
      });
    }

    // 브라우저가 'resize' 될 때, 해당 함수를 실행.
    window.addEventListener('resize', handleResize);
    handleResize();
    // 언마운트시, 해당 함수를 삭제.
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  // 사용하는 곳에 상태 반환
  return refSize;
};

export default useElementSize;
