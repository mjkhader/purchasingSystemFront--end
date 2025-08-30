import { useActionState } from "react";
import {
  isEmail,
  hasMinLength,
  isEqualsToOtherValue,
  isNotEmpty,
} from "../util/validation";
export default function Signup() {
  function signupAction(prevFormState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");

    let errors = [];

    if (!isEmail(email)) {
      errors.push("Invalid email address.");
    }

    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
      errors.push("you must provide a password with at least six characters");
    }



    

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          email,
          password,
          firstName,
          lastName,
        },
      };
    }

    //submit to back-end

    return { errors: null };
  }




  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });



  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={formState.enteredValues?.email}
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={formState.enteredValues?.password}
          />
        </div>

       
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            defaultValue={formState.enteredValues?.firstName}
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            defaultValue={formState.enteredValues?.lastName}
          />
        </div>
      </div>

      {formState.errors && (
        <ul className="error">
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
