module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define('Appointments', {
    date: DataTypes.DATE
  })

  Appointments.associate = models => {
    Appointments.belongsTo(models.User, { foreignKey: 'user_id' })
    Appointments.belongsTo(models.User, { foreignKey: 'provider_id' })
  }

  return Appointments
}
