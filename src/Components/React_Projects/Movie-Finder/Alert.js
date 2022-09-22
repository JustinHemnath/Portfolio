import React, { useEffect } from 'react';
import { Alertbox } from '../../../Styles/Styles';

function Alert({ message, color, removeAlert }) {
  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      removeAlert();

      return () => clearTimeout(alertTimeout);
    }, 3500);
  }, []);

  return <Alertbox color={color}>{message}</Alertbox>;
}

export default Alert;
