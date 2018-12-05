module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define('Appointments', {
    date: DataTypes.DATE
  })

  Appointments.associate = models => {
    Appointments.belongsTo(models.User, { foreignKey: 'userId' })
    Appointments.belongsTo(models.User, { foreignKey: 'providerId' })
  }

  return Appointments
}
