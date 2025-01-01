import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    //Unique,
} from 'typeorm';

export enum UserRole {
    ADMIN = 'admin',
    USER = 'USER',
}
@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    firstName: string;

    //@Column({ length: 50 })
    //lastName: string;

    //@Column({ length: 50 })
    //email: string;

    //@Column({ length: 50, unique: true })
    //username: string;

    //@Column({ length: 50 })
    //password: string;

    //@Column({ length: 50 })
    //address: string;

    //@Column({ type: 'int' })
    //age: number;

    //@Column({
    //    type: 'enum',
    //    enum: UserRole,
    //    default: UserRole.USER,
    //})
    //permission: UserRole;

    // @ManyToOne((type) => Category, (category) => category.children)
    // parent: Category

    // @OneToMany((type) => Category, (category) => category.parent)
    // children: Category[]

    @OneToMany(() => Photo, (photo) => photo.user)
    photos: Photo[];
}
@Entity()
//@Unique(['user'])
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => User, (user) => user.photos, { nullable: false })
    user: User;
}
