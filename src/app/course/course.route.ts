import { Routes } from '@angular/router';
import { CourseComponent } from './all-course/course.component';
import { ChaptersComponent } from './chapters/chapters.component';

export const CourseRoute: Routes = [
    {path : 'courses', component: CourseComponent},
    {path : 'chapters', component: ChaptersComponent},

];
