import { heroes } from "../data/heroes";

export const promiseComponent = (element) => {
  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
      `;
  };

  const renderError = (error) => {
    element.innerHTML = `
        <h1 style="color: red;">Error: </h1>
        <h3 style="color: red;">${error}</h3>
    `;
  };

  const id1 = "5d86371f25a058e5b1c8a65e";
  const id2 = "5d86371f1efebc31def272e2";
  //   findHero(id1).then((superHero) => renderHero(superHero));
  // * Más limpio y claro
  //  * findHero(id1).then(renderHero).catch(renderError);

  // * Promise Hell
  // *  findHero(id1)
  // *    .then((hero1) => {
  // *      findHero(id2)
  // *        .then((hero2) => {
  // *          renderTwoHeroes(hero1, hero2);
  // *        })
  // *        .catch(renderError);
  // *    })
  // *    .catch(renderError);

  // * Se puede mejorar así el Promise Hell. Requisito: promesas independientes
  // * let hero1;
  // * findHero(id1)
  // *   .then((hero) => {
  // *     hero1 = hero;
  // *     return findHero(id2);
  // *   })
  // *   .then((hero2) => {
  // *     renderTwoHeroes(hero1, hero2);
  // *   })
  // *   .catch(renderError);

  // * Promise.all. Requisito: promesas independientes
  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError);
};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */

const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);
    if (hero) {
      resolve(hero);
      return;
    }
    reject(`Hero with id ${id} not found`);
  });
};
