import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class4ba = () => {
  return(
    <Layout pageTitle="4bA">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/4ba"/>
      <Webscrap webscrapClass="4ba"/>
    </Layout>
  );
}

export default Class4ba;
