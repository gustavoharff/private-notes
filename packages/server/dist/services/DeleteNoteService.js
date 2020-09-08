"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Note = _interopRequireDefault(require("../models/Note"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteNoteService {
  async execute(id) {
    const notesRepository = (0, _typeorm.getRepository)(_Note.default);
    await notesRepository.delete(id);
  }

}

var _default = DeleteNoteService;
exports.default = _default;