import React from 'react';
import PropTypes from 'prop-types';
import './Demo.css'
 
class ChildComponents extends React.Component{
     
    static propTypes = {
        name: PropTypes.any,
        age: PropTypes.any,
        arrJobs: PropTypes.any,
        deleteAJob: PropTypes.any
    };
    state={
        showJobs:false
    }
    handleShowHide=(status)=>{
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete= (job) => {
        console.log('>>> handleOnclickDelete: ',job)
        this.props.deleteAJob(job)
    }
    render() { 
        // re-render 
        // cập nhật sau khi thay đổi input(set lại state)
        // biến state giúp cho web cập nhật ko bị reset
        console.log('>>> check props: ',this.props)
        // let name=this.props.name;
        // let age=this.props.age;

        let { arrJobs} = this.props;
        let {showJobs} = this.state;
        let check=showJobs ===true? 'showJobs=true':'showJobs=false';
        console.log('>>>check conditional: ' ,check)
        return (
            // in 1 biến 
            <>
                {showJobs === false ? 
                    <div>
                        <button 
                            className="btn-show" 
                            onClick={() => this.handleShowHide()}>
                            show
                        </button>
                    </div>
                
                :
                    <>
                        <div className="job-lists">
                        {
                            arrJobs.map((item, index) => {
                                if(+item.salary >=500){
                                   return(
                                        <div key={item.id}>
                                            {item.title} -{item.salary} 
                                            <></><span onClick={()=>this.handleOnclickDelete(item)}>x</span>
                                      </div>
                                    )
                                }
                            })
                        }
                        </div>    
                        <div>
                            <button onClick={()=> this.handleShowHide()}>hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}  
  
    
export default ChildComponents;