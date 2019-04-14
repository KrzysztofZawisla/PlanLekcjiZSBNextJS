import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class3w = () => {
  return(
    <Layout pageTitle="3w">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/3w"/>
      <Webscrap webscrapClass="3w"/>
    </Layout>
  );
}

export default Class3w;
