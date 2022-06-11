import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios';

import "./mailForm.scss"

function MailForm({type, id}) {
    const [message, setmessage] = React.useState("");
    const [title, settitle] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            message,
            id
        };

        const onGroundMail = async () => {
            try {
                const response = await axios.post(`/onGroundEvents/sendMail`, payload, { withCredentials: true });
                console.log(response.data);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }

        const virtualMail = async () => {
            try {
                const response = await axios.post(`/virtualEvents/sendMail`, payload, { withCredentials: true });
                console.log(response.data);
                // window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }

        type === "onGround" ? onGroundMail() : virtualMail();
    }
    return (
        <div className="mailformLayout">
            <form>
                <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    fullWidth
                    placeholder='Enter the title'
                    style={{ marginBottom: 20 }}
                    value={title}
                    onChange={(e)=>{
                        settitle(e.target.value)
                    }}
                />
               
                <TextField
                    required
                    id="outlined-required"
                    label="Body"
                    fullWidth
                    placeholder='Enter the body'
                    style={{ marginBottom: 20 }}
                    multiline rows={5}
                    value={message}
                    onChange={(e)=>{
                        setmessage(e.target.value)
                    }}
                />
                <Button variant="contained" color="error" endIcon={<MailIcon />} onClick={handleSubmit}>
                    Send Mail
                </Button>
            </form>
        </div>
    )
}

export default MailForm