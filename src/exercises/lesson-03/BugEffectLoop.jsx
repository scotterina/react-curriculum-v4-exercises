//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
//This re-renders because the useEffect has no dependency array or terms that will let it know when to run, so it runs after every render.
//Since it updates the state each time, it causes another render, creating an ongoing loop.
//Adding [] makes it run only once when the component loads.
