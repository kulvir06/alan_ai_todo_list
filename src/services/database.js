import { setDoc, doc, updateDoc, deleteDoc, getDocs, collection, arrayRemove } from "firebase/firestore";
import { app, database } from '../config/firebase-config';

const createTask = async (taskName) => {
    const docRef = doc(database, "todo-list", taskName);

    await setDoc(docRef, {
        name: taskName,
        isComplete: false
    }).then(() => {
        console.log("Task Added to DB");
    }).catch((err) => {
        console.log("error => ", err);
    });
}

const updateTask = async (taskName) => {
    const docRef = doc(database, 'todo-list', taskName);
    await updateDoc(docRef, {
        isComplete: true
    })
}

const deleteTask = async (taskName) => {
    await deleteDoc(doc(database, 'todo-list', taskName));
}
let dataArray = [];
const getTask = () => {
    getTaskList();
    return dataArray;
}
const getTaskList = async () => {
    const data = await getDocs(collection(database, 'todo-list'));
    
    data.forEach(async (doc) => {
        // console.log(doc.data);
        dataArray.push(doc.data());
    });
    // console.log(dataArray + "inside get");  
}

const dbService = {
    createTask,
    updateTask,
    deleteTask,
    getTask
}

export default dbService;