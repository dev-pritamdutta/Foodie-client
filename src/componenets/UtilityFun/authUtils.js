// authUtils.js
export const handleGoogleSignIn = (signInMethod, onSuccess) => {
  signInMethod()
    .then((result) => {
      const user = result.user;
      onSuccess(user); // Call the success callback
    })
    .catch((error) => {
      console.error("Error during Google sign-in:", error);
    });
};
