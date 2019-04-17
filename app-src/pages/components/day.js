const Day = (props) => {
  const state = {
    dayNumber: () => {
      switch(props.dayNumber) {
        case "1":
          return "Poniedziałek";
        case "2":
          return "Wtorek";
        case "3":
          return "Środa";
        case "4":
          return "Czwartek";
        case "5":
          return "Piątek";
        case "6":
          return "Sobota";
        case "7":
          return "Niedziela";
        default:
          return "Podałeś zły dzień tygodnia";
      }
    }
  };
  return(
    <div className="Day">
      <style jsx>{`
        .Day {
          margin-bottom: 15px;
        }
        .Day:last-child {
          margin-bottom: 0;
        }
        .DayLessons {
          margin-top: 5px;
        }
      `}</style>
      <h3>{ state.dayNumber() }</h3>
      <div className="DayLessons">
        { props.children }
      </div>
    </div>
  );
}

export default Day;
