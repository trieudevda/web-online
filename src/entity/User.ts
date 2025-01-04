import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    Unique,
} from 'typeorm';
import dayjs from 'dayjs';

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
}
export enum UserStatus {
    Online = '1',
    Offline = '2',
    Deleted = '0',
}

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: true })
    firstName: string;

    @Column({ length: 50, nullable: true })
    lastName: string;

    @Column({ length: 50, nullable: true })
    nickname: string;

    @Column({ length: 50, unique: true, nullable: false })
    email: string;

    @Column({ unique: true, width: 2, nullable: false })
    phone: number;

    @Column({ length: 50, unique: true, nullable: false })
    username: string;

    @Column({ length: 50, nullable: false })
    password: string;

    @Column({ length: 50, nullable: true })
    address: string;

    @Column({ type: 'date', nullable: true })
    birthday: number;

    @Column({ type: 'date', nullable: false, default: dayjs().format() })
    created_at: Date;

    @Column({ type: 'date', nullable: true })
    updated_at: Date;

    @Column({ type: 'date', nullable: true })
    deleted_at: Date;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    permission: UserRole;

    @Column({ width: 1, default: UserStatus.Online })
    status: number;

    // @ManyToOne((type) => Category, (category) => category.children)
    // parent: Category

    // @OneToMany((type) => Category, (category) => category.parent)
    // children: Category[]

    //@OneToMany(() => Photo, (photo) => photo.user)
    //photos: Photo[];
}
//@Entity()
//@Unique(['user'])
//export class Photo {
//    @PrimaryGeneratedColumn()
//    id: number;

//    @Column()
//    url: string;

//    @ManyToOne(() => User, (user) => user.photos, { nullable: false })
//    user: User;
//}
