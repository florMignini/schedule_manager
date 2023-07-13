import { Field, ObjectType } from '@nestjs/graphql';
import { Employee } from 'src/employees/entities/employee.entity';

@ObjectType()
export class AuthResponse {
  @Field(() => String)
  accessToken: string;
  @Field(() => Employee)
  employee: Employee;
}
