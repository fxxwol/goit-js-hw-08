// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery')

const makeGalleryItemMarkup = ({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image lazyload" loading="lazy" src="${preview}" alt="${description}" />
   </a>
</li>`

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('')
gallery.innerHTML = makeGalleryMarkup

const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});
