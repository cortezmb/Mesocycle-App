# --name is table name
# --attributes are column names of tables
# sequelize model:generate --name abs --attributes exercise:string,link:string

# sequelize model:generate --name biceps --attributes exercise:string,link:string

# sequelize model:generate --name calves --attributes exercise:string,link:string

# sequelize model:generate --name chest_isolation --attributes exercise:string,link:string

# sequelize model:generate --name front_delts --attributes exercise:string,link:string

# sequelize model:generate --name glute --attributes exercise:string,link:string

# sequelize model:generate --name hamstring_hip_hinge --attributes exercise:string,link:string

# sequelize model:generate --name hamstring_isolation --attributes exercise:string,link:string

# sequelize model:generate --name horizontal_pull --attributes exercise:string,link:string

# sequelize model:generate --name horizontal_push --attributes exercise:string,link:string

# sequelize model:generate --name horizontal_triceps --attributes exercise:string,link:string

# sequelize model:generate --name incline_push --attributes exercise:string,link:string

# sequelize model:generate --name quad --attributes exercise:string,link:string

# sequelize model:generate --name rear_delts --attributes exercise:string,link:string

# sequelize model:generate --name side_delts --attributes exercise:string,link:string

# sequelize model:generate --name traps --attributes exercise:string,link:string

# sequelize model:generate --name triceps --attributes exercise:string,link:string

# sequelize model:generate --name vertical_pull --attributes exercise:string,link:string

# sequelize model:generate --name vertical_triceps --attributes exercise:string,link:string

# sequelize model:generate --name rear_or_side_delts --attributes exercise:string,link:string

# sequelize model:generate --name incline_push_or_front_delts --attributes exercise:string,link:string

# sequelize model:generate --name chest_isolation_or_triceps --attributes exercise:string,link:string

sequelize model:generate --name day_one_exercises --attributes user:integer,exercise:string,weight:integer

sequelize model:generate --name users --attributes firstName:string,lastName:string,email:string,pwHex:string