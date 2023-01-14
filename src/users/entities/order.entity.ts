import { User } from './user.entity';
import { Product } from './../../products/entities/product.entity';
import { AuditFields } from 'src/common/audit-fields';
import { Customer } from './customer.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderItem } from './order-product.entity';
import { Exclude, Expose } from 'class-transformer/types/decorators';

@Entity()
export class Order extends AuditFields {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.customer)
  customer: Customer;

  @OneToMany(() => OrderItem, (item) => item.order)
  @Exclude()
  items: OrderItem[];

  @Expose()
  get products() {
    if (this.items) {
      return this.items
        .filter((item) => !!item)
        .map((item) => ({
          ...item.product,
          quantity: item.quantity,
          itemId: item.id,
        }));
    }
    return [];
  }

  @Expose()
  get total() {
    if (this.items) {
      return this.items
        .filter((item) => !!item)
        .reduce((total, item) => {
          const totalItem = item.product.price * item.quantity;
          return total + totalItem;
        }, 0);
    }
    return 0;
  }
}
