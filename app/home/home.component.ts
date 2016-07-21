import {Component}  from '@angular/core';
import {CarouselComponent} from './carousel.component';

@Component({
    selector: 'gfr-home',
    templateUrl: 'app/home/home.component.html',
    styles: [`
        .wrapper {
            width: 100%;
        }
    `],
    directives: [CarouselComponent]
})
export class HomeComponent {

}