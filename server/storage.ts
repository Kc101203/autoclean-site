import { users, contactForms, type User, type InsertUser, type ContactForm, type InsertContactForm } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactForm(contactForm: InsertContactForm): Promise<ContactForm>;
  getContactForms(): Promise<ContactForm[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, ContactForm>;
  private currentUserId: number;
  private currentContactFormId: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.currentUserId = 1;
    this.currentContactFormId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactForm(insertContactForm: InsertContactForm): Promise<ContactForm> {
    const id = this.currentContactFormId++;
    const contactForm: ContactForm = { 
      ...insertContactForm, 
      id,
      createdAt: new Date()
    };
    this.contactForms.set(id, contactForm);
    return contactForm;
  }

  async getContactForms(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values());
  }
}

export const storage = new MemStorage();
