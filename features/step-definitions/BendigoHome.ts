import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import BendigoHomePage from '../pageobjects/BendigoHomePage';

Given('Open https:\\/\\/www.bendigobank.com.au\\/', async function () {
    
    return await BendigoHomePage.openHomePage();
});


When('Click on Banking -', function () {
    BendigoHomePage.selectBanking();
     
});


Then('You should see following links:Bank Accounts,Credit Cards,Personal Loans,Travel and International Payments', function () {
     
    BendigoHomePage.validateLinks();
     
});

