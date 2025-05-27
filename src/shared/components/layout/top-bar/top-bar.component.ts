import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';


@Component({
  selector: 'app-top-bar',
  imports: [NgOptimizedImage, MenubarModule, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule],
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
    },
  ]
}
