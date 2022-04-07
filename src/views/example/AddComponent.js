import React from "react";
import PropTypes from 'prop-types';
class AddComponent extends React.Component {
    state={
        title:'',
        salary:'', 
    }

    handleChangeTitleJob=(event)=>{
        this.setState({
            title:event.target.value,
        })
    }    
    handleChangeSalary=(event)=>{
        this.setState({
            salary:event.target.value,
        })
    }  
    handleSubmit=(event)=>{
        // ko tải lại web
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            alert('missing required params')
            return;
        }
        console.log('>>>check data input:  ',this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random()*11),
            title:this.state.title,
            salary:this.state.salary
        })    
        this.setState({
            title:'',
            salary:''
        })
    }
    static propTypes = {
        addNewJob: PropTypes.any,
    };
    render() {
        return (
            <form  >
                <label htmlFor="fname">Job`s title:</label><br/>
                <input 
                    type="text" 
                    value={this.state.title}
                    onChange={ (event)=>this.handleChangeTitleJob(event)}
                /><br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input 
                    type="text" 
                    value={this.state.salary}
                    onChange={ (event)=>this.handleChangeSalary(event)}
                />
                <br/><br/>
                <input 
                    type="submit" 
                    value="Sumit "
                    onClick={(event)=>this.handleSubmit(event)}/>
            </form> 
        )
    }
}

export default AddComponent;