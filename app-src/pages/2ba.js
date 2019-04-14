import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class2ba = () => {
  return(
    <Layout pageTitle="2bA">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/2ba"/>
      <Webscrap webscrapClass="2ba"/>
    </Layout>
  );
}

export default Class2ba;
