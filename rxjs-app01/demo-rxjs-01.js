var rxjs=require('rxjs');

let Observable=rxjs.Observable;

let dataStream$=new Observable(subscriber=>{
    subscriber.next("Hello");
    subscriber.next("Good");
    subscriber.next("World");
    setTimeout(()=>{
        subscriber.next("I am last data"),
        subscriber.complete();
    },5000);
    
})

//let subscription=dataStream$.subscribe((x)=>console.log(x));
//subscription.complete(4000);

let observer={
    next:(data)=>console.log(data),
    error:(err)=>console.log(err),
    complete: ()=>console.log("Completed!")
}

dataStream$.subscribe(observer);

