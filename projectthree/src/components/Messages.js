import React, { useState } from 'react';
import '../styles/messages.css';
//u will see a lot fo comments here since there were a lot of if else statements and it is fun to write out in english then code it
function Messages() {
  const [lists, setLists] = useState([
    { id: 1, name: "Quick Tasks", tasks: ["Finish hackathon project", "Pack for NYC"] },
    { id: 2, name: "Shopping List", tasks: ["Milk", "Eggs", "Bread"] },
    { id: 3, name: "Goals", tasks: ["Learn React", "Build portfolio"] }
  ]);
  
  const [selectedList, setSelectedList] = useState(null); //which task list is currently selected
  const [newTask, setNewTask] = useState(''); //new task input 
  const [newListName, setNewListName] = useState(''); //new list input

  const addTask = () => { //to the selected list add a new task (easy bec used this in last project too)
    if (newTask.trim() && selectedList) { //trim to avoid empty space
      const updatedLists = lists.map(list => 
        list.id === selectedList.id 
          ? { ...list, tasks: [...list.tasks, newTask.trim()] } //task added to task array
          : list 
      );
      setLists(updatedLists); //new task added will be added to list so hv to update list
      setSelectedList(updatedLists.find(list => list.id === selectedList.id)); //reflects the new task
      setNewTask(''); //and the placeholder becomes empty
    }
  };

  const deleteTask = (taskIndex) => { //to delete a task from selected list
    if (selectedList) { //if list selected
      const updatedLists = lists.map(list => //find list
        list.id === selectedList.id //if list is found
          ? { ...list, tasks: list.tasks.filter((_, index) => index !== taskIndex) } //find the task by index and filter it out
          : list
      );
      setLists(updatedLists); //update list by removing that task
      setSelectedList(updatedLists.find(list => list.id === selectedList.id)); //shows list without the task deleted
    }
  };

  const addList = () => { //to add a new list
    if (newListName.trim()) { //only if input is not empty
      const newList = { id: Date.now(), name: newListName, tasks: [] }; //new list object, unique id using timestamp because we dont hv a backend so there r no auto ids
      setLists([...lists, newList]); //list adds 
      setNewListName(''); //placeholder empty
    }
  };

  return (
    <div className="messages-page">
      <div className="dm-sidebar">
        <div className="dm-header"> <span className='fake-heading'>Messages</span> <span className="real-heading">Task List</span> </div>
        <div className="dm-list">
          {lists.map(list => ( //to show each list
            <div
              key={list.id} //the unique key
              className={`dm-item ${selectedList?.id === list.id ? 'active' : ''}`} //if seleced list = current list, highlight
              onClick={() => setSelectedList(list)} //selected list = current list on click
            >
              
              <div className="dm-avatar">💬</div> 
              <div className="dm-info"> 
                <div className="dm-name">{list.name}</div> 
                <div className="dm-preview">{list.tasks.length} tasks</div>
              </div>
              
            </div>
          ))}
        </div>


        <div className="add-list-section"> 
          <input
            className="add-list-input"
            type="text"
            placeholder="New list name"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
          />
          <button className="add-list-btn" onClick={addList}>New List</button>
        </div>
      </div>

      <div className="task-area">
        {selectedList ? (
          <>
            <div className="task-header">{selectedList.name}</div>
            <div className="task-list">
              {selectedList.tasks.map((task, index) => (
                <div key={index} className="task-item">
                  <input type="checkbox" className="task-checkbox" />
                  <span className="task-text">{task}</span>
                  <button className="task-delete" onClick={() => deleteTask(index)}>Delete</button>
                </div>
              ))}
            </div>
            <div className="add-task-section">
              <input
                className="task-input"
                type="text"
                placeholder="Add a task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
              />
              <button className="add-task-btn" onClick={addTask}>Add</button>
            </div>
          </>
        ) : (
          <div className="no-selection">Select a list to view tasks</div> //the way ig shows it when no dm is selected
        )}
      </div>
    </div>
  );
}

export default Messages;