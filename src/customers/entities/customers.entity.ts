import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Customer {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public country: string;
}

export default Customer;
