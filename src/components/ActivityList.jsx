
import { Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getActivities } from '../services/api'

const typeLabels = {
  RUNNING: 'Running',
  WALKING: 'Walking',
  CYCLING: 'Cycling',
}

const ActivityList = () => {
  const [activities, setActivities] = useState([])
  const navigate = useNavigate()

  const fetchActivities = async () => {
    try {
      const response = await getActivities()
      setActivities(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchActivities()
  }, [])

  if (activities.length === 0) {
    return (
      <Typography color="text.secondary" sx={{ py: 4, textAlign: 'center' }}>
        No activities yet. Add one above!
      </Typography>
    )
  }

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {activities.map((activity) => (
        <Grid item xs={12} sm={6} key={activity.id}>
          <Card
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-2px)' },
            }}
            onClick={() => navigate(`/activities/${activity.id}`)}
          >
            <CardContent>
              <Typography variant="subtitle2" color="primary" fontWeight={600}>
                {typeLabels[activity.type] || activity.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {activity.duration} min · {activity.caloriesBurned} cal
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ActivityList
