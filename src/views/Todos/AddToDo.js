import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
class AddTodo extends React.Component{
    state={
        title: ''
    }
    static propTypes = {
        addNewToDo: PropTypes.any,
    };
    handleOnchangeTitle=(event)=>{
        this.setState({
            title:event.target.value
        })
    }
    handleAddToDo=()=>{ 
        if(!this.state.title){
            //if(undefined/null/empty)=>false
            toast.error(`Missing title's todo!`);
            return;
        }
        let todo={
            id: Math.floor(Math.random()*1001),
            title:this.state.title
        }
        this.props.addNewToDo(todo); 
        this.setState({
            title:''
        })
    }
    render(){
        let{title}=this.state;
        return(

            <>
                <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(event)=> this.handleOnchangeTitle(event)}
                    />
                    <button type="button" className="add"
                        onClick={()=>this.handleAddToDo()}
                    >Add</button>
                </div><br/>
            </>
        )
    }
}
export default AddTodo;
