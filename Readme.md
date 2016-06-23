# How to use
- Open index.html in browser (I guess, Chrome is preferable). 
- The first block is scaffold for execution. Feel free to edit input textarea or leave it default and then click "Run". Output textarea should change its value as expected.
- The second block is test report of mocha. You can look through specs at js/specs.

# Some comments and thoughts
- Rover specs could be refactoring, its not so DRY tests for moving and rotating of rovers
- Excuse me if my english in specs descriptions aren't correct so much, I focused on code and content of tests, I hope you will catch it
- Rover class has heavy relationship with events listener, I feel it could be refactored to weak relationship (maybe passing events listener instance as a parameter to a rover constructor)