export class CreateUserDto {
  id: number;
  username: string;
  password: string;
  name: string;
  user_type_id: number;
  isDeleted: boolean|null;
  created_by_user_id: number|null;
}
