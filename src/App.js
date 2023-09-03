import FeedbackList from './BradComponent/FeedbackList'
import './App.css';
import FeedbackData from './BradComponent/data/FeedbackData';
import { useState } from 'react';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <header >
        <div className='container'>
          <FeedbackList feedback={feedback} />
        </div>
      </header>
    </>
  );
}

export default App;
