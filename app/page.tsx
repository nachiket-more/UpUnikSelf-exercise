import TodoList from './components/TodoList';

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gray-800 p-10">
        <TodoList />
      </main>
    </div>
  );
}
