import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class3gi = () => {
  return(
    <Layout pageTitle="3GI">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/3gi"/>
      <Webscrap webscrapClass="3gi"/>
    </Layout>
  );
}

export default Class3gi;
