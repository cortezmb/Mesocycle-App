# --name is table name
# --attributes are column names of tables

# sequelize model:generate --name day_one_exercises --attributes user:integer,exercise:string,weight:integer

sequelize model:generate --name users --attributes firstName:string,lastName:string,email:string,pwHex:string,user_id:integer

# sequelize model:generate --name exercises --attributes exercise:string,link:string,category_id:integer

# sequelize model:generate --name categories --attributes title:string

# sequelize model:generate --name data --attributes exercise:string,weight:integer,user_id:integer,exercise_id:integer,category_id:integer