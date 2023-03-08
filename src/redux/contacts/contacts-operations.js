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
    async({name, phone}, {rejectWithValue}) => {
        try {
            const result = await api.addContact({name, phone});
            return result;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    },
    {
        condition: ({name}, {getState}) => {
            const {contacts} = getState();
            const isPresentContact = contacts.items.find(element => 
                element.name.toLowerCase() === name.toLowerCase()
            );
    
            if (isPresentContact) { 
                alert('Contact is already exist!')
                return false;
            }
        }
    }
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