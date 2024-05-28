import H2Component from './component/h2.component.js';
import ButtonComponent from './component/button.component.js';

export default class ImageCarousel {
    constructor(images) {
        this.images = images;
        this.currentImageIndex = 0;

        this.element = this.createCarouselElement();
        this.updateImage();
    }

    createCarouselElement() {
        const carouselContainer = document.createElement('div');
        carouselContainer.classList.add('flex', 'flex-col', 'items-center');

        const h2 = new H2Component({ id: 'carousel-title', text: 'Image Carousel' });
        carouselContainer.appendChild(h2.getElement());

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('rounded-lg', 'my-4', 'bg-white', 'shadow-md', 'p-4');
        
        const imageElement = document.createElement('img');
        imageElement.classList.add('max-w-full', 'h-auto', 'max-h-60');
        imageContainer.appendChild(imageElement);

        carouselContainer.appendChild(imageContainer);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('flex', 'justify-between', 'w-full', 'mt-4');

        const buttonPrev = new ButtonComponent({
            type: 'click',
            text: 'Previous',
            onClickHandler: () => this.prevImage()
        });
        buttonPrev.element.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded-md', 'hover:bg-blue-600', 'focus:outline-none');
        buttonContainer.appendChild(buttonPrev.getElement());

        const buttonNext = new ButtonComponent({
            type: 'click',
            text: 'Next',
            onClickHandler: () => this.nextImage()
        });
        buttonNext.element.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded-md', 'hover:bg-blue-600', 'focus:outline-none');
        buttonContainer.appendChild(buttonNext.getElement());

        carouselContainer.appendChild(buttonContainer);

        return carouselContainer;
    }

    updateImage() {
        const imageElement = this.element.querySelector('img');
        imageElement.src = this.images[this.currentImageIndex];
    }

    prevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }

    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.updateImage();
    }

    getElement() {
        return this.element;
    }
}