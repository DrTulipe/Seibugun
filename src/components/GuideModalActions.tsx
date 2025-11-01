import React from 'react'
import {
    DialogActions,
    Button,
} from '@mui/material'

interface GuideModalActionsProps {
    onClose: () => void
    discordText?: string
}

const GuideModalActions: React.FC<GuideModalActionsProps> = ({
    onClose,
    discordText = "💬 Questions sur Discord"
}) => {
    return (
        <DialogActions sx={{ p: 3 }}>
            <Button
                variant="outlined"
                href="https://discord.gg/xejvGDwczy"
                target="_blank"
                color="info"
                rel="noopener noreferrer"
                sx={{ mr: 'auto' }}
            >
                {discordText}
            </Button>
            <Button variant="contained" onClick={onClose}>
                Fermer
            </Button>
        </DialogActions>
    )
}

export default GuideModalActions