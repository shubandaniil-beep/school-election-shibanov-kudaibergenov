import { ArrowDown, BarChart3, Bot, BriefcaseBusiness, Check, FileUser, Headphones, MessageCircleMore, Music2, Trophy } from 'lucide-react';

const program = [
  { number: '01', icon: Music2, title: 'Больше движа', text: 'Дискотека каждый месяц, вечера настольных игр и квиз «Ученики против учителей».', accent: 'lime' },
  { number: '02', icon: BriefcaseBusiness, title: 'Бизнес на практике', text: 'Бизнес-ярмарка каждые 6 недель и новый бизнес-спринт: от идеи до проверки спроса за 7 дней.', accent: 'white' },
  { number: '03', icon: Bot, title: 'IT-лига', text: 'Три больших события: хакатон, конкурс сайтов и AI-чемпионат с реальными задачами.', accent: 'blue' },
  { number: '04', icon: Headphones, title: 'Подкасты чаще', text: 'Минимум два выпуска в месяц: истории учеников, бизнес, IT, школьные проекты и честные разговоры.', accent: 'white' },
  { number: '05', icon: FileUser, title: 'Цифровое портфолио', text: 'Готовые шаблоны резюме, бизнес-питча, презентации проекта и личного сайта.', accent: 'pink' },
  { number: '06', icon: BarChart3, title: 'Парламент отвечает', text: 'Отчёт каждую четверть, итоги года, открытый час раз в месяц и обязательный ответ на обращение класса.', accent: 'white' },
];
const accents: Record<string, string> = { lime: 'bg-[#dfff31]', white: 'bg-white', blue: 'bg-[#74d7ff]', pink: 'bg-[#ff8eca]' };

export default function Home() {
  return <main>
    <nav className="nav-shell" aria-label="Основная навигация">
      <a className="brand" href="#top">ШИБАНОВ <span>×</span> КУДАЙБЕРГЕНОВ</a>
      <a className="nav-cta" href="#program">Наша программа <ArrowDown size={16}/></a>
    </nav>
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true"/>
      <div className="hero-copy">
        <div className="eyebrow"><span/> Кандидаты в школьный парламент</div>
        <h1>Мы не обещаем<br/><em>всё.</em> Мы делаем<br/><span>конкретное.</span></h1>
        <p className="hero-lead">Больше событий. Больше бизнеса и IT. И парламент, который отвечает за результат.</p>
        <a className="primary-button" href="#program">Смотреть программу <ArrowDown size={19}/></a>
      </div>
      <div className="candidate-lockup">
        <div className="candidate candidate-one"><span>ДШ</span><small>Даниил<br/><b>Шибанов</b></small></div>
        <div className="candidate candidate-two"><span>ТК</span><small>Таир<br/><b>Кудайбергенов</b></small></div>
        <div className="vote-sticker"><Check size={25} strokeWidth={3}/> ТВОЙ<br/>ВЫБОР</div>
      </div>
    </section>
    <section className="manifesto-strip"><span>БИЗНЕС</span><i/><span>IT</span><i/><span>СОБЫТИЯ</span><i/><span>ОТВЕТСТВЕННОСТЬ</span></section>
    <section className="program-section" id="program">
      <header className="section-heading"><p>6 направлений</p><h2>Наша<br/><span>программа</span></h2><p className="section-intro">Не присваиваем то, что уже сделано. Улучшаем то, что работает, и запускаем то, чего не хватает.</p></header>
      <div className="program-grid">{program.map(item => { const Icon=item.icon; return <article className={`program-card ${accents[item.accent]}`} key={item.number}><div className="card-top"><span>{item.number}</span><Icon size={30}/></div><h3>{item.title}</h3><p>{item.text}</p></article>; })}</div>
    </section>
    <section className="numbers-section"><div><strong>1×</strong><span>дискотека<br/>каждый месяц</span></div><div><strong>6</strong><span>бизнес-ярмарок<br/>за учебный год</span></div><div><strong>3</strong><span>IT-соревнования<br/>с результатом</span></div><div><strong>4</strong><span>отчёта парламента<br/>за учебный год</span></div></section>
    <section className="accountability"><div className="accountability-copy"><p className="eyebrow dark"><span/> Главное обещание</p><h2>Каждую четверть<br/><em>мы отчитаемся.</em></h2><p>Что сделано. Что в работе. Что не получилось — и почему. Без красивых слов вместо результата.</p></div>
      <div className="report-card"><div className="report-head"><span>ОТЧЁТ / 01</span><Trophy size={22}/></div><div className="report-line"><Check size={18}/><span><b>Сделано</b><small>конкретный результат</small></span></div><div className="report-line"><span className="pulse"/><span><b>В работе</b><small>срок и ответственный</small></span></div><div className="report-line"><MessageCircleMore size={18}/><span><b>Ответ классу</b><small>без игнора</small></span></div></div>
    </section>
    <footer><p>ШИБАНОВ <span>×</span> КУДАЙБЕРГЕНОВ</p><h2>ТВОЙ ГОЛОС.<br/><span>НАША ОТВЕТСТВЕННОСТЬ.</span></h2><a href="#top">Наверх ↑</a></footer>
  </main>;
}
