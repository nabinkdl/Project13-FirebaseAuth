import React, { useState } from 'react'
import { auth } from './firebase-confi'
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut        
  } from 'firebase/auth'

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  /// currently login user / local
  const [userQ, setUserQ] = useState ({})
  onAuthStateChanged(auth, (currentUser) => {
    setUserQ(currentUser)
  })

  const logout   = async () => {await signOut(auth)};

  const register = async () => {try
                               {const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);   console.log(user)}
                               catch(error){ console.log(error.message); }
                               };

  const login = async () => {try
                            {const user = await signInWithEmailAndPassword(auth, registerEmail, registerPassword);   console.log(user)}
                            catch(error){ console.log(error.message); } 
                            };
  


  return (
    <div className="App">
    <div>
      <h3> Register User </h3>
      <input
        placeholder="Email..."
        onChange={(event) => {
          setRegisterEmail(event.target.value)
        }}
       /> 
      <input
        placeholder="Password..."
        onChange={(event) => {
          setRegisterPassword(event.target.value)
        }}
      />
      <button onClick={register}> Create User</button> 
    </div>



    <div>
          <h3> Login </h3>
          <input
            placeholder="Email..."
            onChange={(event) => {setLoginEmail(event.target.value)}}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {setLoginPassword(event.target.value)}}
          />
          <button onClick={loginEmail} > Login</button>
    </div>

    <h4> User Logged In: </h4>
    {/* <h3>{auth.currentUser.email}</h3>      user login email Shows */}
    {/* <h3>{userQ.email}</h3>  */}
    {/* if user has email show it or else chill => ?. */}
    <h3>{userQ?.email}</h3>  
    <button onClick={logout} > Sign Out </button>
  </div>
  )
}

export default App