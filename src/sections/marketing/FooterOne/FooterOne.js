import React from 'react'
import { Link } from '~components'
import { Container, Row, Col } from 'react-bootstrap'
// import { Images } from '~data'
import Footer from "./style"
import LogoWhite from "~image/logo/logo-white.png";
export default function FooterOne(){
return(
    <Footer className='bg-blue-ribbon'>

        
    <Container>
        <Footer.Box pbXL="95px" >
        <Row>
        <Col xs="12" className="col-lg-12 col-md-8 col-xs-10 col-12 col-xl-4">
            <Footer.Widgets className="footer-widgets footer-widgets--l7">
            <Footer.Title>About Us</Footer.Title>
                <Footer.Text mb="36px">
                    
                MRKT365 is the next-level AI-driven <br />platform that helps with online marketing<br /> and is a powerful marketplace that gives<br /> solutions to all your digital problems.<br /> Search freelancers, specialized agencies,<br /> and interns from all domains working at <br />various price ranges and expertise.</Footer.Text>

            </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-xl-8">
            <Row>

<Col xs="6" className="col-md-4 col-xs-6">
<Footer.Widgets>
    <Footer.Title>How it works: </Footer.Title>
    <Footer.List>
        <Footer.ListItems>
            <Link to="/businesses">Businesses</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/freelancers">Freelancers</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/agencies">Agencies</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/internships">Interns</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/recruiters" >Recruiters</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/affiliates">Affiliate Program</Link>
        </Footer.ListItems>
    </Footer.List>
</Footer.Widgets>
</Col>
<Col xs="6" className="col-md-4 col-xs-6">
<Footer.Widgets>
    <Footer.Title>Features</Footer.Title>
    <Footer.List>
        <Footer.ListItems>
            <Link to="/talent-marketplace">Talent Marketplace</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/seo-auditor">AI Auditor</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/hire-interns">Hire Interns</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/employee-monitoring">Employee Monitoring</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/prepaid-virtual-cards">Prepaid Virtual Cards</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/microsoft-ads">Microsoft Advertising</Link>
        </Footer.ListItems>
    </Footer.List>
</Footer.Widgets>
</Col>
<Col xs="12" className="col-md-4 col-xs-6">
    <Footer.Widgets>
        <Footer.Title>Resources</Footer.Title>
        <Footer.List>
        <Footer.ListItems>
            <Link to="/pricing">Pricing</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/privacy-policy">Privacy Policy</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/terms-conditions">Terms and Conditions</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/contact">Contact</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/videos">Tutorial Videos</Link>
        </Footer.ListItems>
        <Footer.ListItems>
            <Link to="/book-demo">Book a Demo</Link>
        </Footer.ListItems>
    </Footer.List>
    </Footer.Widgets>
</Col>

</Row>
            </Col>
        </Row>
        </Footer.Box>
        <Footer.Copyright>
        <Footer.CopyrightText>© 2022 MRKT365 Corp. || All Rights Reserved. </Footer.CopyrightText>
        <Footer.SocialShare>
            <Footer.SocialShareItem>
                <a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/MRKT365/">
                <i className="fab fa-facebook-square" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a rel="noreferrer noopener" target="_blank" href="https://twitter.com/mrkt365">
                <i className="fab fa-twitter" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/mrkt365">
                <i className="fab fa-instagram" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/company/mrkt365/">
                <i className="fab fa-linkedin" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a rel="noreferrer noopener" target="_blank" href="https://www.tiktok.com/@mrkt365">
                <img src="https://dzekq3sbbgf19.cloudfront.net/public/image/logo/tik-tok.svg" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a rel="noreferrer noopener" target="_blank" href="https://www.youtube.com/c/MRKT365">
                <i className="fab fa-youtube" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a rel="noreferrer noopener" target="_blank" href="https://snapchat.com/add/mrkt365">
                <i className="fab fa-snapchat" />
                </a>
            </Footer.SocialShareItem>
        </Footer.SocialShare>
        </Footer.Copyright>
    </Container>
    
    </Footer>
)
}