import React from 'react';


const CreateTodo = ({ todoOnChangeForm, todoHandleSubmit }) => {


    return(
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>todo</label>
                        <input 
                            type="text" 
                            onChange={(e) => todoOnChangeForm(e)} 
                            name="todo" 
                            placeholder="todo" 
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input 
                            type="text" 
                            onChange={(e) => todoOnChangeForm(e)} 
                            name="category" 
                            placeholder="category" 
                        />
                    </div>
                    <div className="input-group">
                        <label>isComplete</label>
                        <input 
                            type="checkbox" 
                            onChange={(e) => todoOnChangeForm(e)} 
                            name="isComplete"
                            placeholder="isComplete" 
                        />
                    </div>
                    <button 
                        className="submit-button"
                        onClick= {() => todoHandleSubmit()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo;