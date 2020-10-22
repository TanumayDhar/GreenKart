$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("greenkartSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search for vegetables and place order in the application.",
  "description": "",
  "id": "search-for-vegetables-and-place-order-in-the-application.",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigated to the GreenKart landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_navigated_to_the_greenkart_landing_page()"
});
formatter.result({
  "duration": 9769813400,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Search for items and validate results.",
  "description": "",
  "id": "search-for-vegetables-and-place-order-in-the-application.;search-for-items-and-validate-results.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user searched for \"cucumber\" vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "\"Cucumber - 1 Kg\" results are displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber",
      "offset": 19
    }
  ],
  "location": "Steps.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3328980200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber - 1 Kg",
      "offset": 1
    }
  ],
  "location": "Steps.something_results_are_displayed(String)"
});
formatter.result({
  "duration": 62044300,
  "status": "passed"
});
formatter.after({
  "duration": 111689500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigated to the GreenKart landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_navigated_to_the_greenkart_landing_page()"
});
formatter.result({
  "duration": 9337315600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search for items and navigate to check out page.",
  "description": "",
  "id": "search-for-vegetables-and-place-order-in-the-application.;search-for-items-and-navigate-to-check-out-page.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user searched for \"brinjal\" vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user proceed to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify selected \"Brinjal - 1 Kg\" items are displayed in check out page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "brinjal",
      "offset": 19
    }
  ],
  "location": "Steps.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3258681700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.added_items_to_cart()"
});
formatter.result({
  "duration": 190061300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_proceed_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 2213235700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal - 1 Kg",
      "offset": 17
    }
  ],
  "location": "Steps.verify_selected_something_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 2062061300,
  "status": "passed"
});
formatter.after({
  "duration": 104159400,
  "status": "passed"
});
});