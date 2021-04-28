import React, { useEffect } from "react";
import { DiscussionEmbed } from "disqus-react";
import { Link } from "react-router-dom";
import { DISQUS_SHORT_NAME, DISQUS_URL } from "./constants";

const Disqus1 = (props) => {
  const disqusShortname = DISQUS_SHORT_NAME;
  const postId = "6083923eef9d527ea6a615b8";

  const disqusConfig = {
    url: `${DISQUS_URL}/${postId}`,
    identifier: postId,
    title: `Article ${postId}`,
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h1>Disqus1</h1>
      <br />
      <Link to="/disqus1">Disqus1</Link>
      <br />
      <Link to="/disqus2">Disqus2</Link>
      <br />
      <Link to="/disqus3">Disqus3</Link>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default Disqus1;
