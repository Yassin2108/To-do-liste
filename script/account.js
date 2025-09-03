import { projects } from "./list.js";
let accounts = [];

function addAccount () {
  const account = {
    email: 'example@gmail.com',
    password: 'beispiel',
    projects
  };

  accounts.push(account);
  console.log('account wurde erstellt');
}
window.addAccount = addAccount;