class CancelPage {
    

  public cancleApplication_CancelClick(){
    return $("button[name='cancelBtn']").click();
  }

  public cancleApplication_Confirm(){
    return $("button[name='confirmYes']").click();
  }
  

  public cancleApplication_ValidateCancelMessage() {
    
    let cancelMessage = $('h1=Your application');
    return expect(cancelMessage).toHaveText('Your application' || 'has been cancelled');
  }

}

export default new CancelPage();