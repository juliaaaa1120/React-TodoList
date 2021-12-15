import api from "./api";

export const getTodos = () => {
    return api.get("/todos");
}

// item => {text: "julia", done: "false"}
export const addTodo = (item) => {
    return api.post("/todos", item);
};

export const updateStatus = (item) => {
    return api.put("/todos/" + item.id, { done: item.done });
};

export const removeTodo = (id) => {
    return api.delete("/todos/" + id);
};

