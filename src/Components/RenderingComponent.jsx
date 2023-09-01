import React,{Component}from'react'
export class RenderingComponent extends Component{
    constructor(props){
        super(props)
        {
            this.state={
                text:"condition",
                show:false,
                fruits:["Apple","Orange","Grapes","Mango"]
            }
        }
    }
    changeShow(){
        this.setState({
            show:!this.state.show
        })
    }
    render()
    {
        return(
            <>
            <h1>Fruits</h1>
            <u1>
                <l1>Apple</l1>
                <l1>Orange</l1>
                <li>Grapes</li>
                <li>Mango</li>
            </u1>
            {
                this.state.fruits.map(fruit=>{
                    return<li>{fruit}</li>
                })
            }
            <div>RenderingComponent</div>
            {this.state.show&&this.state.text}
            <button onClick={()=>this.changeShow()}>{this.state.show?'Hide':'Show'}show</button>
            </>
        )
    }
}
export default RenderingComponent