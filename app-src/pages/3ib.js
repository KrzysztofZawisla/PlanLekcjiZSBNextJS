import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class3ib = () => {
  return(
    <Layout pageTitle="3iB">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/3ib"/>
      <Webscrap webscrapClass="3ib"/>
    </Layout>
  );
}

export default Class3ib;
