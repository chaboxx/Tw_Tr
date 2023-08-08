"use server";

export const addTodo = async () => {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("ga");
    }, 5000),
  );
  console.log("Hola Mundo");
};
