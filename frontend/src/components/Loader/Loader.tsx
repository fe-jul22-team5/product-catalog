import React from 'react';
import { ThreeDots } from  'react-loader-spinner';

type Wrapper = {
  justifyContent: string,
}

type Props = {
  height?: string,
  width?: string,
  wrapperStyle?: Wrapper,
}

export const Loader = React.memo(function Loader({
  height = '80',
  width = '80',
  wrapperStyle = { 'justifyContent': 'center' },
}: Props) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius="9"
      color="#89939A"
      ariaLabel="three-dots-loading"
      wrapperStyle={wrapperStyle}
      visible={true}
    />
  );
});
