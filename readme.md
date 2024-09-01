## Problem Name
 
Avoid unnecessary re-renders.
 
## Problem Statement
 
You have an App that creates a basic resume from user details. The App consists of three parts: the header, the user form, and the resume preview. There are some bugs in the App which needs to be fixed. You can add the skills and it's efficiency in the skills and efficiency field by entering the skill and efficiency and pressing the add button, by adding the efficiency it will not reflect in the resume preview, you will need to press the Done button to display it in the resume preview. You can also clear the efficiency by pressing the clear button. All the skills will be displayed in the descending order based on their efficiency.
 
## Issues
 
1. Clicking the “Change Header Color” button does not change the header color.
2. The company input field in the user form is not functioning as expected.
3. There are many unnecessary re-renders in the UI. For example, changing any field in the user form causes the header to re-render. Similarly, changing the header color triggers re-renders of the user form and resume preview.
4. Here let's say you have added the skills as C++(5), Python(9) in the skills input, then it will be shown in the resume preview in the order of Python(9),C++(5) now if you try to clear the skills and then add the skills in the order of Python(9),C++(5) it is still re-rendering the resume preview. Even though the UI is not changing. Below are the steps you can follow to check the re-redering of resume preview.
  - Add the skills in this order C++(5), Python(9).
  - Press Done button.
  - It will re-render the resume preview which is expected.
  - Press clear in skills input.
  - Add the skills in this order Python(9), C++(5).
  - Press Done button.
  - It will re-render the resume preview which is not expected.
 
## Expected Behavior
 
1. Clicking the “Change Header Color” button should change the header’s background color.
2. Entering a value in the company input field should reflect in both the input field and the resume preview once all user details are filled in.
3. Ideally, each component should re-render only if its props are updated. For instance, changing the header color should only re-render the header, not the user form or resume preview, and vice versa.
4. No matter in which order you enter the skills in the skills input, what should happen is if sorting the skills you have entered by the efficiency in descending order is same as the previous entered skills sorted by their efficiency in descending order it should not re-render the resume preview.
 
## Note: You can check which components are being re-rendered in the browser console for each component which is re-rendering you will get a console.log for that. Make sure you do not remove any console.logs added in any component.
 
## Submission Instructions
 
1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly.
 
To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.
