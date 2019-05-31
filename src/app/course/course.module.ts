import { NgModule } from '@angular/core';
import { CourseComponent } from './all-course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CourseRoute } from './course.route';

@NgModule({
    declarations: [
        CourseComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(CourseRoute),
        BrowserAnimationsModule,
        MatProgressBarModule,
    ],
    exports: [
        CourseComponent
    ]
})
export class CourseModule {
}
