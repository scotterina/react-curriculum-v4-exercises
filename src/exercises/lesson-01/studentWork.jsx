export default function StudentWork() {
  let myName = 'Erin';
  let myAge = 32;
  const hobbies = ['Drawing', 'Hiking', 'Gardening'];
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi there, my name is {myName} and I&apos;m {myAge} years old! I&apos;m
        from GA (well actually from MD, but that&apos;s neither here nor there).
        I&apos;m currently learning React with Code the Dream and I&apos;m
        excited to see what&apos;s to come.
      </p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
