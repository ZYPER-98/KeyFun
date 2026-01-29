# ⌨️ Speed Typing Test

Think you have fast fingers? **Speed Typing Test** is a sleek web application designed to test your typing accuracy and speed in real-time. It fetches unique quotes on the fly and challenges you to beat the clock!

## ✨ Key Features

* **Dynamic Quote Generation**: Uses a remote API to fetch random quotes, ensuring every test is a fresh challenge.
* **Live Timer**: A precise second-by-second counter that tracks exactly how long it takes you to finish.
* **Smart Validation**: Instantly checks your input against the target quote to ensure 100% accuracy.
* **Seamless Reset**: Reset the game at any time to get a brand-new quote and restart the clock.
* **Smooth UX**: Features a loading spinner to handle API fetch times gracefully, providing a professional feel.

## 🛠️ Built With

* **HTML5 & CSS3**: Custom-styled with a modern purple gradient and Google Fonts (**Roboto**).
* **JavaScript (Async/Await & Fetch)**: Integrated with external APIs to fetch dynamic content.
* **Bootstrap 4**: For a responsive layout that works across all device sizes.
* **Timers (`setInterval`)**: Core logic for the real-time counting mechanism.

## 🚀 How to Play

1. **Wait for the Quote**: As soon as the page loads, a random quote will appear in the text area.
2. **Start Typing**: The timer starts immediately! Type the quote exactly as it appears into the text box.
3. **Submit**: Hit the **Submit** button when you're finished.
* If correct: You'll see your final time.
* If incorrect: The app will nudge you to fix your mistakes.


4. **Go Again**: Click **Reset** to clear the board and try a new quote.

## 📂 Project Files

```text
.
├── fun.html    # Layout including the timer, display area, and controls
├── fun.css     # Styling for the gradients, buttons, and typography
└── fun.js      # The "brain" — handles API calls, timer logic, and validation

```

## 📝 Learning Highlights

This project demonstrates proficiency in:

* Handling **Asynchronous JavaScript** (Fetch API).
* Managing **Global State** (counters and intervals).
* **DOM Manipulation** to update UI elements based on user performance.
