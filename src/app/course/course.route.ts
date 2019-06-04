import { Routes } from '@angular/router';
import { CourseComponent } from './all-course/course.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { QuizComponent } from './quiz/quiz.component';
import { AllQuizComponent } from './quiz/allquiz/allquiz.component';

export const CourseRoute: Routes = [
    {path : 'courses', component: CourseComponent},
    {path : 'chapters', component: ChaptersComponent},
    {path : 'allquiz', component: AllQuizComponent},
    {path : 'quiz/:quizIndex', component: QuizComponent},

];
