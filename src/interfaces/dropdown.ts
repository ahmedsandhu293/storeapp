export interface DropdownEntry {
  title: string;
  link: string;
}

export interface Dropdown {
  title: string;
  link: string;
  entries: DropdownEntry[];
}
