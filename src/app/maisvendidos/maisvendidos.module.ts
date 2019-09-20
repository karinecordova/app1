import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaisvendidosPage } from './maisvendidos.page';

const routes: Routes = [
  {
    path: '',
    component: MaisvendidosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MaisvendidosPage]
})
export class MaisvendidosPageModule {}
