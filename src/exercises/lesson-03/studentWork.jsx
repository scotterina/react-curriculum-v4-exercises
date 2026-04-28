//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Impport components here
import BugEffectLoop from './BugEffectLoop';
import BugMutatedState from './BugMutatedState';
import BugProps from './BugProps';

export default function StudentWork() {
  return (
    <div>
      {/* add components here */}
      <BugEffectLoop />
      <BugMutatedState />
      <BugProps />
      <h1>Lesson 03 Bugs</h1>

      <p>
        Bug 1 Explanation: This re-renders because the useEffect has no
        dependency array or terms that will let it know when to run, so it runs
        after every render. Since it updates the state each time, it causes
        another render, creating an ongoing loop. Adding [] makes it run only
        once when the component loads. Bug 2 Explanation: State should not be
        manually changed as it can cause updates to be missed The setCount
        function be be used to ensure that updates are tracked and renders
        correctly Bug 3 Explanation: The message was stored in a normal variable
        instead of state. React doesn’ t track normal variables, so changing it
        doesn’t update the UI.
      </p>
    </div>
  );
}
