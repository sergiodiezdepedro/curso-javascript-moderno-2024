import userStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import "./render-buttons.css";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderButtons = (element) => {
  const nextButton = document.createElement("button");
  nextButton.innerText = " Next >";

  const previousButton = document.createElement("button");
  previousButton.innerText = "< Prev ";

  const currentPagelabel = document.createElement("span");
  currentPagelabel.id = "current-page";
  currentPagelabel.innerText = userStore.getCurrentPage();

  element.append(previousButton, currentPagelabel, nextButton);

  nextButton.addEventListener("click", async () => {
    await userStore.loadNextPage();
    currentPagelabel.innerText = userStore.getCurrentPage();
    renderTable(element);
  });

  previousButton.addEventListener("click", async () => {
    await userStore.loadPreviousPage();
    currentPagelabel.innerText = userStore.getCurrentPage();
    renderTable(element);
  });
};
