import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { FIELDS } from "./formFields";
import { submitSurvey } from "../../reducers/authReducer";

const SurveyReview = ({ onBack }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    surveyForm: { values },
  } = useSelector((store) => store.form);

  const reviewFields = FIELDS.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{values[name]}</div>
      </div>
    );
  });

  const submitReviewedForm = () => {
    dispatch(submitSurvey(values));
    history.push("/surveys");
  };

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        type="button"
        className="btn-flat left yellow darken-3 white-text"
        onClick={onBack}
      >
        <i className="material-icons">arrow_back_ios</i>
        Back
      </button>
      <button
        onClick={submitReviewedForm}
        className="teal btn-flat white-text right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

export default SurveyReview;
