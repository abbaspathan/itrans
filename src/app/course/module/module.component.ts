import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Courses, CourseChapter, ChapterModule } from '../course';


@Component({
    templateUrl:"module.component.html"
})
export class ModuleComponent implements OnInit {

    constructor(private courseService: CourseService,
        private route: ActivatedRoute) { }

        course:Courses;
        chapters:CourseChapter[]
        modules:ChapterModule[];
        module:ChapterModule;
        count=1;
     ngOnInit(): void {
  
this.route.paramMap.subscribe((map) =>{
   let chapterId = Number(map.get("chapterId"));
   let moduleId = Number(map.get("moduleId"));

   console.log(chapterId+""+moduleId)
   this.courseService.getCourseById().subscribe((data) =>{
       this.course = data;
        this.chapters = this.course.courseChapter;
        
        let count = 1;  
       for(let i =0;i<this.chapters.length;i++){
           this.modules = this.chapters[0].chapterModule;
            for(let j = 0;j<this.modules.length;j++){
                count++;
            }
        }
        console.log(this.course)
        this.module = this.chapters[chapterId].chapterModule[moduleId];
        console.log(this.module)

   })
})



    }
}