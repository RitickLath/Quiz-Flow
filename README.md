# Quiz Arena (Assignment)

## Description

This is a **Quiz Application** where users can take a demo quiz by answering multiple-choice questions. The quiz comes with a countdown timer, a progress bar, a solution display, and navigation between questions. Users can start the quiz, view detailed solutions after answering each question, and see their scores at the end.

The application fetches quiz data from an API and presents it in an interactive way, keeping track of the answers and displaying a detailed solution after each question.

## Features

- **Start Quiz**: Option to start the quiz after viewing quiz details.
- **Countdown Timer**: A countdown that starts before the test begins.
- **Progress Bar**: Visual progress bar to indicate the current question and total progress.
- **Question & Options**: Displays questions with options and allows the user to select an answer.
- **Solution Display**: Shows a detailed explanation of the correct answer after each question.
- **Navigation**: Users can move to the next question and see their score at the end of the quiz.
- **LocalStorage Support**: Prevents multiple demo attempts by storing the quiz state in `localStorage`.

## Tech Stack

- **Frontend**: React.js
  - JSX for building user interfaces.
  - State management with React `useState` and `useEffect`.
  - Axios for fetching quiz data from an API.
- **Styling**: Tailwind CSS, Framer-motion.
- **State Management**: React hooks (`useState`, `useEffect`) to manage the app state.
- **API**: Axios for making API requests to fetch quiz questions and details.

## Installation

To get this project up and running locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/)).

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RitickLath/Quiz-Flow.git
   cd quiz-application
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the application**:

   ```bash
   npm start
   ```

   Your app should now be running at [http://localhost:3000](http://localhost:3000).

## Folder Structure

- **`src/`**: Contains the source code of the application.
  - **`components/`**: Contains reusable components such as `StartTest`, `CountDown`, `Progressbar`, `ExitButton`, `Solution`, `Navigation`, and `Question`.
  - **`App.js`**: Main entry point of the application.
  - **`PlayQuiz.js`**: Manages fetching the quiz data from the API and handles the UI for starting the quiz.
  - **`StartTest.js`**: Contains the main functionality for displaying the quiz questions, handling answers, and navigating between questions.

## Usage

1. **View Quiz Details**: Upon visiting the app, users will see an introductory screen with quiz details such as the topic, date, and duration.
2. **Start the Quiz**: Click on the "Start Quiz" button to begin the quiz. The user will see the countdown timer and then proceed to answer questions.
3. **Answer Questions**: Select one of the multiple-choice options for each question. The selected answer will be marked with colors indicating whether it’s correct or incorrect.
4. **View Solutions**: After answering a question, a detailed solution will be shown to the user.
5. **Navigate**: Use the "Next Question" button to move to the next question. The quiz progress is tracked with a progress bar.
6. **Exit Quiz**: The user can exit the quiz at any time by pressing the exit button.

## LocalStorage Handling

The app uses `localStorage` to store a flag (`Demo`) that indicates if the user has already taken the quiz. If they have, they will be shown an alert informing them that they cannot retake the demo quiz.

## Example Flow

1. User visits the homepage and sees the quiz details.
2. User clicks "Start Quiz" and the countdown timer starts.
3. The user answers a question and sees whether their answer is correct.
4. The user moves to the next question, repeating the process.
5. At the end, the user's score is displayed, and they can exit the quiz.
