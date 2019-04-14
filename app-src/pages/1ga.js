import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class1ga = () => {
  return(
    <Layout pageTitle="1gA">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/1ga"/>
      <Webscrap webscrapClass="1ga"/>
    </Layout>
  );
}

export default Class1ga;
