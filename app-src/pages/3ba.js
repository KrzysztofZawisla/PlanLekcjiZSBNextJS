import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class3ba = () => {
  return(
    <Layout pageTitle="3bA">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/3ba"/>
      <Webscrap webscrapClass="3ba"/>
    </Layout>
  );
}

export default Class3ba;
