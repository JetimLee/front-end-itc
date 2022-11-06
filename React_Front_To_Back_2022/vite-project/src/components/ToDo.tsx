import React, { useState, useEffect, useRef } from "react";

export const ToDo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setToDo] = useState({}) as any;

  const isMounted = useRef(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setToDo(data);
            setLoading(false);
          }
        }, 3000);
      });
    //runs when component is unmounted
    return () => {
      console.log(123);
    };
  }, [isMounted]);
  return <div>{loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>}</div>;
};
