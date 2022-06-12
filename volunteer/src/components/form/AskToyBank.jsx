import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';
import { useState } from 'react';

function MailForm({ EventID, closeForm }) {
    const { user } = useContext(AuthContext);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("")
    const handleSubmit = async () => {
        const payload = {
            message,
            volunteerId: user.id,
            eventId: EventID
        }
        try {
            const response = await axios.post(`/volunteers/askDoubts`, payload, {withCredentials: true});
            console.log(response.data);
            closeForm(false);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="mailformLayout" style={{
            width: "600px",
            display: "flex",
            flexDirection: "column"
        }}>
            <form>
                <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    fullWidth
                    placeholder='Enter the title'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    style={{ marginBottom: 20 }}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Body"
                    fullWidth
                    placeholder='Enter the body'
                    style={{ marginBottom: 20 }}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                    multiline rows={5}
                />
                <Button variant="contained" color="error" endIcon={<MailIcon />} onClick={handleSubmit}>
                    Send Mail
                </Button>
            </form>
        </div>
    )
}

export default MailForm