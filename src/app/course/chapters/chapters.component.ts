import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Courses, CourseChapter } from '../course';



@Component({
    templateUrl:"chapters.component.html"
})
export class ChaptersComponent implements OnInit {

    constructor(private courseService: CourseService,
        private route: ActivatedRoute) { }

        course:Courses[];

    ngOnInit(): void {
     this.course = JSON.parse(localStorage.getItem("course"));  
    }
}