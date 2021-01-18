import React from 'react'
import Header from './header'
import { SocialIcon } from "react-social-icons"

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />

    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.companyAddress}>
          {companyInfo && (
            <div>
              {companyInfo.name}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
               
              
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </div>
          )}
        </div>


        <div className={styles.siteInfo}>
        <span>
        <SocialIcon
              url="https://twitter.com/miacodes"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/miadugas"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/mia-dugas/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://dribbble.com/MiaInBatcountry"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            </span>

        </div>
        <br />
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with 
          <a href='https://www.gatsbyjs.org'> <strong>Gatsby - </strong></a>
          Data from <a href='https://www.sanity.io'><strong>Sanity - </strong></a>
          Hosted on <a href='https://www.netlify.com'><strong>Netlify </strong></a>
        </div>
</div>
    </footer> 
  </>
)

export default Layout

