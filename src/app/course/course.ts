export class Course{
    courseName:string;
    courseId:number;
    chapters:Chapter[];
}

export class Chapter{
    chapterName:string;
    chapterId:number;
    topics:Topic[];
}

export class Topic{
    topicName:string;
    topicId:number;
    notes:string;
}

export class Quiz{
    question:string;
    option1:string;
    option2:string;
    option3:string;
    option4:string;
    answer:string;
}