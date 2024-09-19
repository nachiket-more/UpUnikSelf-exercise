"use client";

import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import Modal from "./Modal";
import { fetchTodos, addTodo, toggleComplete, deleteTodo, updateTodo } from '../handlers/todoHandlers';

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const TodoList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState("");
    const [editTodoId, setEditTodoId] = useState<number | null>(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [todos, setTodos] = useState<Todo[]>([]);

    const handleFetchTodo = async () => {
        try {
            const data = await fetchTodos();
            setTodos(data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    }


    const handleAddTodo = async (task: string) => {
        try {
            await addTodo(task);
            await handleFetchTodo();
        } catch (error) {
            console.error('Error adding items:', error);
        }
    }

    const handleToggleComplete = async (id: number) => {
        try {
            await toggleComplete(id);
            await handleFetchTodo();
        } catch (error) {
            console.error('Error updating items:', error);
        }
    };

    const handleDeleteTodo = async (id: number) => {
        try {
            await deleteTodo(id);
            await handleFetchTodo();
        } catch (error) {
            console.error('Error deleting items:', error);
        }
    };

    const handleUpdateTodo = async (updatedTask: string, editTodoId: number) => {
        if (editTodoId != null) {
            try {
                await updateTodo(updatedTask, editTodoId);
                await handleFetchTodo();
                closeModal();
            } catch (error) {
                console.error('Error updating item:', error);
            }
        }
    };

    const editTodo = (id: number, task: string) => {
        setEditTodoId(id);
        setCurrentTask(task);
        openModal();
    };

    useEffect(() => {
        handleFetchTodo()
    }, []);

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

            <TodoForm onAdd={handleAddTodo} />

            <ul className="space-y-2 mt-4">
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <li
                            className={`p-3 flex justify-between items-center ${todo.completed ? "line-through text-gray-500" : ""
                                }`}
                        >

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => {
                                        handleToggleComplete(todo.id);
                                    }}
                                    className="mr-2"
                                />
                                <span>{todo.task}</span>
                            </div>


                            <div className="flex items-center space-x-4">
                                <PencilSquareIcon
                                    onClick={() => editTodo(todo.id, todo.task)}
                                    className="h-5 w-5 text-blue-500 cursor-pointer"
                                />
                                <TrashIcon
                                    onClick={() => handleDeleteTodo(todo.id)}
                                    className="h-5 w-5 text-white cursor-pointer"
                                />
                            </div>
                        </li>

                        <Modal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            task={currentTask}
                            editTodoId={editTodoId ?? 0}
                            onUpdate={handleUpdateTodo}
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
