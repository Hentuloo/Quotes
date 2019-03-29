import React, { Component } from 'react';
import '../style/drawSection.css'

class Draw extends Component {
    type=this.props.type
    state = {
        id:'',
        quote:'',
        author:'',
        description:'',
        load:false,
    }
     
    handleSubmit=()=>{
        
        const url=`http://localhost/api2/api/POST/random.php?category=${this.props.type}`;
        this.setState({  load:true });
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            
            const {id, quote, description,author} = res.data[0]
            if(this.state.id === id){//if quote is the same 
                this.handleSubmit();
            }else{
                this.setState({ id,quote,author,description,load:false});
            }
        })
        .catch(err=>console.log(err))
    }
    render() { 
        return ( 
            <div className="drawSeciton">
            <aside>
            <span>{this.props.type}</span>
           <button 
           onClick={this.handleSubmit} 
           className={this.state.load?'load':''}>
           <i className="icon-puzzle">LOSUJ</i>
           <i className='icon-spin2'></i>
           </button>
           </aside>
           {this.state.quote&&(
           <article>
            <div className="quote"><p>{this.state.quote}</p><span>~{this.state.author}</span></div>

            {this.state.description&&<div className="quoteDescription">{this.state.description}</div>}
           </article>
           )}
           </div>
         );
    }
}
 
export default Draw;