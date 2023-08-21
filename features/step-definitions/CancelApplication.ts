
import  CancelPage from '../pageobjects/CancelPage';
import { Given, When, Then } from '@wdio/cucumber-framework';

Given('Click Cancel', function () {
    
    CancelPage.cancleApplication_CancelClick();

});



When('On the pop up to cancel the application select Yes', function () {
    CancelPage.cancleApplication_Confirm();
});



Then('validate the message - Your application <application ref no.> has been cancelled', function () {
    CancelPage.cancleApplication_ValidateCancelMessage();
});