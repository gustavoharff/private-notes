"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../config/upload"));

var _CreateUserService = _interopRequireDefault(require("../services/CreateUserService"));

var _UpdateUserAvatarService = _interopRequireDefault(require("../services/UpdateUserAvatarService"));

var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRouter = (0, _express.Router)();
const upload = (0, _multer.default)(_upload.default);
usersRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      email,
      password
    } = request.body;
    const createUser = new _CreateUserService.default();
    const user = await createUser.execute({
      name,
      email,
      password
    });
    return response.json(user);
  } catch (err) {
    return response.status(400).json({
      error: err.message
    });
  }
});
usersRouter.patch('/avatar', _ensureAuthenticated.default, upload.single('avatar'), async (request, response) => {
  const updateUserAvatar = new _UpdateUserAvatarService.default();
  const user = await updateUserAvatar.execute({
    user_id: request.user.id,
    avatarFilename: request.file.filename
  });
  delete user.password;
  return response.json(user);
});
var _default = usersRouter;
exports.default = _default;