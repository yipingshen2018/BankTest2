class BendigoHomePage {

    public BankURL="https://www.bendigobank.com.au";
    public BankCreditCheckEligibilityURL='https://www.bendigobank.com.au/personal/credit-cards/check-my-eligibility/?ccproduct=bright';

    public  openHomePage () {
        return browser.url(this.BankURL);
    }
    public  selectBanking() {
        $("button[name='banking']").click();
        browser.pause(3000);
    }
    public  chooseCreditCard() {
        $('=Credit cards').click();  
        browser.pause(5000);
    }


    public validateLinks(){

        expect ($('=Bank Accounts')).toBeExisting();
        expect ($('=Personal Loans')).toBeExisting();
        expect ($('=Credit cards')).toBeExisting();
        expect ($('=Travel and International Payments')).toBeExisting();
    }
  }
  
  export default new BendigoHomePage();