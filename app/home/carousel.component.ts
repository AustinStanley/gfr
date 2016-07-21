import {Component} from '@angular/core';
import {Image} from './image.interface';

@Component({
    selector: 'gfr-home-carousel',
    template: `
    <div class="carousel">

      <ul class="slides">

        <li *ngFor="#image of images">
          <img src="{{image.url}}" alt="">
        </li>

      </ul>

    </div>
    `,
    styles: [`
    .carousel {
        overflow: hidden;
        width: 100%;
    }

    .slides {
        list-style: none;
        position: relative;
        width: 500%;
        overflow: hidden;
        -moz-animation: carousel 30s infinite;
        -webkit-animation: carousel 30s infinite;
        animation: carousel 30s infinite;
    }

    .slides > li {
        position: relative;
        float: left;
        width: 20%;
    }

    .carousel img {
        display: block;
        width: 100%;
        max-width: 100%;
    }

    @keyframes carousel {
        0%       { left: -5%; }
        11%      { left: -5%; }
        12.5%    { left: -105%; }
        23.5%    { left: -105%; }
        25%      { left: -205%; }
        36%      { left: -205%; }
        37.5%    { left: -305%; }
        48.5%    { left: -305%; }
        50%      { left: -405%; }
        61%      { left: -405%; }
        62.5%    { left: -305%; }
        73.5%    { left: -305%; }
        75%      { left: -205%; }
        86%      { left: -205%; }
        87.5%    { left: -105%; }
        98.5%    { left: -105%; }
        100%     { left: -5%; }
    }
    `]
})
export class CarouselComponent {
    public images = IMAGES;
}

var IMAGES: Image[] = [
    {url: 'http://placehold.it/1900x1080&text=Slide One'},
    {url: 'http://placehold.it/1900x1080&text=Slide Two'},
    {url: 'http://placehold.it/1900x1080&text=Slide Three'},
    {url: 'http://placehold.it/1900x1080&text=Slide Four'},
    {url: 'http://placehold.it/1900x1080&text=Slide Five'}
];