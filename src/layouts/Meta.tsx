import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { ClearbitTag } from '@/lib/clearbit-tag';
import { GTag } from '@/lib/g-tag';
import { LinkedinTag } from '@/lib/linkedin-tag';
import { TwitterTag } from '@/lib/twitter-tags';
import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  const description = props.description || AppConfig.siteDescription;

  return (
    <>
      <Head>
        <GTag />
        <ClearbitTag />
        <LinkedinTag />
        <TwitterTag description={description} title={props.title} />
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={description}
        canonical={props.canonical}
        openGraph={{
          type: 'website',
          title: props.title,
          description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
