/**
 *
 * @param {user} users
 * @param {Already Logged user} userLoggedIn
 * @returns users email.
 */

const getRecipientEmail = (users, userLoggedIn) =>
  users?.filter((userToFilter) => userToFilter !== userLoggedIn?.email)[0];

export default getRecipientEmail;
