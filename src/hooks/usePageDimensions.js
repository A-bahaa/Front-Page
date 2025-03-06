import { useEffect, useState } from 'react';
const usePageDimensions = () => {
  const [dimensions, setDimensions] = useState([]);
  const pageRatio = 8 / 11;
  const pageMargin = 0.95;

  useEffect(() => {
    const windowSizeHandler = () => {
      const current_height = document.documentElement.clientHeight * pageMargin;
      const current_width = document.documentElement.clientWidth * pageMargin;
      // landscape orientation
      // take the whole height and set the width accordingally
      if (current_width >= current_height * pageRatio) {
        setDimensions([current_height * pageRatio, current_height]);
      } else {
        // portrait orientation
        // take the whole width and set the height accordingally
        setDimensions([current_width, current_width / pageRatio]);
      }
    };
    // set the dimention on the first mount
    windowSizeHandler();
    window.addEventListener('resize', windowSizeHandler);
    // cleanup
    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
  }, []);

  return dimensions;
};

export default usePageDimensions;
