import React from "react"
import Image from "next/image"
import { Navbar } from "react-bootstrap"
// import siteBrandDark from "./image/logo/logo-black.png"
// import siteBrandLight from "./image/logo/logo-white.png"
import Menu from "./Menu"
const SiteNavbar = ({buttonBlock,darkLogo,customLogo,defaultLogo}) => {

  const [expanded, setExpanded] = React.useState(false)

  const handleToggle = () => {
    console.log("close clicked", expanded)
    setExpanded(expanded ? false : "expanded")
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar full-height"
        expanded={expanded}
      >
        <Navbar.Brand href="/">

          {defaultLogo ? (<img src={defaultLogo} alt="site-brand"/>) : customLogo ? (
            <img src={customLogo} alt="site-brand" />
          ) : (
            <img src={darkLogo? "https://dzekq3sbbgf19.cloudfront.net/public/image/logo/newlogo.png" : "https://dzekq3sbbgf19.cloudfront.net/public/image/logo/newlogo.png"} alt="site-brand" className="header-logo"/>
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburgur"
          onClick={handleToggle}
        />
        <Menu handleToggle={handleToggle} />
        {buttonBlock}
      </Navbar>
    </>
  )
}

export default SiteNavbar
