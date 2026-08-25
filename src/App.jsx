import { useEffect, useMemo, useRef, useState } from "react";

const A = "/assets/";
const reviews = [
  ["С Аркой я вижу всё в одном месте — от удоев до воспроизводства. Это экономит часы каждый день и помогает держать дисциплину команды.", "Главный зоотехник-селекционер", "Вологодская область"],
  ["Календарь стал нашим основным инструментом. Мы просто открываем задачи на день — и всё расписано: кого осеменять, кого проверить. Ошибок стало меньше, показатели по стельности выросли.", "Зоотехник по воспроизводству", "Тверская область"],
  ["Самое сложное — убедить ферму перейти с устаревшего решения. Но когда они видят аналитику и отчёты в Арке, реакция одинаковая: «Так вот как это должно работать!»", "Интегратор DFS", "Digital Farm Software"],
  ["С внедрением Арки руководители видят картину по стаду без ручной сборки отчётов. Команда быстрее замечает отклонения и работает по единому плану.", "Управляющий фермой", "Республика Татарстан"],
];

function Button({ children, dark = false, onClick, href }) {
  const content = <span>{children}</span>;
  return href ? <a className={`button ${dark ? "button-dark" : ""}`} href={href}>{content}</a> : <button className={`button ${dark ? "button-dark" : ""}`} onClick={onClick}>{content}</button>;
}

function Header({ openForm }) {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <a href="#top" aria-label="Маслов Групп"><img src={`${A}logo-maslov.svg`} alt="Маслов Групп" /></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open}>Меню</button>
    <nav className={open ? "nav open" : "nav"} onClick={() => setOpen(false)}>
      <a href="#products">Продукты</a><a href="#reviews">Пресс-центр</a><a href="#scenarios">Инструкции</a><a href="#about">Блог</a><a href="#about">О нас</a>
      <Button dark onClick={openForm}>Посмотреть продукты</Button>
    </nav>
  </header>;
}

function Hero({ openForm }) {
  return <section className="hero" id="top"><Header openForm={openForm} /><div className="hero-card">
    <img className="hero-bg" src={`${A}hero-bg.png`} alt="Ферма на закате" /><div className="hero-vignette" />
    <img className="founder founder-one" src={`${A}founder-oleg.png`} alt="Основатель Олег" /><img className="founder founder-two" src={`${A}founder-alexey.png`} alt="Основатель Алексей" />
    <div className="hero-copy"><h1>Маслов Групп - семейная технологическая компания</h1><p>Цифровые решения для молочного животноводства, проверенные на сотнях ферм по всей России.</p><Button onClick={openForm}>Посмотреть продукты</Button></div>
    <div className="hero-products"><small>наши продукты</small><div><img src={`${A}arka-logo.png`} alt="Арка"/><img src={`${A}pulse-logo.png`} alt="Пульс"/><img src={`${A}potok-logo.png`} alt="Поток"/></div></div>
  </div></section>;
}

const facts = [
  ["stat-ai.svg", "ИИ-Консультант Аркаша", "Первый в России ИИ-помощник для молочных ферм"],
  ["stat-cow.svg", "300 тыс коров ежедневно", "Алгоритмы обучены на реальных данных"],
  ["stat-farm.svg", "200 хозяйств доверяют", "Уже внедрили Арку и работают с ней каждый день"],
  ["made-russia.svg", "100% российская разработка", "Поддержка, обновления и внедрение без санкционных рисков"],
];

function Trust({ openForm }) {
  return <section className="trust section-pad"><div className="facts">{facts.map(([icon, title, copy]) => <article className="fact" key={title}><img src={`${A}${icon}`} alt=""/><h3>{title}</h3><p>{copy}</p></article>)}</div>
    <div className="award-row"><div className="award-copy"><h2>Арка признана Лучшим продуктом выставки Агравия 2026 и получила премию iAGRI Innovation Award.</h2><Button onClick={openForm}>Посмотреть продукты</Button></div><div className="award-photo"><img src={`${A}award-photo.png`} alt="Победители премии iAGRI"/><img className="award-object" src={`${A}award.png`} alt="Награда"/></div></div></section>;
}

const products = [
  ["Арка", "Знает всё о ваших коровах и помогает контролировать выполнение всех процессов.", "arka-dashboard.png", "product-shot dashboard"],
  ["Поток", "Доит, кормит и встраивается в систему без участия человека.", "potok", "product-shot potok"],
  ["Пульс", "Выявляет охоту, снижает возраст первого отёла у тёлок, повышает эффективность осеменений и следит за общей активностью поголовья.", "pulse-cow.png", "product-shot cow"],
];

function Products({ openForm }) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section || window.matchMedia("(max-width: 760px)").matches) return;
        const rect = section.getBoundingClientRect();
        const range = Math.max(section.offsetHeight - window.innerHeight, 1);
        const progress = Math.min(1, Math.max(0, -rect.top / range));
        const next = Math.min(products.length - 1, Math.floor(progress * products.length));
        setActive(current => current === next ? current : next);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const selectProduct = index => {
    setActive(index);
    if (window.matchMedia("(max-width: 760px)").matches) return;
    const section = sectionRef.current;
    if (!section) return;
    const range = Math.max(section.offsetHeight - window.innerHeight, 0);
    const positions = [0.08, 0.5, 0.92];
    window.scrollTo({ top: section.offsetTop + range * positions[index], behavior: "smooth" });
  };

  return <section className="products-scroll" id="products" ref={sectionRef}>
    <div className="products products-sticky">
      <div className="section-heading"><h2>Наши продукты</h2><p>Все продукты Маслов Групп протестированы<br/>на собственной ферме СПА(к) «Кузьминский»</p></div>
      <div className="products-stage">
        <div className="product-accordion">
          {products.map(([name, copy], index) => <article className={`product-panel ${active === index ? "active" : ""}`} key={name}>
            <button className="product-trigger" onClick={() => selectProduct(index)} aria-expanded={active === index} aria-controls={`product-panel-${index}`}>
              <span>{name}</span>
            </button>
            <div className="product-panel-body" id={`product-panel-${index}`} aria-hidden={active !== index}>
              <p>{copy}</p>
              <div className="actions"><Button onClick={openForm}>Получить демо</Button><a href="#scenarios">Подробнее</a></div>
              <div className={`product-mobile-visual ${index === 1 ? "potok-mobile" : ""}`} aria-hidden="true">
                {index === 0 && <img src={`${A}arka-dashboard.png`} alt=""/>}
                {index === 1 && <><img src={`${A}potok-b.png`} alt=""/><img src={`${A}potok-a.png`} alt=""/></>}
                {index === 2 && <img src={`${A}pulse-cow.png`} alt=""/>}
              </div>
            </div>
          </article>)}
        </div>
        <div className="product-visuals" aria-live="polite">
          <div className={`product-visual-pane dashboard-pane ${active === 0 ? "active" : ""}`}><img src={`${A}arka-dashboard.png`} alt="Интерфейс продукта Арка"/></div>
          <div className={`product-visual-pane potok-pane ${active === 1 ? "active" : ""}`}><img src={`${A}potok-b.png`} alt="Роботизированная молочная ферма Поток"/><img src={`${A}potok-a.png`} alt="Ворота комплекса Поток"/></div>
          <div className={`product-visual-pane pulse-pane ${active === 2 ? "active" : ""}`}><img src={`${A}pulse-cow.png`} alt="Корова с датчиком Пульс"/></div>
        </div>
      </div>
    </div>
  </section>;
}

function Positioning({ openForm }) {
  return <section className="positioning section-pad"><div className="statement"><p>Мы не IT-компания, которая решила делать софт для ферм</p><h2>Мы фермеры, которые научились делать технологии</h2><Button onClick={openForm}>Посмотреть продукты</Button></div><div className="partners"><small>Фермы, которые нам доверяют</small><div><span>СПК КУЗЬМИНСКИЙ</span><span>ЭКОНИВА</span><span>РУСМОЛОКО</span><span>АГРОСИЛА</span><span>ДАМАТЕ</span></div></div></section>;
}

function Scenarios() {
  return <section className="scenarios section-pad" id="scenarios"><h2>Как наши решения работают на ферме</h2><div className="scenario-grid"><article><img src={`${A}vet.png`} alt="Ветеринар работает с коровами"/><div><h3>Ветеринар</h3><p>работает по протоколу — без пропусков и бумажной рутины. Арка формирует списки животных на лечение и вакцинацию.</p></div></article><article><img src={`${A}inseminator.png`} alt="Осеменатор на ферме"/><div><h3>Осеменатор</h3><p>системно управляет воспроизводством, не теряет охоту и не работает «на глаз». Арка снижает человеческий фактор и автоматически формирует списки на осеменение.</p></div></article></div></section>;
}

function Reviews() {
  const [index, setIndex] = useState(0); const visible = useMemo(() => [0,1,2].map(i => reviews[(index + i) % reviews.length]), [index]);
  return <section className="reviews section-pad" id="reviews"><div className="reviews-head"><h2>Реальные отзывы клиентов</h2><div><button onClick={() => setIndex((index + reviews.length - 1) % reviews.length)} aria-label="Предыдущий отзыв"><img src={`${A}chevron-left.svg`} alt=""/></button><button className="next" onClick={() => setIndex((index + 1) % reviews.length)} aria-label="Следующий отзыв"><img src={`${A}chevron-right.svg`} alt=""/></button></div></div><div className="reviews-grid">{visible.map(([copy, role, place], i) => <article key={`${role}-${index}-${i}`}><b>“</b><p>{copy}</p><footer><strong>{role}</strong><span>{place}</span></footer></article>)}</div></section>;
}

function About() {
  return <section className="about section-pad" id="about"><div><h2>О компании</h2><p>Наш дедушка Олег Маслов много лет руководил технологическим колледжем и безусловно верил в образование и внедрение современных решений.</p><p>Для него знание имело ценность только тогда, когда оно работает — помогает людям, хозяйствам и реальному производству.</p><p>Уважение к труду, страсть к знаниям, интерес к инновациям и принцип «знание должно работать» стали фундаментом наших ценностей.</p><p>Наш дедушка Олег Маслов много лет руководил технологическим колледжем и безусловно верил в образование и внедрение современных решений.</p><p>Маслов Групп — семейная технологическая компания, выросшая из реальной фермы и создающая решения для молочного животноводства.</p></div><div className="portraits"><img src={`${A}grandpa-back.png`} alt="Олег Маслов"/><img src={`${A}grandpa-front.png`} alt="Портрет Олега Маслова"/></div></section>;
}

function Footer({ openForm }) {
  return <footer className="site-footer"><div className="footer-cta"><img src={`${A}footer-cows-v2.png`} alt="Стадо коров на пастбище на закате"/><div><h2>Готовы оцифровать вашу ферму?</h2><p>Оставьте заявку, и мы бесплатно проведем аудит текущих показателей воспроизводства вашего стада</p><div><Button onClick={openForm}>Оставить заявку</Button><a href="https://t.me/maslovgroup" target="_blank" rel="noreferrer">Связаться в Telegram</a></div></div></div><div className="footer-main"><div className="footer-brand"><img src={`${A}logo-maslov.svg`} alt="Маслов Групп"/><p>Технологии для умного животноводства</p></div><div className="footer-links"><div><b>Решения</b><a href="#products">Арка</a><a href="#products">Пульс</a><a href="#products">Поток</a></div><div><b>Почитать</b><a href="#reviews">Пресс-центр</a><a href="#about">Блог</a><a href="#scenarios">Инструкции</a></div><div><b>Связаться с нами</b><a href="tel:+79860890543">+7 (986) 089-05-43</a><a href="mailto:sales@maslov.ai">sales@maslov.ai</a><a href="https://t.me/maslovgroup" target="_blank" rel="noreferrer">Написать в Telegram</a></div></div></div><div className="legal"><span>© MASLOV GROUP 2026 — Технологии для умного животноводства</span><a href="#top">Политика обработки персональных данных</a></div></footer>;
}

function Modal({ close }) {
  const [sent, setSent] = useState(false);
  useEffect(() => { const onKey = e => e.key === "Escape" && close(); window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [close]);
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && close()}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={close} aria-label="Закрыть">×</button>{sent ? <div className="success"><small>Заявка отправлена</small><h2>Спасибо!</h2><p>Мы свяжемся с вами и договоримся о бесплатном аудите фермы.</p><Button onClick={close}>Хорошо</Button></div> : <><small>Бесплатный аудит</small><h2 id="modal-title">Расскажите о вашей ферме</h2><p>Оставьте контакты — команда Маслов Групп свяжется с вами.</p><form onSubmit={e => { e.preventDefault(); setSent(true); }}><label>Ваше имя<input required name="name" autoFocus/></label><label>Телефон<input required name="phone" type="tel" placeholder="+7 900 000-00-00"/></label><label>Количество коров<input name="cows" type="number" min="1"/></label><Button>Отправить заявку</Button></form></>}</div></div>;
}

export function App() {
  const [modal, setModal] = useState(false); useEffect(() => { document.body.style.overflow = modal ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [modal]);
  const openForm = () => setModal(true);
  return <><main><Hero openForm={openForm}/><Trust openForm={openForm}/><Products openForm={openForm}/><Positioning openForm={openForm}/><Scenarios/><Reviews/><About/><Footer openForm={openForm}/></main>{modal && <Modal close={() => setModal(false)}/>}</>;
}
