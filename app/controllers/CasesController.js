import { AppState } from "../AppState.js";
import { casesService } from "../services/CasesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawCaseCount() {
  setText('caseCount', `${AppState.cases.length} cases on file`)
}

function _drawCases() {
  let contentHTML = '';
  AppState.cases.forEach(c => contentHTML += c.caseCard);
  setHTML('cases', contentHTML);
  _drawCaseCount();
}

function _drawActiveCase() {
  setHTML('cases', AppState.activeCase);
}

export class CasesController {
  constructor() {
    _drawCases();
    AppState.on('cases', _drawCases);
    AppState.on('activeCase', _drawActiveCase)
  }

  setActiveCase() {
    casesService.setActiveCase(id);
    // _drawActiveCase(id);
  }

  unlockCase() {
    casesService.unlockCase();
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