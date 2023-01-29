import './header.css';


function Header() {
  return (
    <div className='header'>
     
        <div className='header1'>
          <div className='header-logo'>
            <img src="/img/image 1.png" alt="logo" title="logo"/>
          </div>

          <div className='working-hours'>
            Пн-Сб: c 10:00 до 20:00 <br/> Выходной: воскресенье
          </div>

          <div className='maket-3d'>
            <img src="/img/2.png" alt="img" title="img"/>
          </div>

          <div className='maket-text-3d'>
            Заказать 3D-макет дома <hr className='line-hr'/> 
          </div>

          <div className='set-contacts'>
            <div className='telephon1'>
              <button className='telephon-button1'><img src="/img/3.png" alt="img" title="img"/></button>
            </div>

            <div className='telephon-text'>
              +7(915)-888-76-54
            </div>

            <div className='telephon2'>
              <button className='telephon-button2'><img src="/img/4.png" alt="img" title="img"/></button>
            </div>

            <div className='telega'>
            <a className='telega-link' href="/" ><img src="/img/5.png" alt="img" title="img"/></a>
            </div>

            <div className='viber'>
              <a className='viber-link' href="/" ><img src="/img/6.png" alt="img" title="img"/></a>
            </div>
          </div>

          <div className='request-a-call'>
            <button className='request-a-call-button'>Заказать звонок</button>
          </div>
        </div>



        <div className='header2'>
          <div class='nav'>
            <a className='nav-item1' href="/">Каталог домов ▾</a> 
            <a class='nav-item2' href="/">Услуги ▾</a>
            <a class='nav-item3' href="/">О нас ▾</a>
            <a class='nav-item4' href="/">Контакты </a>
            <a class='nav-item5' href="/">Блог ▾</a>
          {/* Нужно реализовать выпадающее меню, которого нет в макете */}
          </div>
        </div>
        
    
   </div>
 );
};
  
  
  
export default Header;
  