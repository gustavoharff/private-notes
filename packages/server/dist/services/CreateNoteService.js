"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Note = _interopRequireDefault(require("../models/Note"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateNoteService {
  async execute({
    title,
    content,
    user
  }) {
    const notesRepository = (0, _typeorm.getRepository)(_Note.default);
    const note = notesRepository.create({
      title,
      content,
      user_id: user
    });
    await notesRepository.save(note);
    return note;
  }

}

var _default = CreateNoteService;
exports.default = _default;