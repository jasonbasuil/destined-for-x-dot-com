import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import HeroSection2 from "./../components/HeroSection2";
import Section from "./../components/Section";
import SectionHeader from "./../components/SectionHeader";

import Prismic from "prismic-javascript";
import { Date, RichText } from "prismic-reactjs";
import Moment from "moment";

const apiEndpoint = "https://destinedforx.cdn.prismic.io/api/v2";

const Client = Prismic.client(apiEndpoint);

const formatDate = (date) => Moment(date).format("LL");

function BlogPage(props) {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "article")
      );
      if (response) {
        setArticles(response.results);
        console.log(response.results);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <HeroSection2
        bg="secondary"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Blog"
        subtitle="Welcome to the Destined for X Blog"
      ></HeroSection2>
      {articles &&
        articles.map((article) => (
          <Section key={article.id}>
            <Container className="text-center">
              <SectionHeader
                title={RichText.asText(article.data.title)}
                subtitle={formatDate(Date(article.data.timestamp).toString())}
                size={2}
              />
              {article.data.primary_image.url && (
                <img
                  src={article.data.primary_image.url}
                  alt={article.data.alt}
                  style={{ width: "65vw" }}
                />
              )}
            </Container>
            <br></br>
            <Container className="text-left">
              <RichText render={article.data.body} />
            </Container>
          </Section>
        ))}
    </>
  );
}

export default BlogPage;
