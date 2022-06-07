import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

import "./mailForm.scss"

function MailForm() {
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
                />
               
                <TextField
                    required
                    id="outlined-required"
                    label="Body"
                    fullWidth
                    placeholder='Enter the body'
                    style={{ marginBottom: 20 }}
                    multiline rows={5}
                />
                <Button variant="contained" color="error" endIcon={<MailIcon />}>
                    Send Mail
                </Button>
            </form>
        </div>
    )
}

export default MailForm