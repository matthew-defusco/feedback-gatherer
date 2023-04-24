import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSurveys } from "../reducers/surveyReducer";
import { useEffect } from "react";
import SurveyList from "./survey/SurveyList";

const Dashboard = () => {
  // const dispatch = useDispatch();
  // const { surveys } = useSelector((store) => store.surveys);

  // useEffect(() => {
  //   dispatch(getSurveys());
  // }, []);

  // const renderContent = () => {
  //   if (surveys) {
  //     console.log(surveys);
  //     return surveys.map((survey) => {
  //       return <div key={survey._id}>{survey.title}</div>;
  //     });
  //   }
  // };

  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
