import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-role-card',
  imports: [],
  templateUrl: './role-card.html',
  styleUrl: './role-card.css'
})
export class RoleCard {
  @Input() imagem!: string;
  @Input() name!: string;
  @Input() progress?: number;
}
