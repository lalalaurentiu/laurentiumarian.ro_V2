const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB, getINP }) => {
      const sendToAnalytics = (metric) => {
        const body = {
          name: metric.name,
          value: metric.value,
          id: metric.id,
          delta: metric.delta,
          entries: metric.entries,
        };
        
        if (navigator.sendBeacon) {
          navigator.sendBeacon('/api/vitals', JSON.stringify(body));
        } else {
          fetch('/api/vitals', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
            keepalive: true,
          }).catch(() => {});
        }
        
        console.log('[Web Vitals]', metric.name, metric.value.toFixed(2), metric.rating);
      };
      
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
      getINP(sendToAnalytics);
    });
  }
};

export default reportWebVitals;