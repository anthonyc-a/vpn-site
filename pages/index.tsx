import React from "react";
import FeaturesComponent from "../components/Features/Features";
import HeroComponent from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import { Container } from "../components/styles/Container/Container";

const Home = () => {
  return (
    <Layout>
      <Container>
        <HeroComponent />
        <FeaturesComponent />
      </Container>
    </Layout>
  );
};

export default Home;
