class CreditCard {

public SetSelectBendigo()

{
    let applybutton= $("//h5[contains(.,\"Bendigo Bright® Credit Card\")]/parent::div/following-sibling::div[2]/child::a[2]");
    applybutton.scrollIntoView();
    applybutton.click();

}


public ValidateMiddlePage()

{   $("//div[@class='col-12 text-left']/child::button").click();
    expect ("//div[@class='col-12 text-left']/child::button").toBeExisting();
    $("//div[@class='col-12 text-left']/child::button").click();

    browser.pause(3000);

}

public ValidateGetstarted()
{ 
    
    const title=browser.$("//*[@id=\"loanDetailsStep\"]/div/div[1]/a/div/div/div/div/h2");
     
    expect (title).toHaveText('Getting Started');}

public Validate_CheckEligibityScreen(){

    expect(browser).toHaveUrl('https://www.bendigobank.com.au/personal/credit-cards/check-my-eligibility/?ccproduct=bright'); 
    }
}

export default new CreditCard();