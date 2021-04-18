import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase"
import 'firebase/firestore';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [prac, setPrac] = useState([])
  const [currentUserdb, setCurrentUserdb] = useState()
  const usersRef = db.collection('users');
  const [loading, setLoading] = useState(true);

  const signup = async (email, password, role, other) => {
    const authResult = await auth.createUserWithEmailAndPassword(email, password);
    usersRef.doc(authResult.user.uid)
        .set({
            uid: authResult.user.uid,
            email: email,
            role: role,
            ...other
        });
    return authResult;
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }
  function logout() {
    return auth.signOut()
  }

  function findPract(job){
    let pracArr = [];
    usersRef.where('job', '==', job).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {pracArr.push({...(doc.data())})})
    setPrac(pracArr)
    })
    return pracArr;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( async user => {
      if(user){
      setCurrentUser(user);
      let userdb = {};
      await usersRef.where('uid', '==', user.uid).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {userdb = {...userdb, ...(doc.data()) } } )
        setCurrentUserdb(userdb)
      })
    }
      setLoading(false);
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    currentUserdb,
    signup,
    login,
    logout,
    findPract
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
