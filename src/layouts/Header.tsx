import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import DropdownMenu from '@/components/dropdown-menu';
import { AppConfig } from '@/utils/AppConfig';

type IconMapType = {
  [Key in keyof typeof AppConfig.socials]: IconDefinition;
};

const IconMap: IconMapType = {
  facebook: faFacebookF,
  twitter: faTwitter,
  instagram: faInstagram,
  linkedin: faLinkedin,
  youtube: faYoutube,
};

type IHeaderProps = {
  showTeamsCTA?: boolean;
};

export const Header = (props: IHeaderProps) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex grow content-between justify-between py-5">
      <div className="flex items-center justify-start">
        <a href={`${AppConfig.marketingUrl}`}>
          <Image
            src={`${AppConfig.vercelBaseUrl}/images/logo.webp`}
            alt="Linq"
            width={70}
            height={41}
            className="flex-none"
          />
        </a>
      </div>
      <div className="mx-auto my-0 items-center text-center">
        <nav className="relative md:static">
          <div
            className={clsx(
              !open && 'invisible',
              'fixed left-0 top-0 z-10 h-screen w-screen bg-black/50 md:hidden'
            )}
          />
          <ul
            className={`fixed inset-y-0 ${
              open ? 'right-0' : 'right-[-300px]'
            } nav-normal-text z-20 flex h-screen w-[300px] flex-col justify-start bg-white duration-[.8s] md:static md:z-0 md:h-fit md:w-auto md:flex-row md:flex-wrap md:justify-center`}
          >
            <li className="px-5 md:hidden">
              <button
                type="button"
                className="flex h-[70px] w-full items-center justify-end border-0 border-b border-solid border-b-[#e8e8e1]"
                onClick={() => setOpen(false)}
              >
                <img
                  alt="Close Mobile Menu"
                  width={28}
                  height={28}
                  className="stroke-[3px]"
                  src={`${AppConfig.vercelBaseUrl}/static/images/close.svg`}
                />
              </button>
            </li>
            {AppConfig.header.dropdowns.map((dropdown) => (
              <li
                key={`dropdown-${dropdown.title} `}
                className="px-5 pt-5 md:p-0"
              >
                <DropdownMenu
                  {...dropdown}
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className="nav-normal-text grow-0 font-normal md:text-base"
                />
                <div className="border-b border-solid border-[#e8e8e1] pt-5 md:hidden" />
              </li>
            ))}
            <div className="mx-0 mb-5 mt-3 px-5 pt-1 md:hidden">
              {Object.entries(AppConfig.socials).map(
                ([name, link]: [string, string]) => (
                  <a key={name} href={link}>
                    <FontAwesomeIcon
                      icon={IconMap[name as keyof IconMapType]}
                      className="m-0 mb-1 mr-4 fill-black stroke-black stroke-[3px]"
                    />
                  </a>
                )
              )}
            </div>
          </ul>
        </nav>
      </div>

      <div className="flex shrink-0 items-center justify-end">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="m-2 md:hidden md:h-0 md:w-0"
        >
          <img
            src={`${AppConfig.vercelBaseUrl}/static/images/hamburger.svg`}
            width={30}
            height={30}
            alt="Open Mobile Menu"
          />
        </button>
        <button type="button" className="m-2">
          <a href={`${AppConfig.marketingUrl}/cart`}>
            <img
              src={`${AppConfig.vercelBaseUrl}/static/images/cart.svg`}
              width={30}
              height={30}
              alt="Open Your Cart"
            />
          </a>
        </button>
        {props.showTeamsCTA && (
          <a
            href="https://buy.linqapp.com/pages/teams"
            className="nav-small-text hidden whitespace-nowrap rounded-md border bg-[#006DFF] px-4 py-3 text-white lg:block"
          >
            Linq for Teams
          </a>
        )}
      </div>
    </header>
  );
};
