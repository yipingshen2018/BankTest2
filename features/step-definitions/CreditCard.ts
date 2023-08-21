import {Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import BendigoHomePage from '../pageobjects/BendigoHomePage';
import CreditCard from '../pageobjects/CreditCardNavigation';


Given('Select Credit cards', function () {
    BendigoHomePage.chooseCreditCard();
   
});


When(`On the Credit Cards screen, scroll down`,   function () {
   
   return;
});

When(`select Apply now for Bendigo Bright® Credit Card`, function () {
    CreditCard.SetSelectBendigo();
})

Then('Validate Check my eligibility screen is shown',  function () {
    CreditCard.Validate_CheckEligibityScreen();
});



Given('Click on Continue to Apply', function () {
   (browser).url(BendigoHomePage.BankCreditCheckEligibilityURL);

});




When('Validate correct screen is displayed On the Screen',   function () {
    CreditCard.ValidateMiddlePage();
});


Then('Validate Getting Started section is displayed', function () {

    CreditCard.ValidateGetstarted();

});