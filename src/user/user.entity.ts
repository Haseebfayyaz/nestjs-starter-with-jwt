import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity("users")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { name: "first_name", nullable: true, length: 100 })
    first_name: string | null;

    @Column("varchar", { name: "last_name", nullable: true, length: 100 })
    last_name: string | null;

    @Column("varchar", { name: "password", nullable: false, length: 255 })
    password: string;

    @Column("varchar", { name: "email", nullable: true, length: 255 })
    email: string | null;
}
