import './footer.css';


function Footer() {
    return (
      <div className='footer'>
        <div className='header-logo'>
          <img src="/img/image 1.png" alt="logo" title="logo"/>
        </div>

        <div className='request-a-call'>
          <button className='request-a-call-buttonn'>Заказать звонок</button>
        </div>

        <div class='footer-nav'>
          <div>
            <a className='nav-item11' href="/">Главная</a> 
            <a className='nav-item21' href="/">Каталог</a> 
            <a className='nav-item31' href="/">Услуги</a>
            <a className='nav-item41' href="/">Расчет стоимости</a>
            <a className='nav-item51' href="/">Консультация архитектора</a>
          </div>
          
          <div>
            <a className='nav-item61' href="/">Экскурсия на объект</a>
            <a className='nav-item71' href="/">3D-макет дома</a>
            <a className='nav-item81' href="/">О нас</a>
            <a className='nav-item91' href="/">Блог</a>
            <a className='nav-item101' href="/">Контакты </a>
          </div>

          <p className='p1-footer'>Делимся крутыми проектами в соц.сетях. Подписывайтесь!</p>

          <div className='vk'>
            <img src="/img/Vector (2).png" alt="logo" title="logo"/>
          </div>
          <div className='inst'>
            <img src="/img/2544546824352.png" alt="logo" title="logo"/>
          </div>
          <div className='meta'>
            <img src="/img/Vector (3).png" alt="logo" title="logo"/>
          </div>
          <div className='youtube'>
            <img src="/img/youtube.png" alt="logo" title="logo"/>
          </div>

          <p className='p2-footer'>Разработка и продвижение сайт:</p>

          <div className='logo-white-footer'>
            <img src="/img/logowhite.png" alt="logo" title="logo"/>
          </div>
        </div>
      </div>
    );
  }
  
  
  
export default Footer;
  