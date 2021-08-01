import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface IPProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 's' | 'm' | 'l';
  children: ReactNode;
}
