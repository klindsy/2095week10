import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actorBirthYearAge'
})
export class ActorBirthYearAgePipe implements PipeTransform {

  transform(birthDate: Number): number {
    let age: number;
    let currentDate: Date =  new Date();

    let birthYear: number = Number(birthDate);
    let currentyear: number = Number(currentDate.getFullYear());

    age = currentyear - birthYear;

    return age;
  }

}