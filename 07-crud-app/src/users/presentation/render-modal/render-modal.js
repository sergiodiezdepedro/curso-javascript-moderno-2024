import "./render-modal.css";
import modalHTML from "./render-modal.html?raw";

let modal, form;

export const showModal = () => {
  modal?.classList.remove("hide-modal");
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");
  form?.reset();
};

/**
 *
 * @param {HTMLDivElement} element
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = (element, callback) => {
  modal = document.createElement("div");
  modal.innerHTML = modalHTML;
  modal.classList.add("modal-container", "hide-modal");
  form = modal.querySelector("form");

  modal.addEventListener("click", (event) => {
    if (event.target.className === "modal-container") {
      hideModal();
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    if (!formData.get("isActive")) {
      formData.append("isActive", "off");
    }
    
    const userLike = {};
    for (const [key, value] of formData) {
      if (key === "balance") {
        userLike[key] = Number(value);
        continue;
      }

      if (key === "isActive") {
        userLike[key] = value === "on" ? true : false;
        continue;
      }
      userLike[key] = value;
    }
    // console.log(userLike);
    await callback(userLike);
    hideModal();
  });

  element.append(modal);
};
