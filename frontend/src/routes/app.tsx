import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="flex">
      <div>sidebar</div>
      <div className="h-screen max-h-screen flex-1 overflow-y-scroll p-5">
        <Outlet />
      </div>
    </div>
  )
}
