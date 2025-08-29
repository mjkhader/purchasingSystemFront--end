export default function Input({label, id,...props}) {
  return (
    <div className="control no-margin">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        {...props}
        onBlur={() => handleInputBlur("email")}
        onChange={(event) => handleInputChange("email", event.target.value)}
        value={enteredValues.email}
      />
      <div className="control-error">
        {emailIsInvalid && <p>please enter a valid email address.</p>}
      </div>
    </div>
  );
}
