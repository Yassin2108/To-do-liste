
export let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
export let currentAccountIndex = Number(localStorage.getItem('currentAccountIndex')) || 0;

if (accounts.length === 0) {
  accounts.push({email: '',password:'', projects: []});
  saveAccounts();
}

function addAccount () {
  const accountEmail = document.getElementById('email').value;
  const accountIndex = accounts.findIndex (a => a.email === accountEmail);
  if(accountIndex !== -1) {
    currentAccountIndex = accountIndex;
  } else {
    accounts.push({
      email: accountEmail,
      password: document.getElementById('password').value,
      projects: []
    });
    currentAccountIndex = accounts.length -1;
    saveAccounts();
  }
  saveAccounts();
  console.log(accounts[currentAccountIndex]);
}

export function saveAccounts () {
  localStorage.setItem('accounts', JSON.stringify(accounts));
  localStorage.setItem('currentAccountIndex', String(currentAccountIndex));
}
window.addAccount = addAccount;