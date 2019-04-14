import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class4ia = () => {
  return(
    <Layout pageTitle="4iA">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/4ia"/>
      <Webscrap webscrapClass="4ia"/>
    </Layout>
  );
}

export default Class4ia;
