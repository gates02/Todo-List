import * as React from 'react';
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

type Todo = {
    id: number;
    description: string;
    active: boolean;
}
type ParameterProps ={
    list: Todo[]
    onToggle: (id:number)=>void
}
const text = {
};
const checkedtext = {
    color: "grey",
    textDecoration: "line-through"
};

export default function ShowList({list, onToggle}:ParameterProps) {
    return(
        <List>{
            list.map(todo=>(
            <ListItem key={todo.id}>
                <ListItemIcon>
                    <Checkbox checked={todo.active} onChange={()=>onToggle(todo.id)} color='default' />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ style: todo.active? checkedtext : text}} primary={todo.description}/>
            </ListItem>
            ))}
        </List>
    )
}
