import { Appointment } from 'src/appointments/entities/appointment.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany
} from 'typeorm';

@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({default: 0})
  isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  modified: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted: Date;

  @ManyToMany(() => Appointment, (appointment) => appointment.provider_id)
  appointments: Appointment[]

}
