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

let lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});
