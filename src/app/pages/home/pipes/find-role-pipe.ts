import { Pipe, PipeTransform } from '@angular/core';
import { UserRoleProgress } from '../../../models/user-role-progress';

@Pipe({
  name: 'findRole'
})
export class FindRolePipe implements PipeTransform {
  transform(roles: UserRoleProgress[], id: number): any {
    return roles?.find(item => item.role.id === id);
  }
}
