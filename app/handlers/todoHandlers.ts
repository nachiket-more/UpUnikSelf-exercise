export const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
};

export const addTodo = async (task: string) => {
    const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
    });
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
};

export const toggleComplete = async (id: number) => {
    const response = await fetch(`/api/todos?id=${id}`, {
        method: "PATCH",
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
};

export const deleteTodo = async (id: number) => {
    const response = await fetch(`/api/todos?id=${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
};

export const updateTodo = async (updatedTask: string, editTodoId: number) => {
    const response = await fetch(`/api/todos?id=${editTodoId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ updatedTask }),
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
};
