import React, { useEffect, useState } from 'react';

const UsersForm = ({addUser, userEdit, selectUser, updateUser}) => {

    const [ email, setEmail ] = useState ("")
    const [ password, setPassword ] = useState ("")
    const [ firstName, setFirstName ] = useState ("")
    const [ lastName, setLastName ] = useState ("")
    const [ birthday, setBirthday ] = useState ("")
    
    useEffect(() => {
        if(userEdit){
            setEmail(userEdit.email)
            setPassword(userEdit.password)
            setFirstName(userEdit.first_name)
            setLastName(userEdit.last_name)
            setBirthday(userEdit.birthday)
        }else{
            setEmail("")
            setPassword("")
            setFirstName("")
            setLastName("")
            setBirthday("")
        }
    }, [userEdit])

    const submit = e => {
        e.preventDefault()

        const user = {
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            birthday
        }
        if(userEdit){
            user.id = userEdit.id;
            updateUser(user);
        }else{
            addUser(user);
        }
    }

    return (
        <div className='inputs'>
            <form onSubmit={submit}>
                <div className='input-container'>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                    id='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    />
                </div>

                <div className='input-container'>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password} 
                    />
                </div>

                <div className='input-container'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                    id="firstName"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName} 
                    />
                </div>

                <div className='input-container'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"
                    id='lastName'
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    />
                </div>

                <div className='input-container'>
                    <label htmlFor="birthday">Birthday</label>
                    <input type="text" 
                    id='birthday'
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}  
                    />
                </div>

                <button><i class="fa-solid fa-share"></i></button>
                {
                    userEdit &&
                    <button className='cancel' type='button'
                    onClick={() => selectUser(null)}
                    ><i class="fa-solid fa-ban"></i>
                    </button>
                }
            </form>
        </div>
    );
};

export default UsersForm;