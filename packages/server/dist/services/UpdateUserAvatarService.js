"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _AppError = _interopRequireDefault(require("../errors/AppError"));

var _upload = _interopRequireDefault(require("../config/upload"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateUserAvatarService {
  async execute({
    user_id,
    avatarFilename
  }) {
    const usersRepository = (0, _typeorm.getRepository)(_User.default);
    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new _AppError.default('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = _path.default.join(_upload.default.directory, user.avatar);

      const userAvatarFileExists = await _fs.default.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await _fs.default.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;
    await usersRepository.save(user);
    return user;
  }

}

var _default = UpdateUserAvatarService;
exports.default = _default;