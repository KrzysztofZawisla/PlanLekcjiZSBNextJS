import Link from "next/link";
import Layout from "./components/layout";
import Button from "./components/button";

const Index = () => {
  return(
    <Layout pageTitle="strona główna">
      <Button buttonText="1 Klasa" buttonLink="/1class"/>
      <Button buttonText="2 Klasa" buttonLink="/2class"/>
      <Button buttonText="3 Klasa" buttonLink="/3class"/>
      <Button buttonText="4 Klasa" buttonLink="/4class"/>
    </Layout>
  );
}

export default Index;
