Feature: Check eligibility for a credit card application

Scenario Outline:as a user, Check eligibility for a credit card application

Scenario: BankTest-001 check banking links in main menu
Given Open https://www.bendigobank.com.au/

When Click on Banking - 
Then You should see following links:Bank Accounts,Credit Cards,Personal Loans,Travel and International Payments

Scenario: BankTest-002  check the credit card eligiability screen

Given Select Credit cards
When  On the Credit Cards screen, scroll down 
And select Apply now for Bendigo Bright® Credit Card
Then Validate Check my eligibility screen is shown

Scenario: BankTest-003  check getting stated section showing

Given Click on Continue to Apply
When Validate correct screen is displayed On the Screen 
Then Validate Getting Started section is displayed


Scenario: BankTest-004  check Details section dislayed
Given user enter Test Data - Preferred Credit Limit as - $10000 
And Select purpose as General Purpose use
When Click continue
Then Validate Application Details section is displayed

Scenario: BankTest-005   check Time & Eligibility screen showed

Given you select Single from the relationship status
When Select No for next 2 questions 
And  you click Continue
Then Validate Time & Eligibility screen is displayed

Scenario: BankTest-006    check Branch detail section displayed
Given Select Yes for the question 
When click continue at Check Branch
Then Validate Branch Details section is displayed


Scenario: BankTest-007 check income details displayed

Given Enter location as Melbourne and click Find
When Select Clifton Hill option 
And click continue at Branch Detail
Then Validate Income details section is displayed

Scenario: BankTest-008  check Income details screen displayed 

Given Select Casual  
And Input Professional in the textbox for Occupation
When Select Social Professionals
Then Validate Income details screen is displayed

Scenario: BankTest-009  check expenses seciton is displayed

Given Select Test Data Amount as $20000 and Frequency as Annually
When Click Continue
Then Validate Expenses section is displayed

Scenario: BankTest-010 check cancel process with ref NO.

Given Enter Test Data amount as $6000 and payment frequency as Monthly. 
And Click Cancel
When On the pop up to cancel the application select Yes
Then validate the message - Your application <application ref no.> has been cancelled
