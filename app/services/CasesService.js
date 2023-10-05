import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { saveState } from "../utils/Store.js";

function _saveCases() {
  saveState('cases', AppState.cases);
}

class CasesService {

  setActiveCase(id) {
    AppState.activeCase = AppState.cases.find(c => c.id == id)
  }

  unlockCase() {
    AppState.activeCase.unlocked = true;
    AppState.emit('activeCase');
  }


  addCase(data) {
    AppState.cases.push(data);
    AppState.emit('cases');
    _saveCases();
  }

  async removeCase(id) {
    if (!(await Pop.question('Delete this file?'))) {
      return
    }
    const index = AppState.cases.findIndex(c => c.id == id);
    AppState.cases.splice(index, 1);
    AppState.emit('cases');
    _saveCases();
  }

}

export const casesService = new CasesService