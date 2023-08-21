class CheckEligibilityPage {

    public DetailApplicationURL="https://applynow.bendigobank.com.au/apply/?_gl=1*gvdc40*_gcl_au*MjQ4NjA4MjEuMTY5MjE5NTI3Ng..*_ga*NTQ4MDYxMDQuMTY5MjE5NTI3Ng..*_ga_8G245KPFM1*MTY5MjI1NjYzNS42LjEuMTY5MjI1ODMxOC42MC4wLjA.#/apply/new/creditCards/loanDetails/productSelection?productCode=RCA-M1-BRT-BRT";
    public setCreditDetails() {
        browser.url(this.DetailApplicationURL);
        browser.pause(5000);
        $("//*[@id=\"creditLimitAmountInput\"]").click();
        $("//*[@id=\"creditLimitAmountInput\"]").setValue("10000");

        
    }

public setPurpose() {

    browser.url(this.DetailApplicationURL);
    return $("//*[@name=\"creditCardUsage\"][contains(text(),'General purpose use')]");
 
    }


 public clickcontinue(){

    let continebutton=  $("//*[@name=\"contBtn\"]");
    continebutton.scrollIntoView();
    continebutton.click();
    browser.pause(5000);
 }   

 public clickcontinue_checkbranch(){
    let continuebutton=$("button.sst-dp-generalBtn:nth-");
    continuebutton.scrollIntoView();
    continuebutton.click();
    browser.pause(3000);
 }   

 public clickcontinue_branchdetail(){
    let continuebutton=$("//*[@name=\"contBtn\"][contains(text(),'Continue')]");
    continuebutton.scrollIntoView();
    continuebutton.click();
    browser.pause(3000);
 }   



 public clickcontinue_expense(){
 $("//*[@name=\"contBtn\"][contains(text(),'Continue')]").scrollIntoView();
 $("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click();
 }


 public Setrelationship()
 {
    let relationStatus= $("//*[@name=\"maritalStatus\"]");
    relationStatus.scrollIntoView();
    relationStatus.selectByIndex(1);

 }


 public SethasPromoCode()
 
 {
    let selectNo=$("//*[@name=\"hasPromoCode\"][contains(text(),'No')]");
    selectNo.scrollIntoView();
    selectNo.click();
 }
 
 
 public SetLocation()
{
    $("//*[@placeholder=\"Enter a location\"]").setValue("Melbourne");
    $("//*[@id=\"branchSearch\"]/span").click();
}

 public SetBranch()
{
    let Clifton= $("//*[@ng-click=\"selectBranch(branch)\"][contains(text(),'Clifton Hill')]");
    Clifton.scrollIntoView();
    Clifton.click();
    browser.pause(3000);

}


public ClickCheckBranch()
{
    let continuebutton=$("button.sst-dp-generalBtn:nth-");
    continuebutton.scrollIntoView();
    continuebutton.click();
    browser.pause(3000);

}


public SetBranchDetail()
{

    let Clifton= $("//*[@ng-click=\"selectBranch(branch)\"][contains(text(),'Clifton Hill')]");
    Clifton.scrollIntoView();
    Clifton.click();
    browser.pause(3000);

}

 public SetCreteriaMeet()
 {
    $("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").scrollIntoView();
    $("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").click();

 }


 public SetBranchdetail_continue()
 {
    let continuebutton=$("//*[@name=\"contBtn\"][contains(text(),'Continue')]");
    continuebutton.scrollIntoView();
    continuebutton.click();
    browser.pause(3000);
 }


 public SetEmploymentStatus()
 {

    const employmentStatus = browser.$("//*[@name=\"employmentStatus\"]");
    employmentStatus.selectByIndex(5);
    $("//*[@name=\"occupationSearch\"]").scrollIntoView();

 }

 public SetOccupationSearch()
 {

    $("//*[@name=\"occupationSearch\"]").setValue("Professional");
 }


public SetOccupationDetail()
{
    browser.$("//*[@id=\"typeahead-830-1994-option-1\"]/a/strong").click();

}

 public SetexpenseAndFrenquency()

 {
    $("//*[@name=\"expenseAmount\"]").setValue("20000");
    let expenseFrequency = $("//*[@ng-model=\"expense.frequency\"]");
    expenseFrequency.scrollIntoView();
    expenseFrequency.selectByIndex(3);

 }

public  SetExpenseDetails()
{

    $("//*[@name=\"expenseAmount\"]").setValue("6000");
    const expenseFrequency = browser.$("//*[@ng-model=\"expense.frequency\"]");
    expenseFrequency.selectByIndex(3);
} 




public Validate_ExpensesElementExisting()
{
    expect($("//*[@name=\"expenseAmount\"]")).toBeExisting();
}

public Validate_IncomedetailsScreenExisting()
{

    expect($("//*[@name=\"incomeAmount\"]")).toBeExisting();
   expect($("//*[@name=\"incomeFrequency\"]")).toBeExisting();
}



public Validate_Application_DetailsExisting(){

    expect ($("//*[@name=\"maritalStatus\"]")).toBeExisting();
}

public Validate_ConformCreteria_existing(){

    expect($("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]")).toBeExisting();

}

public Validate_IncomeDetailSection(){

    expect($("//*[@name=\"employmentStatus\"]")).toBeExisting();

}


}
export default new CheckEligibilityPage();