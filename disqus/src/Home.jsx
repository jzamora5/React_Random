import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <br />
      <Link to="/disqus1">Disqus1</Link>
      <br />
      <Link to="/disqus2">Disqus2</Link>
      <br />
      <Link to="/disqus3">Disqus3</Link>
    </div>
  );
};

export default Home;
