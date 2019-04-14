import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class1w = () => {
  return(
    <Layout pageTitle="1w">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/1w"/>
      <Webscrap webscrapClass="1w"/>
    </Layout>
  );
}

export default Class1w;
