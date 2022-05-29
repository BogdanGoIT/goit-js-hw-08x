// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');

function galleryItem(galleryItems) {
    
    return galleryItems.map(({ description, original, preview }) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
                </a>`
    }).join('');


}

const listPictures = galleryItem(galleryItems);

galleryEl.innerHTML = listPictures;

var lightbox = new SimpleLightbox('.gallery a ', { captionDelay: 250, });
