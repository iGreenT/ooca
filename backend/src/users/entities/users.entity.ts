import { Appointment } from 'src/appointments/entities/appointment.entity';
import { Company } from 'src/companies/entities/company.entity';
import { UserType } from 'src/user_types/entities/user_type.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  ManyToMany,
  OneToMany
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ type: "int", width: 2 })
  user_type_id: number;

  @Column({ type: "int", width: 11 })
  company_id: number;

  @Column({default: 0})
  isDeleted: boolean;

  @Column({ type: "int", width: 11, default: 0})
  created_by_user_id: number;

  @CreateDateColumn({ type: 'timestamp' })
  created: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  modified: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted: Date;

  @ManyToOne(() => Company, (company) => company.id)
  company: Company;

  @ManyToMany(() => Appointment, (appointment) => appointment.user_id_requet)
  appointments: Appointment[];

  @OneToMany(() => UserType, (userType) => userType.id)
  userType: UserType;

}