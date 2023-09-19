var rxjs=require('rxjs');

let mydataStream$ = rxjs.interval(2000);

mydataStream$.subscribe((data)=>console.log(data))

mydataStream$.subscribe(data=>setTimeout(()=>console.log('sub 2',data),5000));
