const trials = [];

export class Trial {
  constructor(data) {
    this.id = 'trl_' + Math.random().toString(36).substr(2, 9);
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.company = data.company;
    this.phone = data.phone;
    this.teamSize = data.teamSize || '1-5';
    this.industry = data.industry || 'Manufacturing';
    this.status = 'Active Trial';
    this.expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
    this.createdAt = new Date();
  }

  static async create(data) {
    const record = new Trial(data);
    trials.push(record);
    return record;
  }

  static async find() {
    return [...trials];
  }
}
