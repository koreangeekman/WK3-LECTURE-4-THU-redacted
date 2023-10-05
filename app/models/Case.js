import { generateId } from "../utils/GenerateId.js";

export class Case {
  constructor(data) {
    this.id = generateId()
    this.agency = data.agency
    this.report = data.report || "No report"
    this.unlocked = data.unlocked ? data.unlocked : false
    this.reportedDate = (data.reportedDate ? new Date(data.reportedDate) : new Date()).toLocaleString
    this.updatedDate = (data.updatedDate ? new Date(data.updatedDate) : new Date()).toLocaleString
  }

  get caseCard() {
    return `
      <!-- SECTION AGENCY FOLDERS -->
        <div class="col p-3 d-flex justify-content-center align-items-center">
          <div class="bordered">
            <i class="agencyFolder mdi mdi-briefcase-outline"></i>
            <p class="agencyName">${this.agency}</p>
          </div>
        </div>
      <!-- !SECTION AGENCY FOLDERS -->
    `
  }

  get activeCaseTemplate() {
    return `
    
    `
  }

  get unlockedCaseTemplate() {
    return `
      <!-- SECTION UNLOCKED REPORT -->
        <div class="col-12 p-3">
          <p class="fs-2">Agency: ${this.agency}</p>
          <span>
            <i class="folderState fs-1 text-danger mdi mdi-folder-lock-open-outline"></i>
            <p class="btn btn-pill">Lock File</p>
          </span>
          <p><small class="text-secondary">Reported Date: ${this.reportedDate}/small></p>
          <p><small class="text-secondary">Last Updated: ${this.updatedDate}/small></p>
          <textarea class="form-control bg-dark text-white" name="caseReport" id="caseReport" rows="8"
            placeholder="content"></textarea>
        </div>
      <!-- !SECTION UNLOCKED REPORT -->
    `
  }
}