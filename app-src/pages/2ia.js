import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class2ia = () => {
  return(
    <Layout pageTitle="2iA">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/2ia"/>
      <Webscrap webscrapClass="2ia"/>
    </Layout>
  );
}

export default Class2ia;
