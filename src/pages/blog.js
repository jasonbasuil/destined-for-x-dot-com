import React, { useEffect, useState } from "react";
import HeroSection2 from "./../components/HeroSection2";

import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

const apiEndpoint = "https://destinedforx.cdn.prismic.io/api/v2";

const Client = Prismic.client(apiEndpoint);

function BlogPage(props) {
  const [docs, setDocsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "article")
      );
      if (response) {
        setDocsData(response.results);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <HeroSection2
        bg="primary"
        textColor="white"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="Blog"
        subtitle="Welcome to our Blog"
      ></HeroSection2>

      {docs &&
        docs.map((doc) => (
          <div>
            <h1>{RichText.asText(doc.data.title)}</h1>
            <RichText render={doc.data.body} />
          </div>
        ))}
    </>
  );
}

export default BlogPage;
