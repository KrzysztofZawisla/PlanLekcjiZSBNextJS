import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class2gi = () => {
  return(
    <Layout pageTitle="2GI">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/2gi"/>
      <Webscrap webscrapClass="2gi"/>
    </Layout>
  );
}

export default Class2gi;
