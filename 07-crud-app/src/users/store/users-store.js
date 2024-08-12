import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  // * No hay implementado un método para impedir que el contador de páginas siga avanzando al presionarl el botón de 'next', aunque ya no haya más. El código comentadoo es una ñapa que impide avanzar según el número de páginas que hay. Es un número mágico. Si hay un registro más y entonces hay una sexta página, hay que cambiar el '5' por '6', y así sucesivamente.
  // if (state.currentPage === 5) return;
  const users = await loadUsersByPage(state.currentPage + 1);
  if (users.length === 0) return;
  state.currentPage += 1;
  state.users = users;
};

const loadPreviousPage = async () => {
  if (state.currentPage === 1) return;
  const users = await loadUsersByPage(state.currentPage - 1);
  state.users = users;
  state.currentPage -= 1;
};

/**
 *
 * @param {User} updatedUser
 */
const onUserChanged = (updatedUser) => {
  let wasFound = false;

  state.users = state.users.map((user) => {
    if (user.id === updatedUser.id) {
      wasFound = true;
      return updatedUser;
    }
    return user;
  });

  if (state.users.length < 10 && !wasFound) {
    state.users.push(updatedUser);
  }
};

const reloadPage = async () => {
  const users = await loadUsersByPage(state.currentPage);
  if (users.length === 0) {
    await loadPreviousPage();
    return;
  }
  state.users = users;
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users],

  /**
   *
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,
};
