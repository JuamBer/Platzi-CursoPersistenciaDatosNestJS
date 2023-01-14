import { User } from './user.entity';
import { Product } from '../../products/entities/product.entity';
import { AuditFields } from 'src/common/audit-fields';
import { Customer } from './customer.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderItem extends AuditFields {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Order, (oder) => oder.items)
  order: Order;
}
