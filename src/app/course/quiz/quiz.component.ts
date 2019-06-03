import { Component } from '@angular/core';
import { Quiz } from '../course';

@Component({
    templateUrl:"quiz.component.html"
})
export class QuizComponent{
    quiz:Quiz[];
    index:number;

    
}