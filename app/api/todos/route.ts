import { NextRequest, NextResponse } from 'next/server';
import { sampleTodos } from "@/lib/todos";

export async function GET() {
    return NextResponse.json(sampleTodos);
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    const newTodo = {
        id: Date.now(),
        task: body.task,
        completed: false
    }

    sampleTodos.push(newTodo)
    return NextResponse.json(newTodo, { status: 201 })

}

export function DELETE(req: NextRequest) {
    const url = new URL(req.url)
    const idParam = url.searchParams.get('id')

    if (idParam === null) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const id = parseInt(idParam, 10);

    const index = sampleTodos.findIndex((todo) => todo.id === id);

    if (index === -1) {
        return NextResponse.json({ message: "Not found" }, { status: 404 });
    }


    sampleTodos.splice(index, 1);

    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });


}


export async function PATCH(req: NextRequest) {
    const url = new URL(req.url);
    const idParam = url.searchParams.get('id');

    if (idParam === null) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const id = parseInt(idParam, 10);

    const todo = sampleTodos.find((todo) => todo.id === id)

    if (!todo) {
        return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    try {
        const body = await req.json();

        if (body.updatedTask) {
            todo.task = body.updatedTask;
        } else {
            return NextResponse.json({ message: "Invalid request" }, { status: 400 });
        }
    } catch (error) {
        todo.completed = !todo.completed
    }

    return NextResponse.json(todo)
} 