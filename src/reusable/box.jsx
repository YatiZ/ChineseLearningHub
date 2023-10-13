import React from 'react';
import classNames from 'classnames';

const Box = ({children, className, ...rest}) => {
  const classes = classNames(
    'rounded-full md:py-10 bg-yellow-400 text-center py-8 px-10',
    className
  )
  return (
    <div className={classes} {...rest}>{children}</div>
  )
}

export default Box