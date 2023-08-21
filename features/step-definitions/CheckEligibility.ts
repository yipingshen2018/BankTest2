import  CheckEligibilityPage from '../pageobjects/CheckEligibilityPage';
import { Given, When, Then } from '@wdio/cucumber-framework';

Given('user enter Test Data {float} Preferred Credit Limit as {float} ${int}',  function (float, float2, int) {
    
    CheckEligibilityPage.setCreditDetails();
});


Given('Select purpose as General Purpose use',  function () {
    CheckEligibilityPage.setPurpose();
});


When('Click continue',  function () {
    CheckEligibilityPage.clickcontinue();
});


Then('Validate Application Details section is displayed', function () {
   
     CheckEligibilityPage.Validate_Application_DetailsExisting()

});



Given('you select Single from the relationship status', function () {

    CheckEligibilityPage.Setrelationship();
   });


When('Select No for next {int} questions',  function (int) {

    CheckEligibilityPage.SethasPromoCode();
});


When('you click Continue',  function () {
    CheckEligibilityPage.clickcontinue();
});


Then('Validate Time & Eligibility screen is displayed',  function () {
     CheckEligibilityPage.Validate_ConformCreteria_existing();
});



Given('Select Yes for the question',  function () {
    CheckEligibilityPage.SetCreteriaMeet();
});



When('click continue at Check Branch', function () {

    CheckEligibilityPage.clickcontinue_checkbranch()
});


Then('Validate Branch Details section is displayed', function () {
    CheckEligibilityPage.SetBranch();
});



Given('Enter location as Melbourne and click Find', function () {
    CheckEligibilityPage.SetLocation();

  });


When('Select Clifton Hill option', function () {
    CheckEligibilityPage.SetBranchDetail();
});



When('click continue at Branch Detail',  function () {
    CheckEligibilityPage.clickcontinue_branchdetail();
});



Then('Validate Income details section is displayed', function () {
    CheckEligibilityPage.Validate_IncomeDetailSection()
});




Given('Select Casual', function () {
    CheckEligibilityPage.SetEmploymentStatus();
      

   });

Given('Input Professional in the textbox for Occupation', function () {
  
    CheckEligibilityPage.SetOccupationSearch();
  

});



When('Select Social Professionals', function () {

    CheckEligibilityPage.SetOccupationDetail();
  
});



Then('Validate Income details screen is displayed', function () {
 
    CheckEligibilityPage.Validate_IncomedetailsScreenExisting();
  
});




Given('Select Test Data Amount as ${int} and Frequency as Annually', function (int) {

    CheckEligibilityPage.SetexpenseAndFrenquency();
});



When('Click Continue', function () {
    CheckEligibilityPage.clickcontinue_expense();
});



Then('Validate Expenses section is displayed', function () {
      CheckEligibilityPage.Validate_ExpensesElementExisting();
});




Given('Enter Test Data amount as ${int} and payment frequency as Monthly.', function (int) {
   
    CheckEligibilityPage.SetExpenseDetails();
});