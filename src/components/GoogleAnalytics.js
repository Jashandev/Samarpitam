import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-W2WEDN41HW', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}

export default GoogleAnalytics;
