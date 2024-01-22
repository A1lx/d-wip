export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li className="navigation__elem">
          <a href="#about" className="navigation__elem-link">О нас</a>
        </li>
        <li className="navigation__elem">
          <a href="#advantages" className="navigation__elem-link">Как это работает</a>
        </li>
        <li className="navigation__elem">
          <a href="#reviews" className="navigation__elem-link">Отзывы</a>
        </li>
        <li className="navigation__elem">
          <a href="#footer" className="navigation__elem-link">Контакты</a>
        </li>
      </ul>
    </nav>
  )
}
