import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given('Open https:\\/\\/www.bendigobank.com.au\\/', async function () {
      return await browser.url("https://www.bendigobank.com.au");
});


When('Click on Banking -', function () {
      $("button[name='banking']").click();
     browser.pause(3000);
     
});


Then('You should see following links:Bank Accounts,Credit Cards,Personal Loans,Travel and International Payments', function () {
     
     expect ($('=Bank Accounts')).toBeExisting();
     expect ($('=Personal Loans')).toBeExisting();
     expect ($('=Credit cards')).toBeExisting();
     expect ($('=Travel and International Payments')).toBeExisting();
     
});



Given('Select Credit cards', function () {
     $('=Credit cards').click();  
     browser.pause(5000);
    
});


When(`On the Credit Cards screen, scroll down`,   function () {
    
    return;
 });

When(`select Apply now for Bendigo Bright® Credit Card`, function () {
    let applybutton= $("//h5[contains(.,\"Bendigo Bright® Credit Card\")]/parent::div/following-sibling::div[2]/child::a[2]");
     applybutton.scrollIntoView();
     applybutton.click();
})

Then('Validate Check my eligibility screen is shown',  function () {
    expect(browser).toHaveUrl('https://www.bendigobank.com.au/personal/credit-cards/check-my-eligibility/?ccproduct=bright');
});



Given('Click on Continue to Apply', function () {
    (browser).url('https://www.bendigobank.com.au/personal/credit-cards/check-my-eligibility/?ccproduct=bright');
 
});


When('Validate correct screen is displayed On the Screen',   function () {

    $("//div[@class='col-12 text-left']/child::button").click();
   expect ("//div[@class='col-12 text-left']/child::button").toBeExisting();
   $("//div[@class='col-12 text-left']/child::button").click();
   
    browser.pause(3000);
});


Then('Validate Getting Started section is displayed', function () {

     const title=browser.$("//*[@id=\"loanDetailsStep\"]/div/div[1]/a/div/div/div/div/h2");
         
     expect (title).toHaveText('Getting Started');

});



Given('user enter Test Data {float} Preferred Credit Limit as {float} ${int}',  function (float, float2, int) {
    
     browser.url("https://applynow.bendigobank.com.au/apply/?_gl=1*gvdc40*_gcl_au*MjQ4NjA4MjEuMTY5MjE5NTI3Ng..*_ga*NTQ4MDYxMDQuMTY5MjE5NTI3Ng..*_ga_8G245KPFM1*MTY5MjI1NjYzNS42LjEuMTY5MjI1ODMxOC42MC4wLjA.#/apply/new/creditCards/loanDetails/productSelection?productCode=RCA-M1-BRT-BRT");
     browser.pause(5000);
      $("//*[@id=\"creditLimitAmountInput\"]").click();
      $("//*[@id=\"creditLimitAmountInput\"]").setValue("10000");
});


Given('Select purpose as General Purpose use',  function () {
    browser.url("https://applynow.bendigobank.com.au/apply/?_gl=1*gvdc40*_gcl_au*MjQ4NjA4MjEuMTY5MjE5NTI3Ng..*_ga*NTQ4MDYxMDQuMTY5MjE5NTI3Ng..*_ga_8G245KPFM1*MTY5MjI1NjYzNS42LjEuMTY5MjI1ODMxOC42MC4wLjA.#/apply/new/creditCards/loanDetails/productSelection?productCode=RCA-M1-BRT-BRT");
    return $("//*[@name=\"creditCardUsage\"][contains(text(),'General purpose use')]");
});


When('Click continue',  function () {
    let continebutton=  $("//*[@name=\"contBtn\"]");
    continebutton.scrollIntoView();
    continebutton.click();
    browser.pause(5000);
});


Then('Validate Application Details section is displayed', function () {
    
     $("//*[@name=\"maritalStatus\"]").isExisting();

});



Given('you select Single from the relationship status', function () {

    let relationStatus= $("//*[@name=\"maritalStatus\"]");
     relationStatus.scrollIntoView();
     relationStatus.selectByIndex(1);
    });


When('Select No for next {int} questions',  function (int) {

    let selectNo=$("//*[@name=\"hasPromoCode\"][contains(text(),'No')]");
    selectNo.scrollIntoView();
    selectNo.click();
});


When('you click Continue',  function () {
    let continebutton= $("//*[@name=\"contBtn\"]");
     continebutton.scrollIntoView();
     continebutton.click();
    browser.pause(5000);
});


Then('Validate Time & Eligibility screen is displayed',  function () {
     expect($("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]")).toBeExisting();
         
});



Given('Select Yes for the question',  function () {
     $("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").scrollIntoView();
     $("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").click();
 });



When('click continue at Check Branch', function () {

    let continuebutton=$("button.sst-dp-generalBtn:nth-");
    continuebutton.scrollIntoView();
    continuebutton.click();
    browser.pause(3000);
});


Then('Validate Branch Details section is displayed', function () {
    let branchsearch=$("//*[@id=\"branchSearch\"]");
    branchsearch.scrollIntoView();
    expect (branchsearch).toBeExisting();
});



Given('Enter location as Melbourne and click Find', function () {
    $("//*[@placeholder=\"Enter a location\"]").setValue("Melbourne");
    $("//*[@id=\"branchSearch\"]/span").click();
   });


When('Select Clifton Hill option', function () {
    let Clifton= $("//*[@ng-click=\"selectBranch(branch)\"][contains(text(),'Clifton Hill')]");
    Clifton.scrollIntoView();
    Clifton.click();
    browser.pause(3000);
});



When('click continue at Branch Detail',  function () {

    let continuebutton=$("//*[@name=\"contBtn\"][contains(text(),'Continue')]");
    continuebutton.scrollIntoView();
    continuebutton.click();
    browser.pause(3000);
});



Then('Validate Income details section is displayed', function () {
        expect($("//*[@name=\"employmentStatus\"]")).toBeExisting();
});




Given('Select Casual', function () {
    const employmentStatus = browser.$("//*[@name=\"employmentStatus\"]");
     employmentStatus.selectByIndex(5);
     $("//*[@name=\"occupationSearch\"]").scrollIntoView();
       

    });

Given('Input Professional in the textbox for Occupation', function () {
   
    $("//*[@name=\"occupationSearch\"]").setValue("Professional");
   

});



When('Select Social Professionals', function () {
 
browser.$("//*[@id=\"typeahead-830-1994-option-1\"]/a/strong").click();
   
});



Then('Validate Income details screen is displayed', function () {
  
    expect($("//*[@name=\"incomeAmount\"]")).toBeExisting();
    expect($("//*[@name=\"incomeFrequency\"]")).toBeExisting();
   
});




Given('Select Test Data Amount as ${int} and Frequency as Annually', function (int) {
 
     $("//*[@name=\"expenseAmount\"]").setValue("20000");
     let expenseFrequency = $("//*[@ng-model=\"expense.frequency\"]");
     expenseFrequency.scrollIntoView();
     expenseFrequency.selectByIndex(3);
});



When('Click Continue', function () {
    $("//*[@name=\"contBtn\"][contains(text(),'Continue')]").scrollIntoView();
    $("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click();
});



Then('Validate Expenses section is displayed', function () {
    expect($("//*[@name=\"expenseAmount\"]")).toBeExisting();
});




Given('Enter Test Data amount as ${int} and payment frequency as Monthly.', function (int) {
    
    $("//*[@name=\"expenseAmount\"]").setValue("6000");
    const expenseFrequency = browser.$("//*[@ng-model=\"expense.frequency\"]");
    expenseFrequency.selectByIndex(3);
});



Given('Click Cancel', function () {
    
    $("button[name='cancelBtn']").click();

});



When('On the pop up to cancel the application select Yes', function () {
    $("button[name='confirmYes']").click();
});



Then('validate the message - Your application <application ref no.> has been cancelled', function () {
    let cancelMessage = $('h1=Your application');
    expect(cancelMessage).toHaveText('Your application' || 'has been cancelled');

});

