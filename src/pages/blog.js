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

function BlogPage(props) {
  const [docs, setDocsData] = useState(null);

  const formatDate = (date) => Moment(date).format("LL");

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "article")
      );
      if (response) {
        setDocsData(response.results);
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
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="Blog"
        subtitle="Welcome to our Blog"
      ></HeroSection2>
      {docs &&
        docs.map((doc) => (
          <Section key={doc.id}>
            <Container className="text-center">
              <SectionHeader
                title={RichText.asText(doc.data.title)}
                subtitle={formatDate(Date(doc.data.timestamp).toString())}
                size={2}
              />
            </Container>
            <br></br>
            <Container className="text-left">
              <RichText render={doc.data.body} />
            </Container>
          </Section>
        ))}
    </>
  );
}

export default BlogPage;
