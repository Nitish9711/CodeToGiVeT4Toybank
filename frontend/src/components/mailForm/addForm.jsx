import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios';

import "./mailForm.scss"

function AddForm({ type, id, setClose }) {
    const [email, setemail] = React.useState("");
    const handleOnGroundSubmit = async () => {
        const payload = {
            id,
            email
        }
        try {
            const response = await axios.post(`/onGroundEvents/assignVolunteer`, payload, { withCredentials: true });
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            window.alert("User Not Found");
            console.log(error);
        }
    }

    const handleVirtualSubmit = async () => {
        const payload = {
            id,
            email
        }
        try {
            const response = await axios.post(`/virtualEvents/assignVolunteer`, payload, { withCredentials: true });
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            window.alert("User Not Found");
            console.log(error);
        }
    }
    const handleSubmit = async () => {

        type === "onGround" ? handleOnGroundSubmit() : handleVirtualSubmit();
        setClose(false);
    }
    return (
        <div className="mailformLayout">
            <form>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    fullWidth
                    placeholder='Enter the email ID of volunteer'
                    style={{ marginBottom: 20 }}
                    value={email}
                    onChange={(e) => {
                        setemail(e.target.value)
                    }}
                />

                <Button variant="contained" color="error" endIcon={<AddCircleOutlineIcon />} onClick={handleSubmit}>
                    Add
                </Button>
            </form>
        </div>
    )
}

export default AddForm