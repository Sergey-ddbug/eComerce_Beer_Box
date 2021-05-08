const User = require('./User');
const Sub = require('./Sub');

User.hasMany(Sub, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Sub.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Sub };
