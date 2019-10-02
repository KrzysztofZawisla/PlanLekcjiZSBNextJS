import Layout from "./components/layout";
import Button from "./components/button";
import React from "react";

interface IndexProps {}

const Index: React.FunctionComponent<IndexProps> = () => {
  return (
    <Layout pageTitle="strona główna">
      <Button buttonText="1 Klasa" buttonLink="/classList?order=0"/>
      <Button buttonText="2 Klasa" buttonLink="/classList?order=1"/>
      <Button buttonText="3 Klasa" buttonLink="/classList?order=2"/>
      <Button buttonText="4 Klasa" buttonLink="/classList?order=3"/>
    </Layout>
  );
}

export default Index;
