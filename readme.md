## Problem Name

Avoid unnecessary re-renders and computations.

## Problem Statement

Our application generates a basic resume from user details and consists of three components: the header, the user form, and the resume preview. Users can add skills and their corresponding efficiency by entering the details into skills input.The Application contains several bugs which need to be addressed.

## Issues

1. The “Change Header Color” button does not change the header color.
2. There are numerous unnecessary re-renders in the UI. For instance, changing any field in the user form causes the header to re-render. Similarly, changing the header color triggers re-renders of the user form and resume preview.
3. If skills are added as the order C++(5), Python(9), they should be displayed in the resume preview as C++, Python (The same order in which they are entered). Now if we are changing the efficiency of any skills it is re-rendering the resume preview.

## Expected Behavior

1. Clicking the “Change Header Color” button should change the header’s background color.
2. Each component should ideally re-render only if its props are updated and there is some visual change in the component. For example, changing the header color should only re-render the header, not the user form or resume preview, and vice versa.
3. If we are just changing the efficiency of the skills then it should not re-render the resume preview and also there should not be any unnecessary computations as the resume preview does not depend on efficiency of the skills.

## Note: You can check which components are being re-rendered in the browser console. Each re-rendering component will generate a console.log entry. Ensure that you do not remove any console.logs added in any component.

## Submission Instructions

1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly. To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.
