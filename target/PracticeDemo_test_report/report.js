$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NinjaStore.feature");
formatter.feature({
  "line": 1,
  "name": "Test the login functionality",
  "description": "",
  "id": "test-the-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Test with the valid login credentials",
  "description": "",
  "id": "test-the-login-functionality;test-with-the-valid-login-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@ninja"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to tutorialsninja website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the valid Username gnshkmbhr25@gmail.com and Password gnshkmbhr into the login fields",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User should login successfully",
  "keyword": "And "
});
formatter.match({
  "location": "NinjaStore.navigatetotutorialsninjawebsite()"
});
formatter.result({
  "duration": 32464513700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gnshkmbhr25@gmail.com",
      "offset": 25
    },
    {
      "val": "gnshkmbhr",
      "offset": 60
    }
  ],
  "location": "NinjaStore.enterthevalidLoginDetails(String,String)"
});
formatter.result({
  "duration": 486627999,
  "status": "passed"
});
formatter.match({
  "location": "NinjaStore.clicksonLoginbutton()"
});
formatter.result({
  "duration": 1243034100,
  "status": "passed"
});
formatter.match({
  "location": "NinjaStore.usershouldloginsuccessfully()"
});
formatter.result({
  "duration": 21670900,
  "status": "passed"
});
});