import React, { useEffect } from 'react';

const AlertPopup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-500 text-white py-3 text-center z-50">
      {message}
    </div>
  );
};

export default AlertPopup;
