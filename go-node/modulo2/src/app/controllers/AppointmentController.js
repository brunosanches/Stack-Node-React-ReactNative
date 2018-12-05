const { User } = require('../models')

class AppointmentController {
  async create (req, res) {
    const provider = await User.findByPk(req.params.provider)
    return res.render('appintments/create', { provider })
  }
}

module.exports = new AppointmentController()
