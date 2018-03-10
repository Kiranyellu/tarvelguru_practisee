import {Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
    selector:'[resctrict]'
})

export class restrictCharacter{
 
    constructor(private ele:ElementRef){
        console.log(ele.nativeElement);
    }
    @Input()
    RestrictExpression: any;
    @HostListener('keypress',['$event'])
    onkeypress(evt){
        console.log("Hey I am active");
        let regexForNumber = new RegExp(this.RestrictExpression);
        if(regexForNumber.test(evt.key)){
            this.ele.nativeElement.style=""
        }else{
            this.ele.nativeElement.style="border-color:red"
            evt.preventDefault();
        }
    }
}