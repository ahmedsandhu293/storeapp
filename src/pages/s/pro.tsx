import clsx from 'clsx';
import Image from 'next/image';
import { ElfsightWidget } from 'next-elfsight-widget';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const elfsightWidgetID = 'e0ad8ae0-7e1e-47f6-b950-e6de857417fd';
const Pro = () => (
  <Main
    meta={
      <Meta
        title="Linq Pro"
        description="Linq Pro gives you access to advanced features, like embedding videos + music, forms, calendar integrations, and more."
        canonical={`${AppConfig.baseUrl}/pro`}
      />
    }
  >
    <div className={clsx('max-w-screen-xl', 'mx-auto')}>
      <div className={clsx('w-9/12', 'mx-auto', 'mb-24')}>
        <div className={clsx('text-center text-4xl font-bold', 'mb-5')}>
          What is Linq Pro?
        </div>
        <p className={clsx('text-center text-2xl')}>
          Linq Pro gives you access to advanced features, like embedding videos
          + music, forms, calendar integrations, and more.
        </p>
      </div>
      <div className={clsx('h-[2167px]', 'sm:h-[971px]', 'lg:h-[964px]')}>
        <ElfsightWidget widgetID={elfsightWidgetID} lazy />
      </div>
      <div
        className={clsx(
          'mt-24',
          'w-full',
          'md:w-9/12',
          'mx-auto',
          'flex',
          'flex-col',
          'lg:flex-row'
        )}
      >
        <Image
          src={`${AppConfig.vercelBaseUrl}/images/linq_pro_phone_card.png`}
          alt="Linq app with Pro features"
          width={500}
          height={500}
          className="flex-none"
        />

        <div
          className={clsx(
            'flex-1',
            'pl-4',
            'md:pl-20',
            'flex-col',
            'flex justify-center'
          )}
        >
          <div className={clsx('text-4xl font-bold', 'mb-5')}>
            Linq for Teams
          </div>
          <div className={clsx('text-lg', 'mb-5')}>
            Give your whole team Pro features + advanced analytics, contact
            sharing, and other features only available with{' '}
            <a
              href={`${AppConfig.marketingUrl}/pages/teams`}
              title="View Linq for Teams"
              className={clsx(
                'text-black decoration-black',
                'underline underline-offset-2'
              )}
            >
              <span className={clsx('font-bold')}>Teams</span>
            </a>
          </div>
          <div>
            <a href={`${AppConfig.marketingUrl}/pages/teams`}>
              <button
                type="button"
                className={clsx(
                  'btn-primary rounded-none text-white',
                  'px-5 py-2'
                )}
              >
                Linq for Teams
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Main>
);
export default Pro;
