import React from 'react';

export const SearchButton = ({ 'data-testid': dataTestId, onClick }) => {
  return (
    <button data-testid={dataTestId} onClick={onClick}>
      Search
    </button>
  );
};
