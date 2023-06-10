type ITwitterTagProps = {
  title: string;
  description: string;
};

const TwitterTag = (props: ITwitterTagProps) => {
  return (
    <>
      <meta name="twitter:site" content="@thelinqapp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
    </>
  );
};

export { TwitterTag };
