//Do not change this component
//Update Parent and Child component so that the button increments the counter in Parent.

import Parent from './Parent';

export default function BugChildParentCommunication() {
  return <Parent />;
}

//explanation: The Parent manages the state and passes the increment function to the Child as a prop.
//The Child calls that function when the button is clicked, which updates the Parent’s state and re-renders the counter.
