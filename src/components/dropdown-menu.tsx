import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';
import { type MouseEvent } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import type { DropdownEntry } from '@/interfaces/dropdown';

import styles from './dropdown-menu.module.css';

type DropdownItemProps = DropdownEntry;

const DropdownItem = ({ title, link }: DropdownItemProps) => {
  return (
    <a
      className="nav-small-text m-0 whitespace-nowrap py-2 pl-4 pr-7"
      href={link}
    >
      {title}
    </a>
  );
};

type DropdownMenuProps = {
  title: string;
  link: string;
  entries?: DropdownEntry[];
  className?: string;
};

const useDropdown = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [overTitle, setOverTitle] = useState(false);
  const [overList, setOverList] = useState(false);
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;
    if (touch) return;

    if (open && !overTitle && !overList) {
      setOpen(false);
      ref.current.click();
    } else if (!open && (overTitle || overList)) {
      setOpen(true);
      ref.current.click();
    }
  }, [overTitle, overList]);

  useEffect(() => {
    setTouch(false);
    setClicked(false);
  }, [clicked]);

  return {
    open,
    ref,
    onTouchStart: () => setTouch(true),
    onMouseEnterTitle: () => setOverTitle(true),
    onMouseLeaveTitle: () => setOverTitle(false),
    onMouseEnterList: () => setOverList(true),
    onMouseLeaveList: () => setOverList(false),
    onTitleClick: () => {
      setClicked(true);
      setOpen(!open);
      return false;
    },
  };
};

const DropdownMenu = ({
  title,
  link,
  entries,
  className,
}: DropdownMenuProps) => {
  const { open, ref, ...handlers } = useDropdown();

  const mobile = useMediaQuery('(max-width: 767px)');
  const chevron = useMemo(() => {
    if (!mobile) return faChevronDown;

    return open ? faChevronUp : faChevronDown;
  }, [mobile, open]);

  return (
    <div
      className={`md:relative ${styles.dropdownMenu} ${
        open ? styles.open : ''
      } ${className}`}
    >
      <button
        type="button"
        ref={ref}
        className="flex h-full w-full grow flex-row items-center justify-between"
        onTouchStart={handlers.onTouchStart}
        onFocus={handlers.onMouseEnterTitle}
        onMouseEnter={handlers.onMouseEnterTitle}
        onBlur={handlers.onMouseLeaveTitle}
        onMouseLeave={handlers.onMouseLeaveTitle}
        onClick={handlers.onTitleClick}
      >
        <a
          onClick={(e: MouseEvent<HTMLAnchorElement>) => {
            e.stopPropagation();
            return true;
          }}
          className="w-full whitespace-nowrap p-2 text-left"
          href={link}
        >
          {title}
        </a>
        {entries && (
          <FontAwesomeIcon
            icon={chevron}
            className="ml-1 h-3 w-3"
            strokeWidth="2"
            onClick={() => {
              if (!mobile) window.location.href = link;
            }}
          />
        )}
      </button>
      {entries && (
        <div
          onMouseEnter={handlers.onMouseEnterList}
          onFocus={handlers.onMouseEnterList}
          onMouseLeave={handlers.onMouseLeaveList}
          onBlur={handlers.onMouseLeaveList}
          className={clsx(
            'invisible static flex min-w-fit origin-top-right -translate-y-3 flex-col px-0 pb-1 text-left md:absolute md:left-0 md:z-[60] md:h-fit md:bg-white md:pt-4',
            styles.dropdownMenuList
          )}
        >
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          {entries?.map((entry) => (
            <DropdownItem
              key={`dropdown-entry-${title}-${entry.title}`}
              {...entry}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
