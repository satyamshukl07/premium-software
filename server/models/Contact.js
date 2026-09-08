// In-memory / MongoDB simulated document store
const contacts = [];

export class Contact {
  constructor(data) {
    this.id = 'cnt_' + Math.random().toString(36).substr(2, 9);
    this.name = data.name;
    this.email = data.email;
    this.company = data.company;
    this.phone = data.phone;
    this.message = data.message;
    this.subject = data.subject || 'General Inquiry';
    this.createdAt = new Date();
  }

  static async create(data) {
    const record = new Contact(data);
    contacts.push(record);
    return record;
  }

  static async find() {
    return [...contacts];
  }
}
