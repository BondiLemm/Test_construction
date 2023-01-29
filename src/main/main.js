import './main.css';
import data from '../data/data.json';
console.log(data);

function Main() {
    return (
      <div className='main'>
        <h1 className='topas-title'>Топас-С 4</h1>

        <img className='v1' src="/img/Rectangle 89.jpg" alt="img" title="img"/>
        <img className='v2' src="/img/Rectangle 90.jpg" alt="img" title="img"/>
        <img className='v3' src="/img/Rectangle 91.jpg" alt="img" title="img"/>
        <img className='v4' src="/img/Rectangle 92.jpg" alt="img" title="img"/>
        <div>
          <img className='v5' 
               srcSet='/img/Rectangle 51@2x.jpg, img/Rectangle 51.jpg'  
               src="/img/Rectangle 51.jpg" 
               alt="img" 
               itle="img"/>
          <img className='increase' src="/img/Group 1496.png" alt="img" title="img"/>
        </div>
        
        <div>
          <p className='p11'>Количество пользователей:</p>
          <p className='p12'>Производительность:</p>
          <p className='p13'>Объем залпового сброса:</p>
          <p className='p14'>Глубина подводящей трубы:</p>
          <p className='p15'>Потребляемая электроэнергия:</p>
        </div>

        <div>
          <p className='p21'>4 человека</p>
          <p className='p22'>0.8 м3/сут</p>
          <p className='p23'>175 л.</p>
          <p className='p24'>40-80 см</p>
          <p className='p25'>1500 Вт/сут.</p>
        </div>
        
        <div className='price-table'>
          <p className='price'>Цена:</p>
          <p className='price-value'>78 030 ₽</p>
        </div>

       
        <div className='dsb1'>
          <img className='sb1' src="/img/Vector.png" alt="img" title="img"/>
        </div>
        <div className='dsb2'>
          <img className='sb2' src="/img/Vector (1).png" alt="img" title="img"/>
        </div>
        <div className='dsb3'>
          <img className='sb3' src="/img/Group.png" alt="img" title="img"/>
        </div>
        <div className='dsb4'>
          <img className='sb4' src="/img/Group 1090.png" alt="img" title="img"/>
        </div>

       
          <h5 className='t-discuss-the-details'>Обсудим детали?</h5>
          <input className='i1-discuss-the-details' type="text" />
          <input className='i2-discuss-the-details' type="text" />
          <button className='b-discuss-the-details'>Хочу обсудить детали</button>
        

        <div>
          <h5 className='title-description'>Описание модели</h5>
          <p className='text-description'>Индивидуальная система биологической очистки Топас-С 4, как и другие УОСВ из данного модельного ряда, очищают стоки до 98% без вреда для экологии. Все модификации септика ТОПАС-С 4 очищают до 0.8 м3 сточных вод в сутки и имеют максимальный залповый сброс в районе 175 литров. Уже отработанную воду можно накапливать в отдельном резервуаре и в дальнейшем использовать для хозяйственных нужд или производить сброс очищенной воды в ливневую канаву (для моделей Пр со встороенным насосом).</p>
        </div>

        <img className='water' src="/img/otv4 1.png" alt="img" title="img"/>
        <img className='tubes' src="/img/2 21.png" alt="img" title="img"/>

      </div>
    );
  }
  


  export default Main;
  
