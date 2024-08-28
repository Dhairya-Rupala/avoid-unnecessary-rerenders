## Problem Name
 
Avoid unnecessary re-renders.
 
## Problem Statement
 
You have an App that creates a basic business card from user details. The App consists of three parts: the header, the user form, and the business card preview. There are some bugs in the App which needs to be fixed.
 
## Issues
 
1. Clicking the “Change Header Color” button does not change the header color.
2. The company input field in the user form is not functioning as expected.
3. There are many unnecessary re-renders in the UI. For example, changing any field in the user form causes the header to re-render. Similarly, changing the header color triggers re-renders of the user form and business card preview.
 
## Expected Behavior
 
1. Clicking the “Change Header Color” button should change the header’s background color.
2. Entering a value in the company input field should reflect in both the input field and the business card preview once all user details are filled in.
3. Ideally, each component should re-render only if its props are updated. For instance, changing the header color should only re-render the header, not the user form or business card preview, and vice versa.
 
## Note: Make sure you do not remove any console.logs added in any component.
 
## Submission Instructions
 
1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly.
 
To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.
