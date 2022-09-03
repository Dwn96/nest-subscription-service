import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Customer {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public email: string;
}

export default Customer;
