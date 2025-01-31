export const TwoChar = (str) => {
    if (!str || typeof str !== 'string') return '';
    return str.slice(0, 2);
  };