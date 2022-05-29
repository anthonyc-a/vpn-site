import React from "react";
import FeaturesComponent from "../components/Features/Features";
import HeroComponent from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import PlanComponent from "../components/Plan/Plan";
import { Container } from "../components/styles/Container/Container";

const Home = () => {
  return (
    <Layout>
      <Container>
        <HeroComponent />
        <FeaturesComponent />
        <PlanComponent />
      </Container>
    </Layout>
  );
};

export default Home;
