// /**
//  * ACTIVITY FORM - Nayi activity add karne wala form
//  *
//  * Kaam:
//  * - Dropdown: Running / Walking / Cycling
//  * - Duration (minutes), Calories burned - number inputs
//  * - "Add activity" button → API call → list refresh (parent reload karta hai)
//  */

// import {
//   Box,
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   TextField,
//   Typography,
// } from '@mui/material'
// import React, { useState } from 'react'
// import { addActivity } from '../services/api'

// const ActivityForm = ({ onActivitiesAdded }) => {
//   // Form ki state - type, duration, calories
//   const [activity, setActivity] = useState({
//     type: 'RUNNING',
//     duration: '',
//     caloriesBurned: '',
//     additionalMetrics: {},
//   })

//   // Form submit → API pe POST → success pe list refresh + form reset
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       await addActivity(activity)
//       onActivitiesAdded()
//       setActivity({ type: 'RUNNING', duration: '', caloriesBurned: '', additionalMetrics: {} })
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <Paper elevation={0} sx={{ p: 3, mb: 3, border: '1px solid', borderColor: 'divider' }}>
//       <Typography variant="h6" sx={{ mb: 2 }}>
//         Add activity
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit}>
//         <FormControl fullWidth size="small" sx={{ mb: 2 }}>
//           <InputLabel>Activity type</InputLabel>
//           <Select
//             value={activity.type}
//             label="Activity type"
//             onChange={(e) => setActivity({ ...activity, type: e.target.value })}
//           >
//             <MenuItem value="RUNNING">Running</MenuItem>
//             <MenuItem value="WALKING">Walking</MenuItem>
//             <MenuItem value="CYCLING">Cycling</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//           fullWidth
//           size="small"
//           label="Duration (minutes)"
//           type="number"
//           sx={{ mb: 2 }}
//           value={activity.duration}
//           onChange={(e) => setActivity({ ...activity, duration: e.target.value })}
//           inputProps={{ min: 0 }}
//         />
//         <TextField
//           fullWidth
//           size="small"
//           label="Calories burned"
//           type="number"
//           sx={{ mb: 2 }}
//           value={activity.caloriesBurned}
//           onChange={(e) => setActivity({ ...activity, caloriesBurned: e.target.value })}
//           inputProps={{ min: 0 }}
//         />
//         <Button type="submit" variant="contained">
//           Add activity
//         </Button>
//       </Box>
//     </Paper>
//   )
// }

// export default ActivityForm

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { addActivity } from '../services/api'

const ActivityForm = ({ onActivitiesAdded }) => {
  const [activity, setActivity] = useState({
    type: 'RUNNING',
    duration: '',
    caloriesBurned: '',
    additionalMetrics: {},
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addActivity(activity)
      onActivitiesAdded()
      setActivity({ type: 'RUNNING', duration: '', caloriesBurned: '', additionalMetrics: {} })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Paper elevation={0} sx={{ p: 3, mb: 3, border: '1px solid', borderColor: 'divider' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Add activity
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth size="small" sx={{ mb: 2 }}>
          <InputLabel>Activity type</InputLabel>
          <Select
            value={activity.type}
            label="Activity type"
            onChange={(e) => setActivity({ ...activity, type: e.target.value })}
          >
            <MenuItem value="RUNNING">Running</MenuItem>
            <MenuItem value="WALKING">Walking</MenuItem>
            <MenuItem value="CYCLING">Cycling</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          size="small"
          label="Duration (minutes)"
          type="number"
          sx={{ mb: 2 }}
          value={activity.duration}
          onChange={(e) => setActivity({ ...activity, duration: e.target.value })}
          inputProps={{ min: 0 }}
        />
        <TextField
          fullWidth
          size="small"
          label="Calories burned"
          type="number"
          sx={{ mb: 2 }}
          value={activity.caloriesBurned}
          onChange={(e) => setActivity({ ...activity, caloriesBurned: e.target.value })}
          inputProps={{ min: 0 }}
        />
        <Button type="submit" variant="contained">
          Add activity
        </Button>
      </Box>
    </Paper>
  )
}

export default ActivityForm
