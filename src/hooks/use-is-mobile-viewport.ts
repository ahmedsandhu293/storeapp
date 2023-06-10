import { useMediaQuery } from 'usehooks-ts';

export const useIsMobileViewport = () => {
  return useMediaQuery('(max-width: 767px)');
};
