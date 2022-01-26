// type Todo ={
//   id:number,
//   title: string,
//   done: boolean
// }// 이건 타입 별칭

interface Todo{
  id:number,
  title: string,
  done: boolean
}
//중복되는 코드를, 인터페이스를 사용하여 줄임.

let todoItems : Todo[];




// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];//배열
  return todos;
}

// crud methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(
  todo : Todo) :void {
  todoItems.push(todo);
}

function deleteTodo(index:number) :void {
  todoItems.splice(index, 1);
}

function completeTodo(
  index: number,
  todo : Todo): void {
  
    todo.done = true;
    todoItems.splice(index, 1, todo);
}

//  첫번쨰 출력
// business logic
function logFirstTodo() : object {
  return todoItems[0];
}

// 완료된 것들만 보여주기
//객체배열
function showCompleted(): Todo[] {

  // todoItems.filter(function(item){
  //   if(item.done)
  //   return item;
  // });

  return todoItems.filter(item => item.done);
  //filter => 특정 조건에 해당하는 아이만 필터링하는 것.
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() :void{
  
  const item1 ={
    id: 4,
    title: '_',
    done: false
  }
  addTodo(item1);
  addTodo({id: 5, title: '_5', done: false})
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
}

// NOTE: 유틸 함수
function log():void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();



//node는 웹브밖 js를 실행시킬 수 있는 환경