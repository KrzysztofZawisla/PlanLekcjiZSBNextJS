import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class4ga = () => {
  return(
    <Layout pageTitle="4gA">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/4ga"/>
      <Webscrap webscrapClass="4ga"/>
    </Layout>
  );
}

export default Class4ga;
