import './App.css'
import { Button } from './components/ui/button'
import { Calendar } from './components/ui/calender'
import * as React from "react";
function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <body className="bg-black">
        <div className="flex justify-between p-6">
          <h1 className="text-white text-xl ">Habit Tracker</h1>
         <Button className="bg-violet-800 text-white" variant="secondary">Yooo!!!</Button>
        </div>
        <div className='flex-col items-center px-6'>
          <p className="font-italic text-pink-200 text-sm py-10">Track your progress like a Pro</p>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
          />
          <p className='text-white py-6'>
            You chose: {date?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </p>

        </div>
      </body>
    </>
  )
}

export default App
