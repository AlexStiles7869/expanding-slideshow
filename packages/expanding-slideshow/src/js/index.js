import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import EmblaCarousel from 'embla-carousel';

// Base required CSS styling
import '../css/expanding-slideshow.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('photoswipe')
});

const emblaNode = document.querySelector('.embla')
const options = { loop: false }
const emblaApi = EmblaCarousel(emblaNode, options)

export { lightbox, emblaApi };

