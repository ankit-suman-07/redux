import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddHabitForm: React.FC = () => {
    const [name, setName] = useState<string>("")
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit} >
        <Box  sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 2 }}>
        <Typography component="h1" variant="h2" align="center" >Habit Tracker</Typography>
            <TextField 
                label="Habit Name" 
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder='Enter habit name'
                fullWidth
            />
            
            <FormControl fullWidth >
                <InputLabel>Frequency</InputLabel>
                <Select 
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}>
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                </Select>
            </FormControl>
            <Button type='submit' variant='contained' color='primary' >
                Add Habit
            </Button>
        </Box>
    </form>
  )
}

export default AddHabitForm