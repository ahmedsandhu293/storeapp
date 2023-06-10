import clsx from 'clsx';

import { FacebookIcon } from '@/components/facebook-icon';
import { InstagramIcon } from '@/components/instagram-icon';
import { LinkedinIcon } from '@/components/linkedin-icon';
import { TwitterIcon } from '@/components/twitter-icon';
import { YoutubeIcon } from '@/components/youtube-icon';

const FirstColumn = () => {
  return (
    <div className={clsx('flex flex-row', 'mb-4')}>
      <a
        className={clsx('mr-4')}
        target="_blank"
        href="https://www.facebook.com/thelinqapp"
        title="Linq on Facebook"
      >
        <FacebookIcon />
      </a>

      <a
        className={clsx('mr-4')}
        target="_blank"
        href="https://twitter.com/thelinqapp"
        title="Linq on Twitter"
      >
        <TwitterIcon />
      </a>

      <a
        className={clsx('mr-4')}
        target="_blank"
        href="https://www.instagram.com/thelinqapp/?hl=en"
        title="Linq on Instagram"
      >
        <InstagramIcon />
      </a>

      <a
        className={clsx('mr-4')}
        target="_blank"
        href="https://www.linkedin.com/company/linqapp/"
        title="Linq on LinkedIn"
      >
        <LinkedinIcon />
      </a>

      <a
        className={clsx('mr-4')}
        target="_blank"
        href="https://www.youtube.com/channel/UCSRhkURT85oMsPpntrix-Ng/featured"
        title="Linq on YouTube"
      >
        <YoutubeIcon />
      </a>
    </div>
  );
};

const SecondColumn = () => {
  return (
    <ul className={clsx('mb-4')}>
      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://buy.linqapp.com/pages/contact-us">Contact Us</a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://buy.linqapp.com/policies/privacy-policy">
          Privacy Policy
        </a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://buy.linqapp.com/pages/refund-policy">Refund Policy</a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://buy.linqapp.com/policies/terms-of-service">
          Terms of Service
        </a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://buy.linqapp.com/pages/terms-of-sale">Terms of Sale</a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://buy.linqapp.com/pages/data-processing-addendum">
          Data Processing Addendum
        </a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://buy.linqapp.com/pages/linq-careers">Careers</a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://security-report.linqapp.com">
          Security &amp; Trust Report
        </a>
      </li>
    </ul>
  );
};

const ThirdColumn = () => {
  return (
    <ul className={clsx('mb-4')}>
      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://buy.linqapp.com/collections/all-1">Linq Store</a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://buy.linqapp.com/pages/teams">Industries</a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://buy.linqapp.com/pages/teams">Linq for Teams</a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://buy.linqapp.com/pages/linq-pro">Linq Pro</a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://linqapp.com/support">Support</a>
      </li>

      <li className={clsx('mb-1', 'py-1')}>
        <a href="https://linqapp.com/home">Linq Profile</a>
      </li>
    </ul>
  );
};

const FourthColumn = () => {
  return (
    <div className={clsx('mb-4')}>
      <p className={clsx('space-x-1', 'mb-5', 'font-bold', 'tracking-[.2em]')}>
        LET&apos;S CONNECT
      </p>
      <div>
        <p className={clsx('mb-5')}>
          You can contact us at contact@linqapp.com, or call us at (205)
          272-6709.
        </p>
      </div>
    </div>
  );
};

const Footer = () => {
  // @ts-ignore
  return (
    <footer
      className={clsx(
        'py-20',
        'text-white',
        'bg-black',
        'px-10',
        'flex justify-center'
      )}
    >
      <div className={clsx('max-w-[1250px]')}>
        <div
          className={clsx(
            'grid-cols-4 md:grid',
            'text-white',
            'pb-20',
            'text-[15px]'
          )}
        >
          <FirstColumn />
          <SecondColumn />
          <ThirdColumn />
          <FourthColumn />
        </div>

        <div className={clsx('text-center', 'w-full', 'text-xs')}>
          <div>© 2023 Linq</div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
