import React from 'react';

const CapitalizeString = (text) => {
  const words = text.split(' ');
  words.map((word, index) => {
    return (words[index] = word[0].toUpperCase() + word.substring(1));
  });
  return words.join(' ');
};

export default CapitalizeString;
