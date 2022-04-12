import { RefObject } from 'react';

export interface ICard {
  name: string;
  location: string;
  content: string;
}

export interface ISection {
  section: RefObject<HTMLDivElement>;
}

export interface ILink {
  text: string;
  to: string;
  section: React.RefObject<HTMLDivElement>;
}
