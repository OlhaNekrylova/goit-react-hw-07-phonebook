import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/contacts-api";

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetchAll",
    async(_, thunkAPI) => {
        try {
            const data = await api.fetchContacts();
            return data;
        }
        catch({response}) {
            return thunkAPI.rejectWithValue(response.data);
        }
    }
);

export const fetchAddContact = createAsyncThunk(
    "contacts/addContact",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    },
    // {
    //     condition: ({title, author}, {getState}) => {
    //         const {books} = getState();
    //         const normalizedTitle = title.toLowerCase();
    //         const normalizedAuthor = author.toLowerCase();
    //         const result = books.items.find(({ title, author }) => {
    //             return (title.toLowerCase() === normalizedTitle && author.toLowerCase() === normalizedAuthor)
    //         })
    //         if(result){
    //             alert(`${title}. Author: ${author} is already ixist`);
    //             return false;
    //         }
    //     }
    // }
);

export const fetchDeleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async(id, {rejectWithValue}) => {
        try {
            await api.deleteContact(id);
            return id;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    }
);