export const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };
  
//   export function sendToAnalytics({ name, delta, id }) {
//     // Assumes the global `gtag()` function exists, as Google Analytics script
//     // would include this
//     window.gtag('event', name, {
//       event_category: 'Web Vitals',
//       value: Math.round(name === 'CLS' ? delta * 1000 : delta), // values must be integers
//       event_label: id, // id unique to current page load
//       non_interaction: true, // avoids affecting bounce rate
//     });
//   }
  
//   reportWebVitals(sendToAnalytics);
  