import { collection, getDocs } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { database } from '../config/firebase-config'
import Task from './Task';

function Todo(props) {

  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    let data = await getDocs(collection(database, 'todo-list'));
    setLoading(false);
    setTodos(data.docs.map(item => ({ ...item.data() })));
  }

  useEffect(() => {
    getData()
    props.setUpdate(false)
  }, [props.update])

  return (
    <div>
      <Task
        loading={loading}
        todos={todos}
      />
    </div>
  )
}

export default Todo