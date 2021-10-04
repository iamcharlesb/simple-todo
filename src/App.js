import {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const ListView = ({list, deleteItem}) => {

  console.log('list - ', list)

  return (
    <ul className="list">
      {
        list && list.map((item, index) => {
          return (
            <li key={index}>
              <input type="radio" />
              <span>{item}</span> <button onClick={() => deleteItem(index)}>X</button>
            </li>
          )
        })
      }
    </ul>
  );
}

const TodoView = () => {

  const [list, setList] = useState([]);

  const deleteItem = (index) => {

    console.log('delete - ', list.slice(index,1) );

    const newArr = list.filter((item, id) => index !== id);
    setList([...newArr]);

  }

  return(<div>
    <h1>Todo List</h1>

    <input type="text" onKeyUp={(e) => e.code == 'Enter' ? setList([...list, e.target.value]) : '' } /> 

    <ListView list={list} deleteItem={deleteItem} />

    {/*
    <ul>
      {
        list && list.map((item, index) => {
          return (<li key={index}>
            <input type="text" defaultValue={item} onKeyUp={(e) => {
                
                if( e.code != 'Enter' ) 
                  return;

                list[index] = e.target.value
                setList([...list])

            }} /> 
          </li>);
        })
      }
    </ul>
    */}

  </div>);
}

function App() {
  return (
    <div className="App">
      <TodoView />
    </div>
  );
}

export default App;
