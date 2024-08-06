import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */

export const asyncAwaitComponent = async (element) => {
  const id1 = "5d86371f2343e37870b91ef1";
  const id2 = "5d86371f1efebc31def272e2";

  try {
    const hero1 = await findHero(id1);
    const hero2 = await findHero(id2);
    element.innerHTML = `${hero1.name} / ${hero2.name}`;
  } catch (error) {
    element.innerHTML = error;
  }

  //   const { name: name1 } = await findHero(id1);
  //   const { name: name2 } = await findHero(id2);
  //   element.innerHTML = `${name1} / ${name2}`;
};

const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id == id);
  if (!hero) throw `Hero not found`;
  return hero;
};
