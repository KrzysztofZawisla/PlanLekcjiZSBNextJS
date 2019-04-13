import Layout from "./components/layout";
import Day from "./components/day";
import Lesson from "./components/lesson";

const Class2gi = () => {
  return(
    <Layout pageTitle="2GI">
      <Day dayNumber="1">
        <Lesson lessonNumber="1" lessonSubject="Geomatyka" lessonGroup="3" lessonClass="27" lessonTeacher="MA"/>
      </Day>
    </Layout>
  );
}

export default Class2gi;
