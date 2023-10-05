import { generateId } from "../utils/GenerateId.js";

export class Case {
  constructor(data) {
    this.id = generateId()
    this.report = data.report
    this.date = data.date
  }

  get caseCard() {
    return `
    
    `
  }
}