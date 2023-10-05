import { AppState } from "../AppState.js";
import { casesService } from "../services/CasesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawCases() {
  let contentHTML = '';
  AppState.cases.forEach(c => contentHTML += c.caseCard);
  setHTML('cases', contentHTML);
}

export class CasesController {
  constructor() {
    _drawCases();
    AppState.on('cases', _drawCases);
  }

  addCase(event) {
    event.preventDefault();
    getFormData(event.target);

    Pop.success('Case Added!')
    // event.target.reset();
  }

  removeCase(id) {
    casesService.removeCase(id);

  }
}