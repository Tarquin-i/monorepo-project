import { createFileRoute } from '@tanstack/react-router'
import { Camera } from 'lucide-react';

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
      <>
      <Camera/>
      <div className='text-red-300'>
        hello world!!
      </div>
      </>
  )
}
