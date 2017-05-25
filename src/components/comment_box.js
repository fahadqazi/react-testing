import React, { Component } from 'react';

class CommentBox extends Component{
    render(){
        return(
            <div className="commentBox">
                <textarea name="commentBox" id="commentBox" cols="30" rows="10"></textarea>
                <button>Submit</button>
            </div>
        );
    }
}

export default CommentBox;