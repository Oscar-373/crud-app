import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {

    const [ firstName, setFirstName ] = useState("");
    const [ LastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ birthday, setBirthday ] = useState("");

    useEffect(() => {
       if(userSelected !== null){
           setFirstName(userSelected.first_name);
           setLastName(userSelected.last_name);
           setEmail(userSelected.email);
           setPassword(userSelected.password);
           setBirthday(userSelected.birthday);
       }else{
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");
       }
    }, [userSelected])

    const submit = e => {
        e.preventDefault();
        const user = {

            first_name: firstName,
            last_name: LastName,
            email,
            password,
            birthday,
            id: Date.now()
        }

        if(userSelected !== null){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then(() => {
            getUsers();
            deselectUser();
            })

        }else{
            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => getUsers())
            .catch(error => console.log(error.response))  
                
        }
        
    }

    
    console.log(userSelected)
    
    return (
        <div className='col-5 text-center ms-5'>
            <h2>New User</h2>
            
            <div class="sticky-sm-top">
                <form onSubmit={submit} className='p-4 bg-info mt-5'>

                    <div className="mb-3">
                        <label htmlFor="first-name" className="form-label">first name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="first-name" 
                            placeholder='first name'
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="last-name" className="form-label">last name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="last-name" 
                            placeholder='last name'
                            onChange={e => setLastName(e.target.value)}
                            value={LastName}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="name@example.com"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">birthday</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="date"
                            onChange={e => setBirthday(e.target.value)}
                            value={birthday}
                        /> 
                    </div>

                    <button className="btn btn-success">Upload</button>
                    
                </form>
            </div>
               
        </div>

    );
};

export default UsersForm;