import React from 'react';


const CreateBook = ({ bookOnChangeForm, bookHandleSubmit }) => {


    return(
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>book</label>
                        <input 
                            type="text" 
                            onChange={(e) => bookOnChangeForm(e)} 
                            name="book" 
                            placeholder="book" 
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input 
                            type="text" 
                            onChange={(e) => bookOnChangeForm(e)} 
                            name="category" 
                            placeholder="category" 
                        />
                    </div>
                    <div className="input-group">
                        <label>author</label>
                        <input 
                            type="text" 
                            onChange={(e) => bookOnChangeForm(e)} 
                            name="author"
                            placeholder="author" 
                        />
                    </div>
                    <button 
                        className="submit-button"
                        onClick= {() => bookHandleSubmit()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateBook;