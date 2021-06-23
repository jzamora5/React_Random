import { useState } from 'react';
import styled from 'styled-components';
import { SearchButton } from './SearchButton';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const SearchBox = ({ requestSearch }) => {
  const [query, setQuery] = useState('');

  const searchClick = () => {
    if (query) {
      requestSearch(query);
    }
  };

  const updateQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={query}
        onChange={updateQuery}
      />
      <SearchButton data-testid="search-button" onClick={searchClick} />
    </Container>
  );
};
