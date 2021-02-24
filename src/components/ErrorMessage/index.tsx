import React, { FC } from 'react';

import { IProps } from './types';

const ErrorMessage: FC<IProps> = ({ statusMessage, statusCode }: IProps) => {
  return (
    <div>
      <h2>Oops!</h2>
      <p>{statusMessage}</p>
      <p>Error code: {statusCode}</p>
    </div>
  );
};

export default ErrorMessage;
