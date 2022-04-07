//import {react} from React;
import React from "react";
import AddTodo from "./AddToDo";
import './ListToDo.scss'; 
import { ToastContainer, toast } from 'react-toastify';
import Color from "../HOC/Color";

class ListTodo extends React.Component{
    
    state={
        listTodos:[
            {id:'todo1',title:'Doing homework '},
            {id:'todo2',title:'Making video '},
            {id:'todo3',title:'Fixing bugs '},
        ],
        editToDo:{

        }
    }
    addNewToDo=(todo)=>{
        this.setState({
            listTodos:[...this.state.listTodos,todo]
        })
        toast.success("Wow so easy!");
    }
    handleDeleteToDo=(todo)=>{
        let currentToDos=this.state.listTodos;
        currentToDos=currentToDos.filter(item=>item.id !== todo.id)
        this.setState({
            listTodos: currentToDos
        })
        toast.success("Delete succeed!");
    } 
    handleEditToDo=(todo)=>{
        let {editToDo,listTodos}=this.state;
        let isEmptyObj= Object.keys(editToDo).length===0;
        //save
        if(isEmptyObj===false && editToDo.id===todo.id){
            
            let listTodosCopy=[...listTodos];
            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            //Log object to Console. 
            listTodosCopy[objIndex].title = editToDo.title;

            this.setState({
                listTodos:listTodosCopy,
                editToDo:{}
            })
            toast.success("Update todo succeed!");
            return ;
        } 
            this.setState({
            editToDo:todo
            }) 
    }
    handleOnchangeEditToDo=(event)=>{
        let editToDoCopy={...this.state.editToDo};
        editToDoCopy.title=event.target.value;
        this.setState({
            editToDo:editToDoCopy
        })
    }

    render() {
        let {listTodos,editToDo}=this.state;
        //let listTodos=this.state.listTodos
        let isEmptyObj= Object.keys(editToDo).length===0;
        console.log('>>> check emppty object',isEmptyObj)

        return(
            <>
                <p>
                     Hihihi Todo apps and save to reload abc.
                </p>
             
            <div className="list-todo-container">
                <AddTodo
                    addNewToDo={this.addNewToDo} 
                />
                <div className="list-todo-content">
                    { listTodos && listTodos.length > 0 &&
                        listTodos.map((item,index)=>{
                            return(
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj===true  ? 
                                    <span>{index + 1} - {item.title}</span>
                                    :
                                    
                                    < >
                                        {
                                            editToDo.id===item.id ?
                                            <span>
                                            {index+1}-
                                            <input 
                                                value={editToDo.title}
                                                onChange={(event)=>this.handleOnchangeEditToDo(event)}
                                            />
                                            </span>
                                            :
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                        }
                                        
                                    </>
                                    }    
                                    <button className="edit"
                                        onClick={()=>this.handleEditToDo(item)}
                                    >   {isEmptyObj===false && editToDo.id===item.id ?
                                        'Save':'Edit'}
                                        </button>
                                    <button className="delete"
                                        onClick={()=>this.handleDeleteToDo(item)}
                                    >Delete</button>

                                </div>          
                            )
                        })    
                    }

                    
                </div>
            </div>
            </>        
        )
        
        
    }
}

export default ListTodo;