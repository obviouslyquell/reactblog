import React, {Component} from 'react'
import './app.css'
import AppHeader from '../app-header/'
import Search from '../search-panel'
import PostList from '../post-list'
import PostAddForm from '../post-add-form/post-add-form'

export default class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            DB :[{text:'asdfasdf', important:false , liked:true, id:1},
                {text:'asdfasdfadf', important:false ,liked:false, id:2},
                {text:'asdasfsd123', important:false, liked:false, id:3}],
                term:''
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onUpdateSearch =  this.onUpdateSearch.bind(this)
        this.maxId = 4
    }

    deleteItem(id){
        this.setState(({DB})=>{
            const index = DB.findIndex(e=>e.id===id);
            const before = DB.slice(0,index);
            const after = DB.slice(index + 1)

            const newArr = [...before, ...after];

            return{
                DB: newArr
            }
        })

    }

    addItem(body){
        const newItem ={
            text: body,
            important:false,
            id: this.maxId++
        }
        this.setState(({DB}) =>{
            const newArr = [...DB, newItem];
            return{
                DB:newArr
            }
        })
    }

    onToggleImportant(id){
        console.log(id)
    }
    onToggleLiked(id){
        //console.log(id)
        this.setState(({DB})=>{
            const index = DB.findIndex(e=>e.id===id)
            const old = DB[index];
            const newItem = {...old, liked: !old.liked};
            console.log(newItem)
            const newArr = [...DB.slice(0,index), newItem, ...DB.slice(index + 1)];
            return{
                DB:newArr
            }
        })
    }

    searchPost(items, term){
        if(term.length===0){
            return items
        }
        return items.filter((item)=>{
            return item.text.indexOf(term) > -1
        })
    }

    onUpdateSearch(term){
        this.setState({term})
    }

    render(){
        const {term} = this.state;

        const allLiked = this.state.DB.filter(e=>e.liked).length;
        const allPosts = this.state.DB.length;
        const visiblePosts = this.searchPost(this.state.DB, term)
        return(
            <div className='container'>
                <AppHeader 
                allLiked={allLiked}
                allPosts={allPosts}
                />
                <Search 
                onUpdateSearch={this.onUpdateSearch}/>
                <PostList 
                posts={visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm 
                onAdd={this.addItem}
                />
            </div>
        )
    }
}
