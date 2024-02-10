import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive]
})
export class MenuBarComponent {
}
