import { useState } from 'react';
import { useTasks } from './hooks/useTasks.jsx';
import { filterTasks } from './utils/filterTasks.js';

import UserProfile from './components/UserProfile.jsx';
import TaskFilterButtons from './components/TaskFilterButtons.jsx';
import TaskItem from './components/TaskItem.jsx';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  const visibleTasks = filterTasks(tasks, filter);

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilterButtons filter={filter} setFilter={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
