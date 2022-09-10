import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('customers')
class Customer {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    // unique: true,
  })
  public email: string;

  @Column()
  public password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

export default Customer;
