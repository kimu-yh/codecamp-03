import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn("increment") // Primary Key (고유한 값)
  number!: number;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "integer" })
  price!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date;
}
