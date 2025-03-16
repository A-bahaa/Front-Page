import { useLayoutEffect } from 'react';
const usePageDimensions = () => {
  const pageRatio = 6 / 11;
  const pageMargin = 0.9;

  useLayoutEffect(() => {
    const windowSizeHandler = () => {
      const current_height = document.documentElement.clientHeight * pageMargin;
      const current_width = document.documentElement.clientWidth * pageMargin;
      const page_dimensions = [];
      // landscape orientation
      // take the whole height and set the width accordingally
      if (current_width >= current_height * pageRatio) {
        [page_dimensions[0], page_dimensions[1]] = [
          current_height * pageRatio,
          current_height,
        ];
      } else {
        // portrait orientation
        // take the whole width and set the height accordingally
        [page_dimensions[0], page_dimensions[1]] = [
          current_width,
          current_width / pageRatio,
        ];
      }
      document.documentElement.style.setProperty(
        '--page-width',
        `${page_dimensions[0]}px`
      );
      document.documentElement.style.setProperty(
        '--page-height',
        `${page_dimensions[1]}px`
      );
    };
    // set the dimention on the first mount
    windowSizeHandler();
    window.addEventListener('resize', windowSizeHandler);
    // cleanup
    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePageDimensions;
