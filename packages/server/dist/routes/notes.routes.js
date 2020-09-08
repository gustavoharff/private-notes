"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _typeorm = require("typeorm");

var _Note = _interopRequireDefault(require("../models/Note"));

var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));

var _CreateNoteService = _interopRequireDefault(require("../services/CreateNoteService"));

var _DeleteNoteService = _interopRequireDefault(require("../services/DeleteNoteService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const notesRouter = (0, _express.Router)();
notesRouter.use(_ensureAuthenticated.default);
notesRouter.get('/', async (request, response) => {
  const notesRepository = (0, _typeorm.getRepository)(_Note.default);
  const notes = await notesRepository.find({
    where: {
      user_id: request.user.id
    }
  });
  return response.json(notes);
});
notesRouter.post('/', async (request, response) => {
  const {
    title,
    content
  } = request.body;
  const createNote = new _CreateNoteService.default();
  const note = await createNote.execute({
    content,
    title,
    user: request.user.id
  });
  return response.json(note);
});
notesRouter.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const deleteNote = new _DeleteNoteService.default();
  await deleteNote.execute(id);
  return response.send();
});
var _default = notesRouter;
exports.default = _default;