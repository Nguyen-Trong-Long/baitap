import { Component } from "react";

import ItemCategory from "./ItemCategory";
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category:[
                {item: 1, name:'Menu1',satus:false},
                {item: 2, name:'Menu2',satus:false},
                {item: 3, name:'Menu3',satus:false},
                {item: 4, name:'Menu4',satus:false},
            ]
        }
    }
    itemActive(key){
        let _state = this.state.category;
        _state.map((item) => {
            item.status = false;
        })
       _state[key].status = !_state[key].status;
       this.setState({
           category:_state
       })
    }
    render() { 
        return ( 
            <div>
                <ul>
                   {
                       this.state.category.map((item,key) => {
                        //    return <li key={key} className={clsx({[style.active]: item.status})} onClick={(e) => this.itemActive(key,e)}>{item.name}</li>
                        return <ItemCategory key={key} data={item} clickHandle={(e) => this.itemActive(key,e)}/>
                       })
                   }
                </ul>
            </div>
         );
    }
}
 
export default Category;