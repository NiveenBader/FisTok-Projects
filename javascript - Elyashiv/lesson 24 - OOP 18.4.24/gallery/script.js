class Gallery {
    imager = [];
    imgElem = document.createElement("img");
    currentImage = 0;


    constructor(elemId, ...imagesArr) {
        const galleryElem = document.getElementById(elemId);
        this.images = imagesArr;

        galleryElem.appendChild(this.imgElem);
        this.showImage();
        this.imgElem.addEventListener("click", () => this.nextImage());

    }

    nextImage() {
        this.currentImage++;

        if (this.currentImage >= this.images.length) {
            this.currentImage = 0;
        }
        this.showImage();
    }

    showImage() {
        this.imgElem.src = `./images/${this.images[this.currentImage]}`;
    }
}

new Gallery("gallery", "(1).jpg", "(2).jpg", "(3).jpg", "(4).jpg");
new Gallery("gallery", "(5).jpg", "(6).jpg", "(7).jpg", "(8).jpg");
new Gallery("gallery", "(9).jpg", "(10).jpg", "(11).jpg", "(12).jpg");
new Gallery("gallery", "(13).jpg", "(14).jpg", "(15).jpg", "(16).jpg");
