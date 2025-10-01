export const checkValidData = (name, email, password, isSignInForm) => {
  const isNameValid = !isSignInForm ? /^[A-Za-z ]{3,}$/.test(name) : true;
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isNameValid) return "Name is not valid (min 3 letters, alphabets only)";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
