import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSurveys } from "../../reducers/surveyReducer";

const SurveyList = () => {
  const dispatch = useDispatch();
  const { surveys, isLoading } = useSelector((store) => store.surveys);

  useEffect(() => {
    dispatch(getSurveys());
  }, []);

  const renderContent = () => {
    if (surveys && !isLoading) {
      console.log(surveys);
      return surveys
        .concat()
        .reverse()
        .map((survey) => {
          return (
            <div className="card blue-grey darken-1" key={survey._id}>
              <div className="card-content white-text">
                <span className="card-title">{survey.title}</span>
                <p>{survey.body}</p>
                <p className="right">
                  Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <a>Yes: {survey.yes}</a>
                <a>No: {survey.no}</a>
              </div>
            </div>
          );
        });
    } else {
      return (
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default SurveyList;
