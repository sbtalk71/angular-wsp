var rxjs=require('rxjs');
var Subject=rxjs.Subject;

let subjectData$=new Subject();

subjectData$.subscribe((data)=>console.log("A Got data ",data));


subjectData$.subscribe((data)=>setTimeout(()=>console.log("B Got data ",data),5000));

const myObservable$=rxjs.interval(2000);

myObservable$.subscribe(subjectData$);