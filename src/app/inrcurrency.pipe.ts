
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrcurrency'
})
export class InrcurrencyPipe implements PipeTransform {

  transform(value: number): string {
    if (value) {
      // const result = value.toString().split('.');
      // let lastThree = result[0].substring(result[0].length - 3);
      // const otherNumbers = result[0].substring(0, result[0].length - 3);
      // if (otherNumbers != '' && otherNumbers != '-')
      //   lastThree = ',' + lastThree;
      // let output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      // if (result.length > 1) {
      //   output += "." + result[1];
      // }
      // return "₹" + output;
      //venmani changed 07-1-2021
     // console.log(Number(value))
     // console.log((Number(value)).toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,'))
    // console.log(value);
   //  console.log(isNaN(value))
     if (isNaN(value)){
       return value.toString();
     } else{
      return "₹" + (Number(value)).toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,')
     }
      
      //venmani changed 07-1-2021
    //   return Number(value).toLocaleString('en-IN', {
    //     maximumFractionDigits: 2,
    //     style: 'currency',
    //     currency: 'INR'
    // });
    }
    else {
      return "₹"+value;
    }
  }

}