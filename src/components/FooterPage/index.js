import './FooterPage.css'

const FooterPage = () => {
    return (
        <section className='footer-page'>
            <div className='social-media'>
                <a href='https://facebook.com'><img src='/img/fb.png' alt='Facebook'></img></a>
                <a href='https://twitter.com'><img src='/img/tw.png' alt='Twitter'></img></a>
                <a href='https://instagram.com'><img src='/img/ig.png' alt='Instagram'></img></a>
            </div>
            <div className='logo'>
                <img src='/img/logo.png' alt='Logo Organo'></img>
            </div>
            <div className='devoloper'>
                <p>Developed by João Pablo</p>
            </div>
        </section>
    )
}

export default FooterPage