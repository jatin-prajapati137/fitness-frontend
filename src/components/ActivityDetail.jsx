// /**
//  * ACTIVITY DETAIL - Ek activity ki full detail + AI recommendation
//  *
//  * Kaam:
//  * - URL se id leta hai (/activities/123)
//  * - API se us activity ki detail + recommendation fetch karta hai
//  * - Dikhata hai: type, duration, calories, date
//  * - Agar backend se recommendation aayi to: analysis, improvements, suggestions, safety
//  * - "Back to activities" se list pe wapas
//  */

// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Divider,
//   Typography,
// } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import { getActivityDetail } from '../services/api'

// const typeLabels = {
//   RUNNING: 'Running',
//   WALKING: 'Walking',
//   CYCLING: 'Cycling',
// }

// const ActivityDetail = () => {
//   const { id } = useParams()
//   const [activity, setActivity] = useState(null)

//   useEffect(() => {
//     const fetchActivityDetail = async () => {
//       try {
//         const response = await getActivityDetail(id)
//         setActivity(response.data)
//       } catch (error) {
//         console.error(error)
//       }
//     }
//     fetchActivityDetail()
//   }, [id])

//   if (!activity) {
//     return (
//       <Box sx={{ py: 4, textAlign: 'center' }}>
//         <Typography color="text.secondary">Loading...</Typography>
//       </Box>
//     )
//   }

//   const recommendation = activity.recommendation
//   const hasRecommendation =
//     recommendation ||
//     activity?.improvements?.length ||
//     activity?.suggestions?.length ||
//     activity?.safety?.length

//   return (
//     <Box>
//       <Button component={Link} to="/activities" sx={{ mb: 2 }}>
//         ← Back to activities
//       </Button>

//       {/* Activity ki basic info */}
//       <Card elevation={0} sx={{ mb: 2, border: '1px solid', borderColor: 'divider' }}>
//         <CardContent>
//           <Typography variant="h6" gutterBottom>
//             Activity details
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {typeLabels[activity.type] || activity.type} · {activity.duration} min · {activity.caloriesBurned} cal
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//             {new Date(activity.createdAt).toLocaleString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* AI recommendation - sirf tab jab backend se aaye */}
//       {hasRecommendation && (
//         <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
//           <CardContent>
//             <Typography variant="h6" gutterBottom>
//               AI recommendation
//             </Typography>
//             {recommendation && (
//               <>
//                 <Typography variant="subtitle2" color="text.secondary">
//                   Analysis
//                 </Typography>
//                 <Typography paragraph sx={{ mt: 0.5 }}>
//                   {recommendation}
//                 </Typography>
//               </>
//             )}
//             {activity?.improvements?.length > 0 && (
//               <>
//                 <Divider sx={{ my: 2 }} />
//                 <Typography variant="subtitle2" color="text.secondary">
//                   Improvements
//                 </Typography>
//                 {activity.improvements.map((improvement, index) => (
//                   <Typography key={index} variant="body2" sx={{ pl: 1 }}>
//                     • {improvement}
//                   </Typography>
//                 ))}
//               </>
//             )}
//             {activity?.suggestions?.length > 0 && (
//               <>
//                 <Divider sx={{ my: 2 }} />
//                 <Typography variant="subtitle2" color="text.secondary">
//                   Suggestions
//                 </Typography>
//                 {activity.suggestions.map((suggestion, index) => (
//                   <Typography key={index} variant="body2" sx={{ pl: 1 }}>
//                     • {suggestion}
//                   </Typography>
//                 ))}
//               </>
//             )}
//             {activity?.safety?.length > 0 && (
//               <>
//                 <Divider sx={{ my: 2 }} />
//                 <Typography variant="subtitle2" color="text.secondary">
//                   Safety
//                 </Typography>
//                 {activity.safety.map((item, index) => (
//                   <Typography key={index} variant="body2" sx={{ pl: 1 }}>
//                     • {item}
//                   </Typography>
//                 ))}
//               </>
//             )}
//           </CardContent>
//         </Card>
//       )}
//     </Box>
//   )
// }

// export default ActivityDetail

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getActivityDetail } from '../services/api'

const typeLabels = {
  RUNNING: 'Running',
  WALKING: 'Walking',
  CYCLING: 'Cycling',
}

const ActivityDetail = () => {
  const { id } = useParams()
  const [activity, setActivity] = useState(null)

  useEffect(() => {
    const fetchActivityDetail = async () => {
      try {
        const response = await getActivityDetail(id)
        setActivity(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchActivityDetail()
  }, [id])

  if (!activity) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography color="text.secondary">Loading...</Typography>
      </Box>
    )
  }

  const recommendation = activity.recommendation
  const hasRecommendation =
    recommendation ||
    activity?.improvements?.length ||
    activity?.suggestions?.length ||
    activity?.safety?.length

  return (
    <Box>
      <Button component={Link} to="/activities" sx={{ mb: 2 }}>
        ← Back to activities
      </Button>

      <Card elevation={0} sx={{ mb: 2, border: '1px solid', borderColor: 'divider' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Activity details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {typeLabels[activity.type] || activity.type} · {activity.duration} min · {activity.caloriesBurned} cal
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {new Date(activity.createdAt).toLocaleString()}
          </Typography>
        </CardContent>
      </Card>

      {hasRecommendation && (
        <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              AI recommendation
            </Typography>
            {recommendation && (
              <>
                <Typography variant="subtitle2" color="text.secondary">
                  Analysis
                </Typography>
                <Typography paragraph sx={{ mt: 0.5 }}>
                  {recommendation}
                </Typography>
              </>
            )}
            {activity?.improvements?.length > 0 && (
              <>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" color="text.secondary">
                  Improvements
                </Typography>
                {activity.improvements.map((improvement, index) => (
                  <Typography key={index} variant="body2" sx={{ pl: 1 }}>
                    • {improvement}
                  </Typography>
                ))}
              </>
            )}
            {activity?.suggestions?.length > 0 && (
              <>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" color="text.secondary">
                  Suggestions
                </Typography>
                {activity.suggestions.map((suggestion, index) => (
                  <Typography key={index} variant="body2" sx={{ pl: 1 }}>
                    • {suggestion}
                  </Typography>
                ))}
              </>
            )}
            {activity?.safety?.length > 0 && (
              <>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" color="text.secondary">
                  Safety
                </Typography>
                {activity.safety.map((item, index) => (
                  <Typography key={index} variant="body2" sx={{ pl: 1 }}>
                    • {item}
                  </Typography>
                ))}
              </>
            )}
          </CardContent>
        </Card>
      )}
    </Box>
  )
}

export default ActivityDetail

