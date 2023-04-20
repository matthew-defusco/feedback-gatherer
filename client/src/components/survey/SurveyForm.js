import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import { validateEmails } from "../../utils/validateEmails";
import { FIELDS } from "./formFields";
import SurveyField from "./SurveyField";

const SurveyForm = (props) => {
  const renderFields = () => {
    return FIELDS.map(({ name, label }, i) => {
      return (
        <Field
          name={name}
          label={label}
          key={i}
          component={SurveyField}
          type="text"
        />
      );
    });
  };

  return (
    <div>
      <form
        onSubmit={props.handleSubmit(props.onNext)}
        style={{ marginTop: "20px" }}
      >
        {renderFields()}
        <Link to="/surveys" className="btn-flat left red white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value.`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  destroyOnUnmount: false,
  form: "surveyForm",
})(SurveyForm);
