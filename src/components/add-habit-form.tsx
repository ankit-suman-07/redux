import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { type AppDispatch } from '../store/store'
import { addHabit } from '../store/habit-slice'

const AddHabitForm: React.FC = () => {
    const [name, setName] = useState<string>("")
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily")

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(name.trim()) {
            dispatch(
                addHabit({
                    name, frequency
                })
            )
        }
        setName("");
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