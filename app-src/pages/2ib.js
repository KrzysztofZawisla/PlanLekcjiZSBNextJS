import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class2ib = () => {
  return(
    <Layout pageTitle="2iB">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/2ib"/>
      <Webscrap webscrapClass="2ib"/>
    </Layout>
  );
}

export default Class2ib;
