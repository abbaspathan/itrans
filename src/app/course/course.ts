export class Courses{
    courseName:string;
    courseId:number;
    chapters:CourseChapter[];
}

export class CourseChapter{
    chapterName:string;
    chapterId:number;
    modules:ChapterModule[];
}

export class ChapterModule{
    moduleName:string;
    moduleId:number;
    moduleDetails:string;
}

export class Quiz{
    question:string;
    option1:string;
    option2:string;
    option3:string;
    option4:string;
    answer:string;
}