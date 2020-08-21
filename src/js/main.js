import MainSlider from './modules/slider/mainSlider'; 
import MiniSlider from './modules/slider/miniSlider';
import VideoPlayer from './modules/videoPlayer';
import Difference from './modules/difference';
import Forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({btns: '.next', container: '.page'});
    slider.render();

    const showupSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showupSlider.init();

    const moduleSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });

    moduleSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });

    feedSlider.init();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Forms('.form').init();
});