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
  const [queriedUserdb, setQueriedUserdb] = useState()
  const [queriedAppointdb, setQueriedAppointdb] = useState()
  const usersRef = db.collection('users');
  const appointmentsRef = db.collection('appointments');
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

  function findPract(job) {
    let pracArr = [];
    usersRef.where('job', '==', job).get().then((snapshot) => {
      snapshot.docs.forEach(doc => { pracArr.push({ ...(doc.data()) }) })
      setPrac(pracArr)
    })
    return pracArr;
  }

  function changeState(patient, date, estado) {
    let query = db.collection('appointments');
    let appId;
    query = query.where('doctorID', '==', currentUserdb.uid);
    query = query.where('pacienteID', '==', patient);
    query = query.where('fecha', '==', date);
    query.get().then((snapshot) => {
      snapshot.docs.forEach(doc => { appId = doc.id })
      appointmentsRef.doc(appId).update({
        estado: estado
      })
      console.log(estado)
    })
  }

  async function agendar(doctor, cita) {
    let query = db.collection('appointments');
    let available = true;
    query = query.where('doctorID', '==', doctor);
    query = query.where('fecha', '==', cita);
    query = query.where('estado', '==', "confirmado");
    await query.get().then((snapshot) => {
      snapshot.docs.forEach(doc => { available = false })
    });
    if (available) {
      appointmentsRef.add({
        pacienteID: currentUserdb.uid,
        doctorID: doctor,
        estado: "pending",
        fecha: cita
      });
    }
    queryAppointInfo(currentUserdb);
  }

  async function queryUserInfo(user) {
    let userdb = {};
    await usersRef.where('uid', '==', user).get().then((snapshot) => {
      snapshot.docs.forEach(doc => { userdb = { ...userdb, ...(doc.data()) } })
      setQueriedUserdb(userdb)
    })
    return userdb;
  }

  function updateUserInfo(datos){
    let changedInfo = {}
    console.log(datos)
    for(const key in datos){
      if(datos[key]!==""){
        changedInfo[key] = datos[key]
      }
    }
    usersRef.doc(currentUserdb.uid).update({
      ...changedInfo
    })
  }

  async function queryAppointInfo(userdb) {
    let appointmentdb = [];
    if (userdb.role === "user") {
      await appointmentsRef.where('pacienteID', '==', userdb.uid).get().then((snapshot) => {
        snapshot.docs.forEach(doc => { appointmentdb.push(doc.data()) })
        setQueriedAppointdb(appointmentdb)
      })
    }
    else {
      await appointmentsRef.where('doctorID', '==', userdb.uid).get().then((snapshot) => {
        snapshot.docs.forEach(doc => { appointmentdb.push(doc.data()) })
        setQueriedAppointdb(appointmentdb)
      })
    }
    return appointmentdb;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        setCurrentUser(user);
        let userdb = {};
        await usersRef.where('uid', '==', user.uid).get().then((snapshot) => {
          snapshot.docs.forEach(doc => { userdb = { ...userdb, ...(doc.data()) } })
          setCurrentUserdb(userdb)
        })
       // queryAppointInfo(userdb);
      }
      setLoading(false);
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    currentUserdb,
    queriedUserdb,
    queriedAppointdb,
    signup,
    login,
    logout,
    findPract,
    agendar,
    queryUserInfo,
    queryAppointInfo,
    changeState,
    updateUserInfo
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
