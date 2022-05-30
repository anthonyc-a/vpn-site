import React from "react";
import CustomersComponent from "../components/Customers/Customers";
import FeaturesComponent from "../components/Features/Features";
import GlobalComponent from "../components/Global/Global";
import HeroComponent from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import PlanComponent from "../components/Plan/Plan";
import { Container } from "../components/styles/Container/Container";
import SubscribeComponent from "../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <Layout>
      <Container>
        <HeroComponent />
        <FeaturesComponent />
        <PlanComponent />
        <GlobalComponent />
        <CustomersComponent />
        <SubscribeComponent />
      </Container>
    </Layout>
  );
};

export default Home;
