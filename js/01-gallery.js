import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryAll = document.querySelector(".gallery");
const galleryCard = galleryItems.map(cardCreate).join("");

galleryAll.insertAdjacentHTML("afterbegin", galleryCard);

function cardCreate({ preview, original, description }) {
	return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
}

galleryAll.addEventListener("click", openModal);

function openModal(event) {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
		return;
	}
	const modalAppearence = basicLightbox.create(`<div class="modal">
  <img src="${event.target.dataset.source}" alt="${event.target.alt}" />
  </div>`);
	modalAppearence.show();

	galleryAll.addEventListener("keydown", event => {
		if (event.code === "Escape") {
			modalAppearence.close();
		}
	});
}
