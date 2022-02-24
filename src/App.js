import alanBtn from '@alan-ai/alan-sdk-web';
import Todo from './components/Todo';
import './App.css';

import React, { useEffect, useState } from 'react';

import dbService from './services/database';


import { app, database } from './config/firebase-config';
import { updateDoc, setDoc, deleteDoc, doc } from 'firebase/firestore';
import TodoList from './components/Todo';

function App() {

  const [update, setUpdate] = useState(false);
  useEffect(() => {
    alanBtn({
      key: "a991019cbfcadb14c31285f4b56e44632e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === 'addTask') {
          const docRef = doc(database, "todo-list", commandData.data);
          setDoc(docRef, {
            name: commandData.data,
            isCompleted: false
          })
            .then(() => {
              setUpdate(true);
            })
        }
        else if (commandData.command === 'deleteTask') {
          deleteDoc(doc(database, 'todo-list', commandData.data))
            .then(() => setUpdate(true));
        }
        else if (commandData.command === 'completeTask') {
          const docRef = doc(database, 'todo-list', commandData.data);
          updateDoc(docRef, {
            isComplete: true
          })
            .then(() => {
              setUpdate(true)
            })

        }
      }
    });
  }, []);

  return (
    <div class="bg-blue-100 h-screen" >
      <p class="italic text-2xl bg-blue-100 text-center">VOICE CONTROLLED TODO LIST</p>
      <p class="text-center">Just say ADD/COMPLETE/DELETE *your task name*</p>
      <div class="bg-blue-100">
        <Todo setUpdate={setUpdate} update={update} />
      </div>
    </div>
  );
}

export default App;
