import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
