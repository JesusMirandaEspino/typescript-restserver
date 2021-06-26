import  {  Sequelize  } from  'sequelize';

const db = new Sequelize( 'node', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
      //login: false
} );


export default db;