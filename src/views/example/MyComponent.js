import React from 'react';
import ChildComponents from './ChildComponents';
import AddComponent from './AddComponent';
import PropTypes from 'prop-types';

class MyComponent extends React.Component{
    state={
        // firstName:'',
        // lastName:'',
        arrJobs: [
            {id: 'aJob1',title: 'developer',salary:'500'},
            {id: 'aJob2',title: 'tester',salary:'400'},
            {id: 'aJob3',title: 'pm',salary:'1000'}

        ]
    }
    /* 
        jsx 1 hàm js trả về 1 khối html
        dùng code html trong jsx
    */
    // handleOnchangeName = (event) => {
    //     //cập nhật lại state hiện tại
    //     // merge: gom lại
    //     this.setState({ 
    //         name: event.target.value
    //     })
    // }
    // handleClickButton=()=>{
    //     console.log('hit the button')
    //     alert('click me')
    // }
    addNewJob = (job) => {
        console.log('check job from',job)
        this.setState({
            // ... toán tử copy ptu  sau đó push vào biến sau dấu ,
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    static propTypes = { 
        arrJobs: PropTypes.any,
    };

    deleteAJob =(job)=>{
        let currentJobs=this.state.arrJobs;
        currentJobs=currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs:currentJobs
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('>>run didupdate','prev state: ',prevState,
        'currentstate state', this.state)
    }

    componentDidMount(){
        console.log('>>>run component did mount')
    }
    render() { 
        // re-render 
        // cập nhật sau khi thay đổi input(set lại state)
        // biến state giúp cho web cập nhật ko bị reset
        console.log('>>> call render: ',this.state)
        return (
            // in 1 biến
            
            <>
            {/*event onchange
                    event là của html là 1 callback
                    khi thực hiện hàm onchange thì DOM html sẽ trả 1 event là 1 global

                 */}
            <p> {/* <div className='first'>
                 
                <input value={this.state.name} type='text' onChange={(event)=> this.handleOnchangeName(event)}></input>
                hello my component, my name is:  {this.state['name']}
            </div>
            <div className='second'>
                my youtube channel: {this.state.channel}
            </div>
            <div className='third'>
                <button onClick={()=>{this.handleClickButton()}}>click me</button>
            </div> */}
            </p>  
            <AddComponent
                addNewJob={this.addNewJob}
            />
             
            <ChildComponents  
                arrJobs={this.state.arrJobs}
                deleteAJob={this.deleteAJob}
            /> 
            </>
        )
    }
}

export default MyComponent;