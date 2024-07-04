//const { I } = require('@codeceptjs/configure');
const LoginPage = require('../page_objects/loginPage');

const { I } = inject();
// Add in your custom step files


// Given
Given('I am on the login page', () => {
    I.amOnPage('https://www.admin.boletia.com/auth/login'); // Navega a la página de login
    
});

When('I fill in the email field with {string}', async (email) => {
    I.fillField('input[name="email"]', email);
  });
  
  When('I fill in the password field with {string}', async (password) => {
    I.fillField('input[name="password"]', password);
  });
  
  When('I click the login button', () => {
    I.click('Ingresar');
  });

  When('I should see the list of events', () => {
    I.waitForElement('//*[@placeholder="Buscar evento por nombre, id o fecha (aaaa-mm-dd)"]', 10); // Espera hasta 10 segundos a que el campo esté presente
    I.fillField('//*[@placeholder="Buscar evento por nombre, id o fecha (aaaa-mm-dd)"]', 'incode'); // Llena el campo
    I.waitForElement('//div[contains(text(), "mi evento para incode")]');
    I.see('mi evento para incode');
  });




// When
//When('I fill in the email field with {string}', async (email) => {
 //  await LoginPage.fillEmail(email); // Utiliza el método del Page Object para llenar el email
 //});
// When('I fill in the password field with {string}', async (password) => {
//   await LoginPage.fillPassword(password); // Utiliza el método del Page Object para llenar el password
// });
// When('I click the login button', async () => {
//   await LoginPage.clickLoginButton(); // Utiliza el método del Page Object para hacer clic en el botón
// });
// // Then
// Then('I should see the dashboard', () => {
//   I.see('Dashboard'); // Verifica que el texto "Dashboard" esté presente en la página
// });
