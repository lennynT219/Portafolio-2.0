import { Toaster, toast } from 'sonner'
import './style.css'
import { Icv } from '../../assets/icon/Icv'
import { Iemail } from '../../assets/icon/Iemail'
import { Iphone } from '../../assets/icon/Iphone'

interface Props {
  href: string
  icon: string
  label: string
  copy?: string
  msg?: string
}

interface Icons {
  [key: string]: React.ReactElement
}

const icons: Icons = {
  cv: <Icv />,
  email: <Iemail />,
  phone: <Iphone />
}

export const IconGradient = ({ icon, href, label, copy, msg }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (copy) {
      e.preventDefault()
      navigator.clipboard.writeText(copy).then(() => {
        toast.success(`${msg} copiado`)
      })
      setTimeout(function () {
        window.open(href, '_blank')
      }, 1000)
    }
  }

  return (
    <>
      {/* <Toaster richColors position='top-right' /> */}
      <a href={href} onClick={handleClick}>
        {icons[icon]}
        <span>{label}</span>
      </a>
    </>
  )
}
