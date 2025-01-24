import {Sequelize} from "sequelize";
const { DataTypes } = Sequelize;

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./data/database.sqlite",
    logging:false,
    define: {        // Options
        timestamps: false,
    },
});

const Student = sequelize.define(
    "student",
    {
        student_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate:{
                min:4,
                max: 20
            }
        },
        favorite_class: {
            type: DataTypes.STRING(25),
            defaultValue:"Computer Science"
        },
        school_year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        has_language_examination: {
            type: DataTypes.TINYINT,
            defaultValue: true
        },
    },
    {
        // Optional - Options
        freezeTableName: true,
    }

);
Student.sync({alter:true})
.then(() => {
    return Student.bulkCreate([
        {

        name:"jack",
        favorite_class:"maths",
        school_year:2,
        has_language_examination:true
        },
        {

            name:"Steve",
            favorite_class:"reading",
            school_year:3,
            has_language_examination:true
        },
        {

            name:"Jhon",
            favorite_class:"writing",
            school_year:1,
            has_language_examination:false
        },
        {

            name:"Pete",
            school_year:4,
            has_language_examination:false
        },
        {

            name:"David",

            school_year:3,
            has_language_examination:true
        }
    ]);
    
});


Student.findAll({
  attributes: ['name'],

  where: { favorite_class: "Computer Science", has_language_examination: true }
});


Student.findAll({
  attributes: [
    "school_year", 
    [sequelize.fn("COUNT", sequelize.col("name")), "num_students"]
  ],
  group: ["school_year"],
});