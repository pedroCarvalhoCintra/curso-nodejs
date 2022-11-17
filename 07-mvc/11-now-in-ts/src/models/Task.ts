import { Table, Model, Column, DataType } from "sequelize-typescript";


@Table({
    timestamps: false,
    tableName: "Tasks"
})

export class Task extends Model {
    @Column({
        type: DataType.STRING
    })
    title: string
    
    @Column({
        type: DataType.STRING
    })
    description: string

    @Column({
        type: DataType.BOOLEAN
    })
    done: boolean
}