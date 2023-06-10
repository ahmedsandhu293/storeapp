import clsx from 'clsx';
import type { ReactNode } from 'react';

import { Footer } from '@/layouts/Footer';
import { Header } from '@/layouts/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    {props.meta}

    <div className={clsx('px-5 md:px-10 lg:mx-24 border-b-2')}>
      <Header />
    </div>
    <main className="pb-5 py-10 md:px-10 lg:mx-24">{props.children}</main>
    <Footer />
  </div>
);

export { Main };
