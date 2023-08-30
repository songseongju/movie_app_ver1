import React from 'react';

class Detail extends React.Component {
    componentDidMount(){
        const { location , history} = this.props;

        if(location.state === undefined) {
            history.push('/');
        }
    }



render(){

    const {location} = this.props;
    if (location.state){
    return <center> <h1>
        <span>{location.state.title}</span>
        </h1>
        </center>
     }else{
        
        return null;

     }
       
       
}
}
export default Detail;