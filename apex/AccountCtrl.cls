global with sharing class AccountCtrl {

	public ApexPages.StandardController standardController {public get; private set;}

	public AccountCtrl(ApexPages.StandardController standardController){
		this.standardController = standardController;
	}

	@RemoteAction
  	global static Account getAccountCity(String actName){
  		try{
  			return [ SELECT BillingStreet, BillingCity FROM Account WHERE Name = :actName][0];
  		}catch (DmlException e){
  			return null;
  		}
  	}

}
