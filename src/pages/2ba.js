import Layout from "./components/layout";
import Day from "./components/day";
import Lesson from "./components/lesson";

const Class2ba = () => {
  return(
    <Layout pageTitle="2bA">
      <Day dayNumber="1">
        <Lesson lessonNumber="0" lessonSubject="Wykończenia robót" lessonGroup="1" lessonTeacher="MC"/>
        <Lesson lessonNumber="0" lessonSubject="Wykończenia robót" lessonGroup="2" lessonTeacher="RC"/>
        <Lesson lessonNumber="1" lessonSubject="Wykończenia robót" lessonGroup="1" lessonTeacher="MC"/>
        <Lesson lessonNumber="1" lessonSubject="Wykończenia robót" lessonGroup="2" lessonTeacher="RC"/>
        <Lesson lessonNumber="2" lessonSubject="Wykończenia robót" lessonGroup="1" lessonTeacher="MC"/>
        <Lesson lessonNumber="2" lessonSubject="Wykończenia robót" lessonGroup="2" lessonTeacher="RC"/>
        <Lesson lessonNumber="3" lessonSubject="Wykończenia robót" lessonGroup="1" lessonTeacher="MC"/>
        <Lesson lessonNumber="3" lessonSubject="Wykończenia robót" lessonGroup="2" lessonTeacher="RC"/>
        <Lesson lessonNumber="4" lessonSubject="Wykończenia robót" lessonGroup="1" lessonTeacher="MC"/>
        <Lesson lessonNumber="4" lessonSubject="Wykończenia robót" lessonGroup="2" lessonTeacher="RC"/>
        <Lesson lessonNumber="5" lessonSubject="Technika robót" lessonGroup="1" lessonClass="19" lessonTeacher="MC"/>
        <Lesson lessonNumber="5" lessonSubject="Podstawy budownictwa" lessonGroup="2" lessonClass="16" lessonTeacher="PM"/>
        <Lesson lessonNumber="6" lessonSubject="Technika robót" lessonGroup="1" lessonClass="19" lessonTeacher="MC"/>
        <Lesson lessonNumber="6" lessonSubject="Podstawy konstrukcji" lessonGroup="A1" lessonClass="16" lessonTeacher="PM"/>
        <Lesson lessonNumber="7" lessonSubject="J. Angielski" lessonGroup="A1" lessonClass="59"/>
        <Lesson lessonNumber="7" lessonSubject="J. Angielski" lessonGroup="A2" lessonClass="42"/>
        <Lesson lessonNumber="7" lessonSubject="J. Angielski" lessonGroup="A3" lessonClass="24"/>
        <Lesson lessonNumber="7" lessonSubject="J. Angielski" lessonGroup="A4" lessonClass="44"/>
        <Lesson lessonNumber="8" lessonSubject="WF" lessonGroup="1" lessonClass="sg1" lessonTeacher="SJ"/>
        <Lesson lessonNumber="8" lessonSubject="WF" lessonGroup="2" lessonClass="sg3"/>
      </Day>
    </Layout>
  );
}

export default Class2ba;
