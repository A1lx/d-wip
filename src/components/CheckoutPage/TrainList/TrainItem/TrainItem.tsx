import "./trainItem.css";
import trainIcon from "./img/train-icon.svg"

export const TrainItem = () => {
  return (
    <article className="train-item">
      <div className="train-item__direction-box">
        <div className="train-item__direction">
          <img src={trainIcon} alt="train-icon" className="train-item__direction-icon"/>
          <span className="train-item__direction-name">116С</span>
          <div>
            <div className="train-item__direction-city train-item__direction-city_gray">
              Адлер
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z" fill="#928F94"/>
              </svg>
            </div>
            <div className="train-item__direction-city">
              Москва
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z" fill="#292929"/>
              </svg>
            </div>
            <div className="train-item__direction-city">
              Санкт-Петербург
            </div>
          </div>
        </div>
      </div>
      <div className="train-item__schedule-box">
        <div className="train-item__schedule">
          <div>
            <div className="train-item__schedule-time">00:10</div>
            <div className="train-item__schedule-direction">Москва</div>
            <div className="train-item__schedule-direction train-item__schedule-direction_gray">Курский вокзал</div>
          </div>
          <div className="train-item__schedule-duration-box">
            <span className="train-item__schedule-duration">9 : 42</span>
            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.3627 20C19.3627 17.8073 19.3627 15.3821 19.3627 12.8239C12.8621 12.8239 6.46582 12.8239 0 12.8239C0 11.0299 0 9.36877 0 7.57475C6.32677 7.57475 12.7231 7.57475 19.3279 7.57475C19.3279 4.91694 19.3279 2.42525 19.3279 0C22.9432 3.3887 26.5238 6.77741 30 10.0664C26.5585 13.2558 22.9432 16.6445 19.3627 20Z" fill="#FFA800" fill-opacity="0.79"/>
            </svg>
          </div>
          <div>
            <div className="train-item__schedule-time">09:52</div>
            <div className="train-item__schedule-direction">Санкт-Петербург</div>
            <div className="train-item__schedule-direction train-item__schedule-direction_gray">Ладожский вокзал</div>
          </div>
        </div>
        <div className="train-item__schedule">
          <div>
            <div className="train-item__schedule-time">00:10</div>
            <div className="train-item__schedule-direction">Москва</div>
            <div className="train-item__schedule-direction train-item__schedule-direction_gray">Курский вокзал</div>
          </div>
          <div className="train-item__schedule-duration-box">
            <span className="train-item__schedule-duration">9 : 42</span>
            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6373 20C10.6373 17.8073 10.6373 15.3821 10.6373 12.8239C17.1379 12.8239 23.5342 12.8239 30 12.8239C30 11.0299 30 9.36877 30 7.57475C23.6732 7.57475 17.2769 7.57475 10.6721 7.57475C10.6721 4.91694 10.6721 2.42525 10.6721 0C7.05678 3.3887 3.47625 6.77741 1.90735e-06 10.0664C3.44148 13.2558 7.05678 16.6445 10.6373 20Z" fill="#FFA800" fill-opacity="0.79"/>
            </svg>
          </div>
          <div>
            <div className="train-item__schedule-time">09:52</div>
            <div className="train-item__schedule-direction">Санкт-Петербург</div>
            <div className="train-item__schedule-direction train-item__schedule-direction_gray">Ладожский вокзал</div>
          </div>
        </div>
      </div>
      <div className="train-item__places-box">
        <ul className="train-item__places-list">
          <li className="train-item__places-item">
            <span className="train-item__place-name">Сидячий</span>
            <div>
              <span className="train-item__place-quantity">88</span>
              <span className="train-item__place-from">от </span>
              <span className="train-item__place-price">1920 </span>
              <span className="train-item__place-currency">₽</span>
            </div>
          </li>
          <li className="train-item__places-item">
            <span className="train-item__place-name">Плацкарт</span>
            <div>
              <span className="train-item__place-quantity">52</span>
              <span className="train-item__place-from">от </span>
              <span className="train-item__place-price">2530 </span>
              <span className="train-item__place-currency">₽</span>
            </div>
          </li>
          <li className="train-item__places-item">
            <span className="train-item__place-name">Купе</span>
            <div>
              <span className="train-item__place-quantity">24</span>
              <span className="train-item__place-from">от </span>
              <span className="train-item__place-price">3820 </span>
              <span className="train-item__place-currency">₽</span>
            </div>
          </li>
          <li className="train-item__places-item">
            <span className="train-item__place-name">Люкс</span>
            <div>
              <span className="train-item__place-quantity">15</span>
              <span className="train-item__place-from">от </span>
              <span className="train-item__place-price">4950 </span>
              <span className="train-item__place-currency">₽</span>
            </div>
          </li>
        </ul>
        <div className="train-item__filter-icons">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="train-item__filter-icon">
            <path d="M20 4.21434C19.7667 4.4347 19.5335 4.65506 19.3069 4.8821C19.0803 5.10914 18.867 5.34953 18.6271 5.60995C16.1946 3.25277 13.3356 2.01074 9.99 2.01074C6.65778 2.01074 3.81206 3.25277 1.44618 5.54318C0.973009 5.07575 0.519827 4.62167 0 4.10082C0.71976 3.53991 1.41953 2.90553 2.19927 2.38468C7.75075 -1.30134 14.9084 -0.660294 19.7467 3.93388C19.8267 4.00734 19.9134 4.07411 20 4.14089C20 4.1676 20 4.18763 20 4.21434Z" fill="#C4C4C4"/>
            <path d="M9.66998 15.8334C9.58334 15.7933 9.4967 15.7466 9.4034 15.7065C8.69697 15.406 8.30376 14.6648 8.45038 13.9102C8.597 13.1623 9.25678 12.6215 10.0232 12.6215C10.7829 12.6281 11.4427 13.1757 11.5827 13.9236C11.7226 14.6715 11.3161 15.4127 10.603 15.7065C10.5097 15.7466 10.4231 15.7866 10.3298 15.8267C10.1098 15.8334 9.8899 15.8334 9.66998 15.8334Z" fill="#C4C4C4"/>
            <path d="M4.25845 8.36778C3.78527 7.90035 3.33209 7.45295 2.87891 6.99887C6.32442 3.25943 13.0089 2.76528 17.1142 6.95881C16.6543 7.41288 16.1878 7.86696 15.7146 8.33439C14.1551 6.83861 12.2425 5.99723 9.98987 6.00391C7.74395 6.01059 5.83792 6.84529 4.25845 8.36778Z" fill="#C4C4C4"/>
            <path d="M14.335 9.81017C13.8619 10.2776 13.4087 10.7317 12.9555 11.1791C11.1761 9.49632 8.61029 9.67661 7.0708 11.1724C6.61762 10.7183 6.16444 10.2709 5.70459 9.81684C7.53065 7.67334 11.7226 7.13246 14.335 9.81017Z" fill="#C4C4C4"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="train-item__filter-icon">
            <path d="M6.28438 17.3529C6.15378 17.357 6.07215 17.304 6.00073 17.2328C5.49056 16.7339 4.97631 16.2391 4.47022 15.7382C3.89884 15.1721 3.33561 14.5959 2.76014 14.0339C2.63158 13.9076 2.59893 13.7753 2.64995 13.6266C2.76218 13.2907 2.87442 12.9506 3.01523 12.6248C3.92128 10.5173 5.18038 8.63385 6.69455 6.91733C8.10057 5.32298 9.69638 3.9465 11.4922 2.80826C12.1289 2.40509 12.7941 2.05079 13.4451 1.67206C13.5124 1.63337 13.541 1.66799 13.5818 1.70668C14.2185 2.34197 14.8572 2.97727 15.4939 3.6146C16.4265 4.54515 17.3591 5.47773 18.2937 6.40624C18.3529 6.46529 18.357 6.50398 18.3202 6.57728C17.5244 8.13498 16.5591 9.57865 15.4205 10.9063C14.7001 11.7452 13.9185 12.525 13.0961 13.2642C11.2106 14.9583 9.09642 16.2961 6.72924 17.2226C6.6068 17.2714 6.48028 17.3101 6.35376 17.3509C6.32315 17.3529 6.2905 17.3509 6.28438 17.3529ZM7.63122 11.1221C7.56388 11.8633 8.25158 12.3764 8.85562 12.3723C9.53516 12.3662 10.1025 11.8063 10.1004 11.1241C10.0984 10.552 9.70046 9.88001 8.75767 9.89426C8.14751 9.90444 7.63122 10.4583 7.63122 11.1221ZM12.3941 8.81507C13.1125 8.89041 13.6471 8.16552 13.641 7.59742C13.6369 7.0171 13.1288 6.34719 12.3594 6.3533C11.7452 6.35737 11.1289 6.91733 11.1555 7.6076C11.182 8.3162 11.6738 8.81507 12.3941 8.81507Z" fill="#C4C4C4"/>
            <path d="M18.7653 5.61827C17.2981 4.17256 15.8288 2.72686 14.3452 1.26486C14.6289 1.15287 14.8942 1.04291 15.1635 0.941104C16.1492 0.564406 17.1613 0.29359 18.2 0.13273C18.6184 0.0675711 19.0428 0.0248108 19.4673 0.00241249C19.8836 -0.0199858 20.0019 0.110331 19.9999 0.52979C19.9958 1.24246 19.8713 1.93885 19.7183 2.63319C19.4918 3.6574 19.1734 4.65515 18.7571 5.61827C18.751 5.63049 18.7449 5.64271 18.7388 5.65289C18.7469 5.64067 18.7571 5.62845 18.7653 5.61827Z" fill="#C4C4C4"/>
            <path d="M6.97031 5.98269C6.92949 6.03156 6.89276 6.08247 6.84787 6.12726C5.62551 7.39989 4.58885 8.80895 3.70728 10.3341C3.3971 10.8716 3.11957 11.4255 2.83183 11.9752C2.78694 12.0608 2.74408 12.0811 2.65021 12.0547C1.8666 11.8307 1.08298 11.6148 0.299363 11.3929C0.050401 11.3216 -0.0618358 11.0834 0.0340756 10.839C0.0646856 10.7617 0.10754 10.6863 0.152434 10.6151C1.18705 9.00239 2.54002 7.72772 4.24602 6.84604C5.06432 6.42251 5.92753 6.12319 6.83766 5.96029C6.87644 5.95419 6.91521 5.95418 6.95398 5.95215C6.9601 5.96233 6.96419 5.97251 6.97031 5.98269Z" fill="#C4C4C4"/>
            <path d="M7.90088 17.188C9.01917 16.6504 10.0946 16.0457 11.117 15.3452C12.1373 14.6468 13.0883 13.8608 13.9984 13.0239C14.0106 13.0321 14.0249 13.0402 14.0372 13.0484C14.029 13.1156 14.0229 13.1828 14.0106 13.2499C13.7066 14.8484 12.9944 16.2513 11.9741 17.5056C11.2292 18.4219 10.3538 19.1936 9.34975 19.8187C9.27017 19.8697 9.1865 19.9165 9.09875 19.9511C8.92121 20.0203 8.7498 19.9613 8.67225 19.7882C8.59471 19.6151 8.5294 19.4359 8.47635 19.2547C8.28248 18.5807 8.09474 17.9047 7.90496 17.2307C7.90292 17.2226 7.90292 17.2124 7.90088 17.188Z" fill="#C4C4C4"/>
            <path d="M5.2338 17.7012C5.09708 17.805 4.96443 17.9231 4.81547 18.0147C4.23183 18.3772 3.60943 18.6684 2.9707 18.9168C2.04832 19.2772 1.11777 19.6132 0.18927 19.9593C0.146416 19.9756 0.0994811 19.9838 0.0341797 20C0.109684 19.7822 0.174986 19.5847 0.246409 19.3892C0.672909 18.2163 1.10349 17.0435 1.65651 15.9215C1.83405 15.5632 2.01771 15.2068 2.28912 14.9055C2.31361 14.879 2.34014 14.8525 2.3585 14.8322C3.31149 15.7851 4.26244 16.7319 5.2338 17.7012Z" fill="#C4C4C4"/>
          </svg>
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="train-item__filter-icon">
            <path d="M1.97661 0C2.25188 0 2.45207 0 2.65227 0C7.65713 0 12.662 0 17.6669 0C19.2309 0 19.9941 0.764092 19.9941 2.35491C19.9941 3.20668 20.0066 4.07098 19.9941 4.92276C19.9816 6.17537 19.1558 7.00209 17.9171 7.01461C17.2915 7.02714 16.6784 7.01461 16.0027 7.01461C16.0027 7.99165 16.0027 8.89353 16.0027 9.80793C15.9902 12.3132 14.3011 14.0167 11.8112 14.0292C9.93435 14.0292 8.05752 14.0418 6.1807 14.0292C3.7158 14.0167 2.00164 12.3257 2.00164 9.87056C1.9641 6.60125 1.97661 3.35699 1.97661 0ZM16.0403 2.0167C16.0403 2.99374 16.0403 3.9833 16.0403 4.97286C16.6909 4.97286 17.3165 4.97286 17.9421 4.97286C17.9421 3.97077 17.9421 2.99374 17.9421 2.0167C17.2915 2.0167 16.6909 2.0167 16.0403 2.0167Z" fill="#C4C4C4"/>
            <path d="M17.955 16.0709C17.955 16.7223 17.955 17.3486 17.955 17.9999C11.9616 17.9999 5.99333 17.9999 0 17.9999C0 17.3486 0 16.7348 0 16.0709C5.9683 16.0709 11.9366 16.0709 17.955 16.0709Z" fill="#C4C4C4"/>
          </svg>
        </div>
        <button className="train-item__places-btn">Выбрать места</button>
      </div>
    </article>
  )
}

