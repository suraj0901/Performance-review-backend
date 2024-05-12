## Todo

#### Entity

    [] Employee
    [] Review
    [] Feedback

### Employee

    - Name
    - Gender
    - Email
    - Profile

### Review

    - Assignee - Employee
    - Reviewer - [Employee]
    - Review -  Question []

### Question

    - title
    - Feedback []

### Feedback

    - title
    - Reviewer - Employee

### TODO

    Auto Increament ID for review
