import React, { useState, useEffect } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

const ITEMS_PER_PAGE = 50;

function App() {
  const [cards, setCards] = useState([]);
  const [pagination, setPagination] = useState({
    hasMore: false,
    offset: 0,
    limit: ITEMS_PER_PAGE,
  });

  const fetchData = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${pagination.offset}&limit=${pagination.limit}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data) {
      setCards([...cards, ...data.results]);
      let hasMore;

      if (data.next) hasMore = true;
      else hasMore = false;

      setPagination({
        ...pagination,
        offset: pagination.offset + ITEMS_PER_PAGE,
        hasMore,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>react-infinite-scroll-component</h1>
      <hr />

      <InfiniteScroll
        dataLength={cards.length}
        next={fetchData}
        hasMore={pagination.hasMore}
        loader={<h4>Loading...</h4>}
      >
        {cards.map((card, index) => {
          return <div key={index}>Pokemon: {card.name}</div>;
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
