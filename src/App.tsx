import * as React from 'react';
import {useRef, useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import ShowList from "./ShowList";
import {Title, CompleteNumber, TotalBox} from "./Style";

type Todo = {
    id: number;
    description: string;
    active: boolean;
}
const TodoList:Todo[]=[
    {
        id: 1,
        description: "Todolist 완성하기",
        active: true
    },
    {
        id: 2,
        description: "Todolist 잘 만들기",
        active: true
    },
    {
        id: 3,
        description: "스터디 참가하기",
        active: false
    }
]

function App() {
    const [input, setInput] = useState<string>('');
    const [todolist, setTodolist] = useState<Todo[]>(TodoList);
    const nextId=useRef(4);

    const active: number =todolist.filter(todo=> todo.active).length;
    const total: number =todolist.length;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInput(value);
    };

    const onCreate = () => {
        if(input!=="") {
            const newtodo: Todo = {
                id: nextId.current,
                description: input,
                active: false
            }
            setTodolist(todolist => todolist.concat(newtodo))
            setInput('');
            nextId.current += 1;
        }
    };

    const onToggle = (id:number) => {
        setTodolist(
            todolist.map(todo =>
                todo.id === id ? { ...todo, active: !todo.active } : todo
            )
        )
    }

    return (
        <TotalBox>
            <Title>TODO List</Title>
            <CompleteNumber>완료된 개수: {active}/{total}</CompleteNumber>

            <ShowList list={todolist} onToggle={onToggle}/>

            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <TextField id="outlined-basic" label="todo" variant="filled" value={input} onChange={onChange}/>
                <Button variant="contained" onClick={onCreate}>추가</Button>
            </Box>

         </TotalBox>
    );
}

export default App;