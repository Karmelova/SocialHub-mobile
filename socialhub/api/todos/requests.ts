export interface ToDos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getToDos(userId: number) {
  const respone = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  const toDos: ToDos[] = await respone.json();
  return toDos;
}
