Feature: End to end Ecommerce validation

  application Regression

  Scenario: Ecommerce products delivery
    Given I open ECommerce page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thankyou
