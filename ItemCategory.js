import clsx from 'clsx';
import { Component } from 'react';
import style from './Category.module.css'
class ItemCategory extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render() { 
        return ( 
           <li onClick={this.props.clickHandle} className={clsx({[style.active]: this.props.data.status})}>{this.props.data.name}</li>
         );
    }
}
 
export default ItemCategory;