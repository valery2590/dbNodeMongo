import { Mongoose } from 'mongoose';
import React , { Component} from 'react';


class App extends Component {

    constructor (){
        super();
        this.state ={
            title: '',
            description: '',
            tasks: []
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTask(e){
        fetch('/api/tasks',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers : {
                'Accept' : 'application/json',
                'Content-Type':'application/json'
            }
        })
            .then (res => res.json())
            .then (data => {
                console.log(data)
                M.toast({html : 'Task Saved'})
                this.setState({title:'', description:''})
            })
            
            .catch (err => console.log(err))
        e.preventDefault();
    }
 

    componentDidMount(){
       this.fetchTasks(); 
    }

    fetchTasks(){
        fetch('/api/tasks')
        .then(res => res.json())
        .then(data => console.log(data));
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    render(){
        return (
            <div>
                {/*NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Primera App</a>
                    </div>
                </nav> 

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Task Title" value={this.state.title} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder="Task Description" className="materialize-textarea" value={this.state.description}>
                                                </textarea>
                                            </div>
                                        </div>
                                        <button className="btn light-blue darken-4" type="submit">Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return (
                                                <tr>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default App;