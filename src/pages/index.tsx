import React from "react";

import Hello from "@components/Hello";
import Layout from "@components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Home" pageDescription="Home page">
      <Hello />
    </Layout>
  );
}
