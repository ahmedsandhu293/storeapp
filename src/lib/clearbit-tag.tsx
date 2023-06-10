import Script from 'next/script';

export const ClearbitTag = () => {
  return (
    <Script
      id="clearbit"
      src="https://tag.clearbitscripts.com/v1/pk_8f41bb23049d7d439585fb98a91cc2d7/tags.js"
      strategy="afterInteractive"
    />
  );
};
