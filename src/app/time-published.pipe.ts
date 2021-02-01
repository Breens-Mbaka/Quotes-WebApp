import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePublished'
})
export class TimePublishedPipe implements PipeTransform {

  transform(value: Date): number {
    let today:Date = new Date(); //get current date and time
    let timeToday:any = new Date(today.getHours(), today.getMinutes())
    return timeToday;
  }

}
