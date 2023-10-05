import { generateId } from "../utils/GenerateId.js";

export class Case {
  constructor(data) {
    this.id = generateId()
    this.agency = data.agency
    this.report = data.report || "No report"
    this.unlocked = data.unlocked ? data.unlocked : false
    this.reportedDate = data.reportedDate ? new Date(data.reportedDate) : new Date()
  }

  get caseCard() {
    return `
    
    `
  }

  get activeCaseTemplate() {
    return `
    
    `
  }

  get unlockedCaseTemplate() {
    return `
    
    `
  }
}