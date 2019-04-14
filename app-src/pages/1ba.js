import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class1ba = () => {
  return(
    <Layout pageTitle="1bA">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/1ba"/>
      <Webscrap webscrapClass="1ba"/>
    </Layout>
  );
}

export default Class1ba;
