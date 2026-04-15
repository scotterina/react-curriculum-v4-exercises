import SnackHeader from './SnackHeader';

function SnackList() {
  const snacks = [
    { id: 1, name: 'ice cream', rank: 4 },
    { id: 2, name: 'york peppermint patties', rank: 3 },
    { id: 3, name: "hershey's cookies and cream", rank: 2 },
    { id: 4, name: "reese's", rank: 1 },
  ];
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <div>
      <SnackHeader />
      <ul>
        {sortedSnacks.map((snack) => (
          <li key={snack.id}>
            {snack.name} - Rank: {snack.rank}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SnackList;
