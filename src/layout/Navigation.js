import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../style/navigation.css'
import arrowImg from '../images/arrow.png'
import spiderImg from '../images/spider.png'


class Navigation extends Component {
    state = { 
        active:false,
     }
     handleHideMenu=()=>{
         this.setState(prevState => {
             return { active: !prevState.active };
         });
     }

    list=[
        {type:'NavLink',name:'Cytaty', path:"/", exact:true, class:'dark'},
        {type:'span',name:'szukajcie a znajdziecie',class:'hide'},
        {type:'NavLink',name:'Do pracy', path:"/praca"},
        {type:'image',name:'korona',style:{border:'none'},src:spiderImg,class:"navArrow"},
        {type:'span',name:'To po­między wier­sza­mi uk­ry­te są strzępy prawdy…',class:'hide',style:{border:'none'}},
        {type:'a',name:'Twórca', href:"/#twórca", class:'dark'},
        {type:'span',name:'I na­wet ciemną nocą na niebie są uk­ry­te białe chmury.', class:'dark hide mobileNavHide'},
      
       
        {type:'span',name:'Znajdź cytat na chwilę wolnego czasu', style:{fontSize:'0.6em',textAlign:'center'}},
        {type:'NavLink',name:'Książki', path:"/ksiazki",class:'dark'},
        {type:'NavLink',name:'Stoicy', path:"/stoicy"},
        {type:'NavLink',name:'Insta', path:"/insta"},
        {type:'NavLink',name:'Filozoficzne', path:"/filozoficzne"},
        {type:'NavLink',name:'Kontakt', path:"/kontakt",},
        {type:'image',name:'arrow',class:"navArrow mobileNavHide", src:arrowImg, click:this.handleHideMenu},
        
    ]
    render(){
    const navigation = this.list.map(e => {
        if(e.type==='NavLink') return(<li key={e.name} style={e.style} className={e.class} onClick={this.handleHideMenu}><NavLink exact={e.exact} to={e.path} >{e.name}</NavLink></li>)
        else if(e.type==='span') return(<li key={e.name} style={e.style} className={e.class}><span>{e.name}</span></li>)
        else if(e.type==='image') return(<li key={e.name} style={e.style} className={e.class} onClick={e.click}><span><img alt={e.name} src={e.src}></img></span></li>)
        if(e.type==='a') return(<li key={e.name} style={e.style} className={e.class}><a href={e.href}>{e.name}</a></li>)
        else return null;
    })
    return ( 
        <ul className={this.state.active?'navigation':'navigation hide'}>
            {navigation}
        </ul>
     );
    }
}
 
export default Navigation;