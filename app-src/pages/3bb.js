import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class3bb = () => {
  return(
    <Layout pageTitle="3bB">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/3bb"/>
      <Webscrap webscrapClass="3bb"/>
    </Layout>
  );
}

export default Class3bb;
