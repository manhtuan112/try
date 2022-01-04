import Textfeild from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import Todolist from "./components/TodoList";
import {useState, useCallback, useEffect} from 'react';
import {v4} from 'uuid';
import styled from 'styled-components';


const set = new Set();
const TextfeildStyled = styled(Textfeild)`
  padding: 5px
`;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("effect 1")
    const storageTodoList = localStorage.getItem("TODO_APP");
    if(storageTodoList){
      setTodoList(JSON.parse(storageTodoList))
    }
  }, [])

  useEffect(() => {

    console.log("effect 2")
    localStorage.setItem("TODO_APP", JSON.stringify(todoList));

  }, [todoList]);

  

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  },[]);

  const onAddBtnClick = useCallback(() =>{
    setTodoList([{id: v4(), name: textInput, isCompleted: false}, ...todoList])
    setTextInput("");
  },[textInput, todoList])


  const onCheckBtnClick = useCallback((id)=>{
    setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isCompleted: true} : todo))
  },[])



  return (
    <>
      <h3>Danh sach can lam</h3>
      <TextfeildStyled
        name="add-todo"
        placeholder="Them viec can lam..."
        elemAfterInput={
          <Button isDisabled={!textInput} appearance="primary" onClick={onAddBtnClick}>
            Them
          </Button>
        }
        value={textInput}
        onChange={onTextInputChange}
      ></TextfeildStyled>
      <Todolist todoList={todoList} onCheckBtnClick={onCheckBtnClick}/>
    </>
  );
}

export default App;
