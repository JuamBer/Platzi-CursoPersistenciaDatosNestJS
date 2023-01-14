import { User } from './user.entity';
import { Product } from './../../products/entities/product.entity';
import { AuditFields } from 'src/common/audit-fields';
import { Customer } from './customer.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderItem } from './order-product.entity';

@Entity()
export class Order extends AuditFields {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.customer)
  customer: Customer;

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[];
}
