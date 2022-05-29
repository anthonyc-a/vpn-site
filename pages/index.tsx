import React from "react";
import HeroComponent from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import { Container } from "../components/styles/Container/Container";

const Home = () => {
  return (
    <Layout>
      <Container>
        <HeroComponent />
      </Container>
    </Layout>
  );
};

export default Home;
