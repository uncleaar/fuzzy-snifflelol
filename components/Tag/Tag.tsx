import React from 'react';
import { ITagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
  size,
  color = 'ghost',
  className,
  children,
  href,
  ...props
}: ITagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tagя, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.gray]: color === 'gray',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
