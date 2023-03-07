import axios from "axios";

const contactsInstance = axios.create({
    baseURL: "https://6403ad803bdc59fa8f2ae78f.mockapi.io/api/contacts/"
})

export const fetchContacts = async()=> {
    const {data} = await contactsInstance.get("/contacts");
    return data;
}

export const addContact = async(data) => {
    const {data: result} = await contactsInstance.post("/contacts", data);
    return result;
}

export const deleteContact = async(id) => {
    const {data} = await contactsInstance.delete(`/contacts/${id}`);
    return data;
}