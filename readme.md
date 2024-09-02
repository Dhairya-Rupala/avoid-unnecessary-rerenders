## Problem Name
 
Avoid unnecessary re-renders.
 
## Problem Statement
 
Our application generates a basic resume from user details and consists of three components: the header, the user form, and the resume preview. Several bugs need to be addressed. Users can add skills and their corresponding efficiency by entering the details and pressing the “Add” button. However, the efficiency will not be reflected in the resume preview until the “Done” button is pressed. Users can also clear the efficiency by pressing the “Clear” button. All skills will be displayed in descending order based on their efficiency.

## Issues
 
1. The “Change Header Color” button does not change the header color.
2. The company input field in the user form is not functioning as expected.
3. There are numerous unnecessary re-renders in the UI. For instance, changing any field in the user form causes the header to re-render. Similarly, changing the header color triggers re-renders of the user form and resume preview.
4. If skills are added in the order C++(5), Python(9), they are displayed in the resume preview as Python(9), C++(5). If the skills are then cleared and re-entered in the order Python(9), C++(5), the resume preview still re-renders, even though the UI does not change. Follow these steps to observe the re-rendering of the resume preview:
  - Add skills in the order C++(5), Python(9).
  - Press Done button.
  - The resume preview will re-render as expected.
  - Press “Clear” in the skills input.
  - Add skills in the order Python(9), C++(5).
  - Press Done button.
  - The resume preview will re-render, which is not expected.
 
## Expected Behavior
 
1. Clicking the “Change Header Color” button should change the header’s background color.
2. Entering a value in the company input field should reflect in both the input field and the resume preview.
3. Each component should ideally re-render only if its props are updated and there is some visual change in the component. For example, changing the header color should only re-render the header, not the user form or resume preview, and vice versa.
4. Regardless of the order in which skills are entered, if the sorted skills by efficiency in descending order match the previously entered skills, the resume preview should not re-render.
 
## Note: You can check which components are being re-rendered in the browser console. Each re-rendering component will generate a console.log entry. Ensure that you do not remove any console.logs added in any component.
 
## Submission Instructions
 
1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly.
 
To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.
