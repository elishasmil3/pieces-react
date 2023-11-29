import conf from "./conf.js";
import { Client, Account, Databases } from "appwrite";
const client = new Client();
const account = new Account(client);
const databases = new Databases(client);

client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);

const AuthServices = {
  async createAccount(user, email, password) {
    return await account.create(user, email, password);
  },
  async createEmailSession(email, password) {
    return await account.createEmailSession(email, password);
  },
  async listSessions() {
    return await account.listSessions();
  },
  async getSession(session) {
    return await account.getSession(session);
  },
  async deleteSession(sessionId) {
    return await account.deleteSession(sessionId);
  },
};

export default AuthServices;
