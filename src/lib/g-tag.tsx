import Script from 'next/script';

export const GTag = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-145084435-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());


          // Google Analytics
          gtag('config', 'G-FMLMEMP95X');
          
          // Google Ads
          gtag('config', 'AW-661920822');
        `}
      </Script>
    </>
  );
};
