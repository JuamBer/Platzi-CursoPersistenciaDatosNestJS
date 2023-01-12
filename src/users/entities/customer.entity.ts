import { AuditFields } from 'src/common/audit-fields';
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Customer extends AuditFields {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @OneToOne(() => User, (user) => user.customer, { nullable: true })
  user: User;
}
