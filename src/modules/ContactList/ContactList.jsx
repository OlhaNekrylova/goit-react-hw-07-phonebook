import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react';

import { fetchAllContacts, fetchDeleteContact } from "../../redux/contacts/contacts-operations";
import { getFilteredContacts } from "../../redux/selectors";


import styles from './ContactList.module.css';

const ContactList = () => {
    
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchAllContacts());
    }, [dispatch])

    const handleDeleteContact = (id) => {
        dispatch(fetchDeleteContact(id));
    }

    const contactList = useSelector(getFilteredContacts);

    return (
        <ul className={styles.list}>
            {contactList.map(({ id, name, number }) => (
                <li 
                key={id}
                className={styles.item}>
                <p className={styles.info}>{name}: {number}</p>
                <button
                    className={styles.button}
                    type="button"
                    onClick={() => handleDeleteContact(id)}
                >
                Delete
                </button>
            </li>
            ))}
        </ul>
    );
};

ContactList.defaultProps = {
    items: []
}

export default ContactList;