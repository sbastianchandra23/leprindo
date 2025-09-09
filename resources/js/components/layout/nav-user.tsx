import { Link, usePage } from "@inertiajs/react"
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

export function NavUser({
//   user,
// }: {
//   user: {
//     name: string
//     email: string
//     avatar: string
//   }
}) {
  const { isMobile } = useSidebar()
  
  interface AuthUser {
    id: number
    name: string
    email: string
    avatar?: string | null
  }

  interface PageProps {
    auth: {
      user: AuthUser | null
    }
  }

  function Initials({ name }) {
    const initials = name
      .split(" ")             // pecah jadi array kata
      .map(word => word[0])   // ambil huruf pertama tiap kata
      .join("")               // gabung lagi jadi string
      .toUpperCase();         // kapital semua

    return <span>{initials}</span>;
  }

  const { props } = usePage()
  const user = props.auth.user

  

  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <Avatar className='h-8 w-8 rounded-lg'>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className='rounded-lg'> <Initials name={user.name} /></AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>{user.name}</span>
                <span className='truncate text-xs'>{user.email}</span>
              </div>
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
