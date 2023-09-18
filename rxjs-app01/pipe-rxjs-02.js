var rxjs=require('rxjs');
var of=rxjs.of;

let dataStream$=of("james","peter","shantanu","rajendra","mounica");

dataStream$
.pipe(
        rxjs.filter(x=>x.length>7),
        rxjs.map(x=>x+" Welcome to RxJs"))
        .subscribe((data)=>console.log(data));


let intervalStream$=rxjs.interval(1000);

intervalStream$.subscribe((x)=>console.log(x))