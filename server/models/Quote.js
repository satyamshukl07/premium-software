const quotes = [];

export class Quote {
  constructor(data) {
    this.id = 'qte_' + Math.random().toString(36).substr(2, 9);
    this.workEmail = data.workEmail;
    this.phone = data.phone || '';
    this.companyName = data.companyName;
    this.industry = data.industry;
    this.country = data.country;
    this.teamSize = data.teamSize;
    this.estimatedMonthlyCost = data.estimatedMonthlyCost;
    this.recommendedPlan = data.recommendedPlan;
    this.createdAt = new Date();
  }

  static async create(data) {
    const record = new Quote(data);
    quotes.push(record);
    return record;
  }

  static async find() {
    return [...quotes];
  }
}
