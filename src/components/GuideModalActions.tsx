import React from 'react'
import {
    DialogActions,
    Button,
} from '@mui/material'
import { useMatomo } from '../hooks/useMatomo'

interface GuideModalActionsProps {
    onClose: () => void
    discordText?: string
    guideName?: string
}

const GuideModalActions: React.FC<GuideModalActionsProps> = ({
    onClose,
    discordText = "💬 Poser une question sur Discord",
    guideName = "Guide"
}) => {
    const { trackEvent } = useMatomo()
    return (
        <DialogActions sx={{ p: 3 }}>
            <Button
                variant="outlined"
                href="https://discord.gg/xejvGDwczy"
                target="_blank"
                color="info"
                rel="noopener noreferrer"
                sx={{ mr: 'auto' }}
                onClick={() => trackEvent('Guide', 'Discord_Click', guideName)}
            >
                {discordText}
            </Button>
            <Button
                variant="contained"
                onClick={() => {
                    trackEvent('Guide', 'Close', guideName)
                    onClose()
                }}
            >
                Fermer
            </Button>
        </DialogActions>
    )
}

export default GuideModalActions