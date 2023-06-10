import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/global.css';

import type { AppProps } from 'next/app';

import { RollbarTag } from '@/lib/rollbar-tag';

const { loadIntercom } = require('next-intercom');

const MyApp = ({ Component, pageProps }: AppProps) => {
  /*
    Generate the intercom script and load the composer
  */
  loadIntercom({
    appId: 'rycjiir6',
    ssr: false,
    initWindow: true,
    delay: 0,
  });

  return (
    <>
      <RollbarTag />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
