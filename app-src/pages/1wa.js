import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class1wa = () => {
  return(
    <Layout pageTitle="1wA">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/1wa"/>
      <Webscrap webscrapClass="1wa"/>
    </Layout>
  );
}

export default Class1wa;
