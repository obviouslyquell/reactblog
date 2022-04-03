import React, {Component} from "react";

export default class PostListItem extends Component{
    

    render(){
        const {text, onDelete, onToggleImportant, onToggleLiked, important, liked} = this.props;
        let classNames = 'd-flex app-list-item justify-content-between'
        if(important){
            classNames+=' important'
        }
        if(liked){
            classNames+=' like'
        }
        return(
                <div className={classNames}>
                    <span
                    className="app-list-item-label"
                    onClick={onToggleLiked}>
                    {text} 
                    </span>
                    <div className="d-flex justify-content-center align-items-center">
                        <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                            <i className="fa fa-star"></i>
                        </button>
                        <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
        )
    }
}


