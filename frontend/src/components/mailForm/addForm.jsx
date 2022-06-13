import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import axios from 'axios';

import "./mailForm.scss"

function AddForm({ type, id, setClose }) {
    const [email, setemail] = React.useState("");
    const handleSubmit = async () => {
        const payload = {
            id, 
            email
        }
        console.log(payload, type);
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