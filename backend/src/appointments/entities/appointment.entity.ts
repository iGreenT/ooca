import { Provider } from 'src/providers/entities/provider.entity';
import { Users } from 'src/users/entities/users.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  ManyToMany
} from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default: 1})
  status_id: number;

  @Column({ type: "int", width: 11})
  provider_id: number;

  @Column({ type: "int", width: 11})
  user_id_requet: number;

  @Column({ type: 'datetime'})
  date_time_request: Date

  @CreateDateColumn({ type: 'timestamp' })
  created: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  modified: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted: Date;

  @ManyToMany(() => Provider, (provider) => provider.id)
  provider: Provider;

  @ManyToMany(() => Users, (user) => user.id)
  user: Users[];
}
