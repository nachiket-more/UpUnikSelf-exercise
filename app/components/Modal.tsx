"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Modal = ({ isOpen, onClose, task, editTodoId, onUpdate, }: {
    isOpen: boolean; 
    onClose: () => void;
    task: string;
    editTodoId: number,
    onUpdate: (updatedTask: string, editTodoId: number) => void;
}) => {
    if (!isOpen) return null;

    const [updatedTask, setUpdatedTask] = useState<string>(task);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(updatedTask, editTodoId);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
            <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg">

                <XMarkIcon
                    className="h-5 w-5 cursor-pointer absolute top-3 right-3"
                    onClick={onClose}
                />

                <h1 className="text-xl font-bold mb-4">Edit Task</h1>
                <form onSubmit={handleSubmit} className="mb-4">
                    <input
                        type="text"
                        value={updatedTask}
                        onChange={(e) => setUpdatedTask(e.target.value)}
                        className="border text-black p-2 pl-4 pr-4 w-full rounded-full"
                        placeholder="Enter new task..."
                    />
                    <button
                        type="submit"
                        className="mt-4 p-2 bg-green-500 text-white rounded-full w-full"
                    >
                        Update Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
