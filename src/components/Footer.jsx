import "./footer.css"

const Footer = () => {
    const date = new Date()
    const hour = date.getHours()
    const openHour = 8
    const clossingHour = 23

    const isOpen = hour >= openHour && hour <= clossingHour 




  return (
    <div className="footer-wrapper">
    {isOpen ?(
    <div className="footer-land">
    <p>We are opened from {openHour}AM to { clossingHour}PM come visit us or order online</p>
    </div>)
    : "We are working on a new pizza menu"
    }
    </div>
  )


}

export default Footer