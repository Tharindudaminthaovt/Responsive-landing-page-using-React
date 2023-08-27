# Responsive Landing Page Using React

This application demonstrates how to create a user-friendly subscription process using React. It includes components for handling form submissions,input validation,visually appealing success modal and providing users with immediate feedback upon successful actions.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Hook Form**: Simplifies form handling and validation.
- **useState**: Manages state within functional components.
- **yup**: Defines and validates data shape (e.g., email format).
- **@hookform/resolvers**: Integrates validation with `react-hook-form`.
- **CSS**: Styles and formats components for visual appeal.
- **Modal**: Displays the success message in a pop-up window.
- **Event Handling**: Triggers actions based on user interactions.
- **Conditional Rendering**: Shows/hides components based on conditions.
- **Immediate Feedback**: Confirms actions instantly to users.
- **State Management**: Tracks and updates application state.

## Usage

1. Clone this repository to your local machine.
2. Navigate to the project directory using your terminal.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and visit `http://localhost:3000` to see the application in action.

## Components

### Form

The `Form` component displays a subscription form where users can provide their email address. It uses `react-hook-form` for efficient form management and yup for validation. Upon successful submission, a success modal is displayed.

### Success

The `Success` component renders a modal that appears when users successfully subscribe. It provides a confirmation message and displays the submitted email address. Users can dismiss the modal using the provided button.

## Contributions

Contributions are welcome! If you find issues or have suggestions, please feel free to submit a pull request or open an issue.


