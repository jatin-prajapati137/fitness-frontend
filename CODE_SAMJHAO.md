# Fitness Tracker – Code Ka Short Guide

## App ka flow (kya kya hota hai)

1. **Pehle** – User ko Login page dikhta hai. "Log in" dabate hi OAuth se login hota hai.
2. **Login ke baad** – Upar header (Fitness Tracker, Logout) + neeche **Activities** page.
3. **Activities page** – Neeche form se nayi activity add kar sakte ho (type, duration, calories). Neeche list me saari activities cards me dikhti hain. Kisi card pe click → us activity ka **detail** page open hota hai.
4. **Activity detail** – Ek activity ki details + agar backend se aaye to **AI recommendation** (analysis, improvements, suggestions, safety).

---

## Files ka kaam (ek line me)

| File | Kaam |
|------|------|
| `main.jsx` | App start, Auth + Redux + Theme wrap karta hai |
| `App.jsx` | Login hai ya nahi ye decide karta hai, routes set karta hai |
| `LoginPage.jsx` | Sirf login button wala page |
| `Layout.jsx` | Upar wala header (logo, Logout) + content ka container |
| `ActivityForm.jsx` | Activity add karne wala form (type, duration, calories) |
| `ActivityList.jsx` | Saari activities list cards me, click pe detail pe jata hai |
| `ActivityDetail.jsx` | Ek activity ki detail + AI recommendation dikhata hai |
| `theme.js` | Rang, font, button style (MUI theme) |
| `api.js` | Backend se activities get/add karne ke API calls |

---

## Copy kaise karein

- Har file **poori** copy karo – comments ke sath. Comments me **Hindi/English me samajh** likha hai.
- Pehle ye file (`CODE_SAMJHAO.md`) padh lo, phir jis file me kaam karna ho us file **uppar se comment** padh lo.

## Kaun si file kya karti hai (ek line)

- **main.jsx** – App start, Auth + Redux + Theme wrap
- **App.jsx** – Login check, routes (/, /activities, /activities/:id)
- **LoginPage.jsx** – Sirf Log in button wala page
- **Layout.jsx** – Header (Fitness Tracker + Logout) + content container
- **ActivityForm.jsx** – Activity add form (type, duration, calories)
- **ActivityList.jsx** – Activities list, card pe click → detail
- **ActivityDetail.jsx** – Ek activity detail + AI recommendation
- **theme.js** – Rang, font (MUI theme)
- **api.js** – getActivities, addActivity, getActivityDetail
