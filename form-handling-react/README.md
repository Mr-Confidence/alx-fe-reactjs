# Form Handling in React with Controlled Components and Formik

This project demonstrates how to handle forms in React using two approaches:
1. **Controlled Components**: Managing form state manually using React's `useState`.
2. **Formik**: A popular library for simplifying form handling, validation, and error management.

The project includes a user registration form with fields for `username`, `email`, and `password`. It also integrates basic validation and simulates form submission to a mock API.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

---

## Features

- **Controlled Components**:
  - Manual state management using `useState`.
  - Basic validation to ensure no fields are left empty.
- **Formik**:
  - Built-in state management and form handling.
  - Validation using Yup schema.
  - Error messages for invalid inputs.
- Simulated API submission for user registration.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Formik**: A library for building forms in React.
- **Yup**: A schema validation library for form validation.
- **Vite**: A fast build tool for modern web development.

---

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/alx-fe-reactjs.git
   cd alx-fe-reactjs/form-handling-react