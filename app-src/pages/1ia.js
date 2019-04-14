import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class1ia = () => {
  return(
    <Layout pageTitle="1iA">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/1ia"/>
      <Webscrap webscrapClass="1ia"/>
    </Layout>
  );
}

export default Class1ia;
