import React from 'react'
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;

    return (
        <Dialog open={openPopup} maxWidth="md" sx={{
            paper: {
                padding: 2,
                position: 'absolute',
                top: 5
            }
        }}>
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Button
                        color="error"
                        variant="outlined"
                        size="small"
                        onClick={() => { setOpenPopup(false) }}>
                        <CloseIcon sx={{ fontSize: 'medium' }} />
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}