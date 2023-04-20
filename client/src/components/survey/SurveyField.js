const SurveyField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <p className="red-text" style={{ marginBottom: "28px" }}>
        {touched && error}
      </p>
    </div>
  );
};

export default SurveyField;
