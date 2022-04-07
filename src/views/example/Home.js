import React from "react";
import { withRouter } from "react-router"; 
import PropTypes from 'prop-types';
import Color from "../HOC/Color";
import logo from '../../assets/images/hinhnen1.jpg';
import {connect} from 'react-redux';


class Home extends React.Component{
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.props.history.push('/todo')
    //     },3000)
    // }
    static get propTypes() { 
        return { 
            history: PropTypes.any,  
            dataRedux: PropTypes.any,  
            addUserRedux: PropTypes.any,  
            deleteUserRedux: PropTypes.any,  
        }; 
    }

    handleDeleteUser = (user) => {
        console.log('>>> check user delete: ', user)
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render(){
        // console.log('>>> check props: ',this.props )
        console.log('>>> check props redux ', this.props.dataRedux)
        let listUsers=this.props.dataRedux;
        return(
            <>
            
            <div>
                hello from Homepage ne ne
            </div>
            <div><img src={logo} style={{width:'200px',height:'100px',marginTop:'20px'}}/></div>

            <div>
                {listUsers && listUsers.length>0 &&
                
                listUsers.map((item,index)=>{
                    return(
                        <div key={item.id}>
                            &nbsp;{index+1} {item.name} <span onClick={()=>this.handleDeleteUser(item)}>x</span>
                        </div>
                    )
                })
                }
                <button onClick={() => this.handleCreateUser()}>Add new</button>
            </div>
            </>
        )
    }
}
//HOC : higher order component
// export default withRouter(Home);
// export default Color(Home);
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}
// export default connect(Home);
export default connect(mapStateToProps,mapDispatchToProps)(Color(Home));
