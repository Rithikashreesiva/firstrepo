import React,{Component}from'react'
import './DesignComponent.css'
export class DesignComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            btnStyle:{
                width:'200px',
                height:'50px',
                border:'2px solid green',
                borderRadius:'5px',
                fontSize:'12px'
            }
        }
    }
    render(){
        return(
            <>
            <button style={this.state.btnStyle}>With CSS</button>
            <button className="button">Style With class</button>
            <button type="button" className="btn btn-primary"></button>
            </>
        )
    }
}
export default DesignComponent