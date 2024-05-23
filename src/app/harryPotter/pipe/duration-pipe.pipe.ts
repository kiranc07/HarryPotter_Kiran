import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe',
})
export class DurationPipePipe implements PipeTransform {

  transform(minutes?: number): string {
    let finalDuration='';
    if(minutes){
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;

      if (hours > 0) {
        finalDuration += `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
      }

      if (remainingMinutes > 0) {
        if (finalDuration !== '') {
          finalDuration += ' and ';
        }
        finalDuration += `${remainingMinutes} ${remainingMinutes === 1 ? 'minute' : 'minutes'}`;
      }
    }

    return finalDuration !== '' ? finalDuration : '0 min';
  }

}
