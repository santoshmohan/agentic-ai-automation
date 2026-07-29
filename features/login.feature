@auth @regression
Feature: OrangeHRM authentication
  As an OrangeHRM user
  I want to authenticate securely
  So that I can access the application dashboard

  @smoke
  Scenario: A valid user can log in
    Given I am on the OrangeHRM login page
    When I log in with the demo credentials
    Then I should see the OrangeHRM dashboard

  Scenario: An invalid user cannot log in
    Given I am on the OrangeHRM login page
    When I log in with invalid credentials
    Then I should remain on the OrangeHRM login page
    And I should see the invalid credentials message

  Scenario: Username is required
    Given I am on the OrangeHRM login page
    When I submit the login form with the username missing
    Then I should see a required field validation message

  Scenario: Password is required
    Given I am on the OrangeHRM login page
    When I submit the login form with the password missing
    Then I should see a required field validation message

  Scenario: Username and password are required
    Given I am on the OrangeHRM login page
    When I submit the login form with both fields missing
    Then I should see a required field validation message

  Scenario: A user can open password recovery
    Given I am on the OrangeHRM login page
    When I open the password recovery page
    Then I should see the password recovery form

  @smoke
  Scenario: A logged-in user can log out
    Given I am logged in with the demo credentials
    When I log out from the dashboard
    Then I should remain on the OrangeHRM login page
