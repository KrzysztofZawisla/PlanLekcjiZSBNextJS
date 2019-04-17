const Lesson = (props) => {
  const values = {
    lessonSubject: props.lessonSubject == "" || props.lessonSubject == undefined ? "Nie podałeś nazwy przedmiotu" : props.lessonSubject,
    lessonClass: props.lessonClass == "" || props.lessonClass == undefined ? "" : "sala "+props.lessonClass,
    lessonTeacher: props.lessonTeacher == "" || props.lessonTeacher == undefined ? "" : props.lessonTeacher.toUpperCase()
  }
  const functions = {
    lessonNumber: () => {
      switch(props.lessonNumber) {
        case "0":
          return "7:05 - 7:50";
        case "1":
          return "8:00 - 8:45";
        case "2":
          return "8:55 - 9:40";
        case "3":
          return "9:50 - 10:35";
        case "4":
          return "10:45 - 11:30";
        case "5":
          return "11:40 - 12:25";
        case "6":
          return "12:45 - 13:30";
        case "7":
          return "13:40 - 14:25";
        case "8":
          return "14:35 - 15:20";
        case "9":
          return "15:30 - 16:15"
        default:
          return "Podałeś niewłaściwy numer lekcji";
      }
    },
    lessonGroup: () => {
      if(props.lessonGroup == "" || props.lessonGroup == undefined) {
        return null;
      }
      switch(props.lessonGroup.toUpperCase()) {
        case "1":
          return "Gr. 1";
        case "2":
          return "Gr. 2";
        case "3":
          return "Gr. 3";
        case "4":
          return "Gr. 4";
        case "A1":
          return "A1";
        case "A2":
          return "A2";
        case "A3":
          return "A3";
        case "A4":
          return "A4";
        case "A5":
          return "A5";
        case "A6":
          return "A6";
        case "A7":
          return "A7";
        case "A8":
          return "A8";
        default:
          return "";
      }
    }
  }
  return(
    <div className="Lesson">
      <style jsx>{`
        .Lesson {
          padding: 2.5px 0;
          font-size: 14px;
          background: #fafafa;
        }
      `}</style>
      { functions.lessonNumber() } { values.lessonSubject } { functions.lessonGroup() } { values.lessonClass } { values.lessonTeacher }
    </div>
  );
}

export default Lesson;
