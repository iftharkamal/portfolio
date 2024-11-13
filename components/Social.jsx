import Link from "next/link"
import {FaLinkedin, FaInstagram,FaGithub,} from "react-icons/fa"
import {SiX} from "react-icons/si"


const socials = [
    {icon: <FaLinkedin/>, path:"http://www.linkedin.com/in/mohammed-ifthar-665095308"}, 
    {icon: <FaInstagram/>, path:"https://www.instagram.com/ifthar_kamal?igsh=MTg5d2wxcmZwc2FrZw=="}, 
    {icon: <FaGithub/> , path:"https://github.com/iftharkamal"}, 
    {icon: <SiX/> , path:"https://x.com/Iftharkamal?t=NaErDstxX_qt64dXnuIeNg&s=09"}, 
]


const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index) =>{
        return <Link href={item.path} key={index} className={iconStyles}>
        {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Social
