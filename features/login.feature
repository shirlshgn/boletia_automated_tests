Feature: Inicio de sesión

  Scenario: Inicio de sesión exitoso
    Given I am on the login page
    When I fill in the email field with "david@boletia.com"
    And I fill in the password field with "JD&no_123**"
    And I click the login button
    Then I should see the list of events
