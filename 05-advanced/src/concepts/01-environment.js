/**
 *
 * @param {HTMLDivElement} element
 */

export const environmentsComponent = (element) => {
    console.log(import.meta.env);
  const html = `
       <p>DEV: ${import.meta.env.DEV}</p>
       <p>PROD: ${import.meta.env.PROD}</p>
       <p>APIKey: ${import.meta.env.VITE_API_KEY}</p>
       <p>Base URL: ${import.meta.env.VITE_BASE_URL}</p>
    `;
  element.innerHTML = html;
};
