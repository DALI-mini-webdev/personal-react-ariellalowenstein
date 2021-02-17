import React, { Component } from 'react' ;
import firebase from '../firebase/index';
import ToDoPost from './ToDoPost';
import '../styles.css';


class ToDoBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allToDos: [],
            title: '',
            task: '',
            id: 0
        }
    }

    newTitleFunction = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    newTaskFunction = (event) => {
        this.setState({
            task: event.target.vlaue
        });
    }

    saveNewToDo = () => {
        firebase.db.collection('todo').add({
            title: this.state.title,
            task: this.state.task,
            id: this.state.id
        }).then(ref => {
            console.log('document reference id', ref.id);
            this.setState({
                id: this.state.id + 1
            })
        }).catch((e) => {
            console.log(e);
        });
    }

    fetchToDos = () => {
        const todoList = [];
        firebase.db.collection('todo').get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.data());
                todoList.push(doc.data());
            })
        }).then(() => {
            this.setState({
                allToDos: todoList
            });
        }).catch((e) => {
            console.log(e);
        })

    }

    deleteToDo = (id) => {
        firebase.db.collection('todo').where("id","==", id).get()
        .then(querySnapshot => {
            querySnapshot.docs[0].ref.delete();
        }).then(() => {
            this.setState({
            })
        });
    }

    render() {
        const posts = this.state.allToDos;
        const allPosts = posts.map((todo) => {
            return (
                <ToDoPost 
                title={todo.title}
                task={todo.task}
                delete={this.deleteToDo}
                id={todo.id}
                />
            );
        }
    );

        return (
            <div>
                <p>This is our To Do Board!</p>
                <p>Add a New To Do:</p>

                <p>Enter Title of To Do:</p>
                <input type="text" value={this.state.title} onChange={this.newTitleFunction} />

                <p>Enter Task:</p>
                <input type="text" value={this.state.task} onChange={this.newTaskFunction} />

                <button onClick={this.saveNewToDo}>Save!</button>

                <div className='allToDos'>
                    <button onClick={this.fetchToDos}>Show my To Dos</button>
                    {allPosts}
                </div>
            </div>
        );
    }
}

export default ToDoBoard;