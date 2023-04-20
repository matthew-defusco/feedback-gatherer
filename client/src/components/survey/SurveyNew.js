import { useState } from "react";
import { reduxForm } from "redux-form";

import SurveyForm from "./SurveyForm";
import SurveyReview from "./SurveyFormReview";

const SurveyNew = () => {
  const [showReview, setShowReview] = useState(false);

  const onNextHandler = () => {
    setShowReview(true);
  };

  const onBackHandler = () => {
    setShowReview(false);
  };

  return (
    <div>
      {!showReview && <SurveyForm onNext={onNextHandler} />}
      {showReview && <SurveyReview onBack={onBackHandler} />}
    </div>
  );
};

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
