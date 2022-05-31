import Head from "next/head";
import React from "react";
import CustomersComponent from "../components/Customers/Customers";
import FeaturesComponent from "../components/Features/Features";
import GlobalComponent from "../components/Global/Global";
import HeroComponent from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import PlanComponent from "../components/Plan/Plan";
import { Container } from "../components/styles/Container/Container";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Lasles VPN | Free VPN Service</title>
      </Head>
      <Container>
        <HeroComponent />
        <FeaturesComponent />
        <PlanComponent />
        <GlobalComponent />
        <CustomersComponent />
      </Container>
    </Layout>
  );
};

export default Home;
