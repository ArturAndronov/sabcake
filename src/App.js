import cakeItem2 from './assets/img/cakeItem2.png'
import cakeItem3 from './assets/img/cakeItem3.png'
import cakeItem4 from './assets/img/cakeItem4.png'
import cakeItem5 from './assets/img/cakeItem5.png'
import cakeItem6 from './assets/img/cakeItem6.png'


import { Header, Categories } from './components'


const App = () => {



  return (
    <div>
      <div className='wrapper'>
       <Header />
        <main>
          <div className='container'>
            <div className='content__top'>
              <Categories items={['Торты','Краффины','Бенто торты' ]}/>
              <div className='sort'>
                <div className='sort__label'>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                      fill="#2C2C2C"
                    />
                  </svg>
                  <b>Сортировка по:</b>
                  <span>популярности</span>
                </div>
                <div className='sort__popup'>
                  <ul>
                    <li className='active'>популярности</li>
                    <li>цене</li>
                    <li>алфавиту</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className='content__title'>Весь товар</h2>

          <div className='content__items'>
            <div className='cake-block'>
              <img
                className='cake-block_image'
                src={cakeItem2}
                alt='cake'
              />
              <h4 className='cake-block__title'>Торт "Сникерс"</h4>
              <div className='cake-block__selector'>
                <div>Бисквит:</div>
                <ul>
                  <li className='active'>ванильный</li>
                  <li>шоколадный</li>
                  <li>апельсиновый</li>
                  <li>кокосовый</li>
                  <li>морковный</li>
                  <li>красный бархат</li>
                </ul>
                <div>Начинки:</div>
                <ul>
                  <li className='active'>клубника</li>
                  <li>вишня</li>
                  <li>чёрная смородина</li>
                  <li>ягодный микс</li>
                </ul>
                <ul>
                  <li className='active'>манго-маракуйя</li>
                  <li>апельскиновый курд</li>
                  <li>апельсиновая карамель</li>
                  <li>карамелизированный банан</li>
                  <li>ягодный микс</li>
                </ul>
                <ul>
                  <li className='active'>классическая</li>
                  <li>солёная</li>
                </ul>
              </div>
              <div className='cake-block__bottom'>
                <div className='cake-block__price'>от 300₪</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
          </div>


          <div className='content__items'>
            <div className='cake-block'>
              <img
                className='cake-block_image'
                src={cakeItem3}
                alt='cake'
              />
              <h4 className='cake-block__title'>Медовик</h4>
              <div className='cake-block__selector'>
                <div>Бисквит:</div>
                <ul>
                  <li className='active'>ванильный</li>
                  <li>шоколадный</li>
                  <li>апельсиновый</li>
                  <li>кокосовый</li>
                  <li>морковный</li>
                  <li>красный бархат</li>
                </ul>
                <div>Начинки:</div>
                <ul>
                  <li className='active'>клубника</li>
                  <li>вишня</li>
                  <li>чёрная смородина</li>
                  <li>ягодный микс</li>
                </ul>
                <ul>
                  <li className='active'>манго-маракуйя</li>
                  <li>апельскиновый курд</li>
                  <li>апельсиновая карамель</li>
                  <li>карамелизированный банан</li>
                  <li>ягодный микс</li>
                </ul>
                <ul>
                  <li className='active'>классическая</li>
                  <li>солёная</li>
                </ul>
              </div>
              <div className='cake-block__bottom'>
                <div className='cake-block__price'>от 220₪</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>1</i>
                </div>
              </div>
            </div>
          </div>


          <div className='content__items'>
            <div className='cake-block'>
              <img
                className='cake-block_image'
                src={cakeItem4}
                alt='cake'
              />
              <h4 className='cake-block__title'>Наполеон</h4>
              <div className='cake-block__selector'>
                <div>Бисквит:</div>
                <ul>
                  <li className='active'>ванильный</li>
                  <li>шоколадный</li>
                  <li>апельсиновый</li>
                  <li>кокосовый</li>
                  <li>морковный</li>
                  <li>красный бархат</li>
                </ul>
                <div>Начинки:</div>
                <ul>
                  <li className='active'>клубника</li>
                  <li>вишня</li>
                  <li>чёрная смородина</li>
                  <li>ягодный микс</li>
                </ul>
                <ul>
                  <li className='active'>манго-маракуйя</li>
                  <li>апельскиновый курд</li>
                  <li>апельсиновая карамель</li>
                  <li>карамелизированный банан</li>
                  <li>ягодный микс</li>
                </ul>
                <ul>
                  <li className='active'>классическая</li>
                  <li>солёная</li>
                </ul>
              </div>
              <div className='cake-block__bottom'>
                <div className='cake-block__price'>от 270₪</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>1</i>
                </div>
              </div>
            </div>
          </div>

          <div className='content__items'>
            <div className='cake-block'>
              <img
                className='cake-block_image'
                src={cakeItem5}
                alt='cake'
              />
              <h4 className='cake-block__title'>Меренговый рулет</h4>
              <div className='cake-block__selector'>
                <div>Бисквит:</div>
                <ul>
                  <li className='active'>ванильный</li>
                  <li>шоколадный</li>
                  <li>апельсиновый</li>
                  <li>кокосовый</li>
                  <li>морковный</li>
                  <li>красный бархат</li>
                </ul>
                <div>Начинки:</div>
                <ul>
                  <li className='active'>клубника</li>
                  <li>вишня</li>
                  <li>чёрная смородина</li>
                  <li>ягодный микс</li>
                </ul>
                <ul>
                  <li className='active'>манго-маракуйя</li>
                  <li>апельскиновый курд</li>
                  <li>апельсиновая карамель</li>
                  <li>карамелизированный банан</li>
                  <li>ягодный микс</li>
                </ul>
                <ul>
                  <li className='active'>классическая</li>
                  <li>солёная</li>
                </ul>
              </div>
              <div className='cake-block__bottom'>
                <div className='cake-block__price'>от 270₪</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>1</i>
                </div>
              </div>
            </div>
          </div>

          <div className='content__items'>
            <div className='cake-block'>
              <img
                className='cake-block_image'
                src={cakeItem6}
                alt='cake'
              />
              <h4 className='cake-block__title'>Капкейки</h4>
              <div className='cake-block__selector'>
                <div>Бисквит:</div>
                <ul>
                  <li className='active'>ванильный</li>
                  <li>шоколадный</li>
                  <li>апельсиновый</li>
                  <li>кокосовый</li>
                  <li>морковный</li>
                  <li>красный бархат</li>
                </ul>
                <div>Начинки:</div>
                <ul>
                  <li className='active'>клубника</li>
                  <li>вишня</li>
                  <li>чёрная смородина</li>
                  <li>ягодный микс</li>
                </ul>
                <ul>
                  <li className='active'>манго-маракуйя</li>
                  <li>апельскиновый курд</li>
                  <li>апельсиновая карамель</li>
                  <li>карамелизированный банан</li>
                  <li>ягодный микс</li>
                </ul>
                <ul>
                  <li className='active'>классическая</li>
                  <li>солёная</li>
                </ul>
              </div>
              <div className='cake-block__bottom'>
                <div className='cake-block__price'>от 270₪</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>1</i>
                </div>
              </div>
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}

export default App;
