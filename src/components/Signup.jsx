import { useActionState } from "react";
import { useSignUpMutation } from "../data/user";
import {
  hasMinLength,
  isEmail,
  isNotEmpty
} from "../util/validation";

export default function Signup() {
  const [onSubmit, res] = useSignUpMutation()

  async function signupAction(prevFormState, formData) {
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");

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
          username,
          password,
          firstName,
          lastName,
        },
      };
    }
    await onSubmit({email, username, password, firstname: firstName, lastname: lastName})
    console.log(res)
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
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          defaultValue={formState.enteredValues?.username}
        />
      </div>

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
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            defaultValue={formState.enteredValues?.firstName}
          />
        </div>

        <div className="control">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
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
