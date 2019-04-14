import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class1ib = () => {
  return(
    <Layout pageTitle="1iB">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/1ib"/>
      <Webscrap webscrapClass="1ib"/>
    </Layout>
  );
}

export default Class1ib;
