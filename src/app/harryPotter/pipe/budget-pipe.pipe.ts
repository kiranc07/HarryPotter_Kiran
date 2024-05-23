import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budgetPipe',
})
export class BudgetPipePipe implements PipeTransform {

  transform(budget?: string): string {
    if(budget){
      return '$' + budget + ' millions'
    }
    return '';
  }

}
