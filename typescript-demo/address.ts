export class Address{
    constructor(private doorNo:string, private city:string,private zipcode:number){

    }

    getAddress():string{
        return this.doorNo+" "+this.city+" "+this.zipcode;
    }
}