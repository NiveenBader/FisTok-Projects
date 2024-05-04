class Gallery {


    constructor(elemId, ...images) {
        const galleryElem = document.getElementById(elemId);
        console.log(galleryElem, images);
    }
}

const gallery1 = new Gallery("gallery1", "(1).jpg", "(2).jpg", "(3).jpg", "(4).jpg");
const gallery2 = new Gallery("gallery1", "(5).jpg", "(6).jpg", "(7).jpg", "(8).jpg");
const gallery3 = new Gallery("gallery1", "(9).jpg", "(10).jpg", "(11).jpg", "(12).jpg"); 