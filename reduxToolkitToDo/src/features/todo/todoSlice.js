import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {
    todos: [{id:1,text:'Hello World'},],

}


// reducer bigger Version


export const todoSlice = createSlice({
     name : 'todo',
     initialState,
     reducers: {
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text:action.payload // payload in Itself is an object
            }
            state.todos.push(todo);
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id != action.payload)
        },

        updateTodo : (state,action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id==action.payload){
                    todo.text = action.payload
                }
            }
            )
        }

     }
}) 

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;