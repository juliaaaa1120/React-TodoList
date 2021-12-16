import api from "./api";

export const getTodos = () => {
    return api.get("/todos");
}

// item => {text: "julia", done: "false"}
export const addTodo = (item) => {
    return api.post("/todos", item);
};

export const updateTodo = (item) => {
    return api.put("/todos/" + item.id, item);
};

export const removeTodo = (id) => {
    return api.delete("/todos/" + id);
};

