import Layout from "./components/layout";
import Webscrap from "./components/webscrap";
import Button from "./components/button";

const Class3ia = () => {
  return(
    <Layout pageTitle="3iA">
      <Button buttonText="Pobierz plan lekcji" buttonLink="/3ia"/>
      <Webscrap webscrapClass="3ia"/>
    </Layout>
  );
}

export default Class3ia;
