

function InputData() {

    return (
        <div>
            <div>
                <label htmlFor='fname'>First Name: </label>
                <input id='fname' />
            </div>
            <div>
                <label htmlFor='lname'>Last Name: </label>
                <input id='lname' />
            </div>
            <button>Send</button>
            {/* <h2>{document.getElementById('lfname').value}</h2> */}
        </div>
    );
}

export default InputData;