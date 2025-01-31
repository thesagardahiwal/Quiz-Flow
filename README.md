# Quiz Flow with Gamification

A modern, interactive quiz application built with React, TypeScript, and Tailwind CSS. This application features a gamified quiz experience with real-time scoring, beautiful UI, and comprehensive result tracking.

## 🌟 Features

- **Interactive Quiz Flow**
  - Start screen with quiz details and rules
  - Dynamic question progression
  - Real-time feedback on answers
  - Comprehensive summary with detailed scoring

- **Gamification Elements**
  - Points system with positive and negative marking
  - Progress tracking
  - Performance statistics
  - Achievement display
  - Coin rewards system

- **User Experience**
  - Clean, intuitive interface
  - Responsive design for all devices
  - Smooth transitions between questions
  - Clear performance feedback

## 🚀 Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/quiz-flow](https://github.com/thesagardahiwal/Quiz-Flow.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Quiz-Flow
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 🎮 Usage

1. **Starting the Quiz**
   - Click the "Start Quiz" button on the home screen
   - Review the quiz rules and point system
   - Begin answering questions

2. **During the Quiz**
   - Select your answer from the multiple choices
   - See immediate feedback on your selection
   - Track your progress through the question counter

3. **Viewing Results**
   - Complete summary of your performance
   - Detailed breakdown of points earned and deducted
   - Option to retry the quiz

## 📊 Scoring System

- Correct answers: +${quiz.correct_answer_marks} points
- Incorrect answers: -${quiz.negative_marks} points
- Final score calculation: (Correct × ${quiz.correct_answer_marks}) - (Incorrect × ${quiz.negative_marks})

## 🎯 API Integration

The application fetches quiz data from:
```
https://api.jsonserve.com/Uw5CrX
```

The API provides:
- Quiz metadata (title, description, duration)
- Questions and options
- Scoring rules
- Reading materials

## 📱 Screenshots

### Start Screen
<img width="auto" alt="Screenshot 2025-01-31 at 9 44 56 PM" src="https://github.com/user-attachments/assets/7302573d-2041-46e7-b699-7a299695c85e" />


### Question Interface
<img width="1552" alt="Screenshot 2025-01-31 at 9 45 02 PM" src="https://github.com/user-attachments/assets/40ab1d7b-35fa-4ec9-990b-809c230d2c84" />


### Results Summary
<img width="1552" alt="Screenshot 2025-01-31 at 9 45 23 PM" src="https://github.com/user-attachments/assets/9d32d7d2-c728-4954-b381-1d07f9406a2d" />


## 🎥 Demo Video
https://github.com/user-attachments/assets/ff01091d-aafd-4583-9ea7-a8dd1a924d6e


## 🔧 Project Structure

```
quiz-flow/
├── src/
│   ├── components/
│   │   ├── QuizStart.tsx
│   │   ├── QuizQuestion.tsx
│   │   └── QuizSummary.tsx
│   ├── hooks/
│   │   └── useQuiz.ts
│   ├── types/
│   │   └── quiz.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
└── package.json
```

## ✨ Key Features Implementation

### 1. Data Integration
- Robust error handling for API calls
- Type-safe data management with TypeScript
- Loading states for better UX

### 2. Gamification
- Points system with visual feedback
- Progress tracking
- Achievement display
- Performance statistics

### 3. User Interface
- Responsive design
- Animated transitions
- Clear feedback mechanisms
- Intuitive navigation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev)
- UI inspiration from [Testline App](https://testline.io)
- Tailwind CSS for styling
