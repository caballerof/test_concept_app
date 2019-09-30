/**
 * Function to work with the DB.
 */
import { FB, authFB } from '../../config/config';

/**
 * `async function`, Login user.
 * @param {Object} { email, password }
 * @param {String} email a valid email, it will be used to log into the app.
 * @param {string} password to login into the app.
 */
export const loginUser = async ({ email, password }) => {
  const user = {
    isLogged: false,
    info: null,
  };
  if (!(email && password)) return user;

  try {
    const response = await authFB.signInWithEmailAndPassword(email, password);
    user.isLogged = true;
    user.info = response;
    return user;
  } catch (error) {
    throw new Error(error);
  }
}; // End loginUser

/**
 * `async function` Logout the current user.
 * @returns `true` If the logout was correct in otherwise it throw an `Error`.
 */
export const logOutUser = async () => {
  try {
    await authFB.signOut();
    return true;
  } catch (error) {
    throw new Error(error);
  }
}; // End logOutUser

/**
 * Get the current user login in the server.
 * @returns `Object user` if the user is logged in otherwise
 */
export const getCurrentUserLogin = () => {
  FB.auth().onAuthStateChanged((user) => {
    if (user) {
      return user;
    }
    return null;
  });
}; // End getCurrentUserLogin

/**
 * `async function`, Register a new user in the DB.
 * @param {Object} { email, password }
 * @param {String} email a valid email, it will be used to log into the app.
 * @param {string} password to login into the app.
 * @returns `Object` Result from the server on success in otherwise it throw an `Error`.
 */
const registerUser = async ({ email, password }) => {
  try {
    const response = await authFB.createUserWithEmailAndPassword(
      email,
      password,
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default registerUser;
