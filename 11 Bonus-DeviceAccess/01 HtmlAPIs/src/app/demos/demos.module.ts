import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NgxVibrationModule } from 'ngx-vibration';
import { WebcamModule } from 'ngx-webcam';
import { MaterialModule } from '../material.module';
import { SkillsService } from '../model/skills/skills.service';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { CameraComponent } from './samples/camera/camera.component';
import { GeolocationComponent } from './samples/geolocation/geolocation.component';
import { LocalStorageComponent } from './samples/local-storage/local-storage.component';
import { VibrationComponent } from './samples/vibration/vibration.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'camera', component: CameraComponent },
      { path: 'geolocation', component: GeolocationComponent },
      { path: 'vibration', component: VibrationComponent },
      { path: 'localstorage', component: LocalStorageComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    CameraComponent,
    GeolocationComponent,
    VibrationComponent,
    LocalStorageComponent
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    WebcamModule,
    NgxVibrationModule
  ],
  providers: [DemoService, SkillsService]
})
export class DemosModule {}
