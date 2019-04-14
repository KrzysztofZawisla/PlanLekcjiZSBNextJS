import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class4bb = () => {
  return(
    <Layout pageTitle="4bB">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/4bb"/>
      <Webscrap webscrapClass="4bb"/>
    </Layout>
  );
}

export default Class4bb;
