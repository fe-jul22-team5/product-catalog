import React from 'react';
import { ThreeDots } from  'react-loader-spinner';

export const Loader = React.memo(function Loader() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#89939A"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ 'justifyContent': 'center' }}
      visible={true}
    />
  );
});
