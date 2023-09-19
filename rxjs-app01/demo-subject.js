var rxjs=require('rxjs');
var Subject=rxjs.Subject;

let subjectData$=new Subject();

subjectData$.subscribe((data)=>console.log("A Got data ",data));




subjectData$.next(20);
subjectData$.next(30);
subjectData$.next(40);
subjectData$.subscribe((data)=>console.log("B Got data ",data));
subjectData$.next(50);
subjectData$.next(60);
subjectData$.next(70);
