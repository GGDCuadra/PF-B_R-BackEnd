const { Router } = require('express');
const reportsRouter = require('./reportsRouter');
const router = Router();
const sessionRouter = require('./sessionRouter.js');
const facebookRouter = require('../controllers/sessionControllers/facebookAuthController');
const googleRouter = require('../controllers/sessionControllers/googleAuthController')
const usersRouter = require('./usersRouter.js');
const commentsRouter = require('./commentsRouter');
// Aquí debes proporcionar una función de middleware válida para cada ruta
router.use('/session', sessionRouter);

// router.use('/auth/facebook', facebookRouter);

// router.use('/auth/google', googleRouter);

router.use('/users', usersRouter);

router.use('/reports', reportsRouter);

router.use('/donations', (req, res, next) => {
  // Tu middleware para /donations
  next();
});

router.use('/comments', commentsRouter);


module.exports = router;
