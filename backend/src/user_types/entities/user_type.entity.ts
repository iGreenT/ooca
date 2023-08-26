import { Users } from 'src/users/entities/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

/**
 * set default
 * id 1 : Admin
 * id 2 : client
 */

@Entity()
export class UserType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Users, (users) => users.user_type_id)
  user: Users[];
}
