import { Link } from "react-router-dom";
import { Reveal } from "../components/ScrollReveal";
import { SectionTitle } from "../components/SectionTitle";
import { VerseCard } from "../components/VerseCard";
import {
  churchInfo,
  verses,
  featuredSermonVerse,
  announcements,
  ministryHighlights,
  stats,
} from "../data/content";
import {
  ArrowRightIcon,
  BibleIcon,
  CalendarIcon,
  ClockIcon,
  CrossIcon,
  HeartIcon,
} from "../components/icons";

export function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-heritage text-ink">
        <div className="absolute inset-0 hero-wash" />
        {/* Brass beam */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-[130%] w-[760px] -translate-x-1/2 opacity-30"
          style={{
            background: "linear-gradient(180deg, rgba(185,138,47,0.22) 0%, transparent 70%)",
            clipPath: "polygon(38% 0, 62% 0, 100% 100%, 0% 100%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="mb-6 flex items-center justify-center gap-3 font-display text-sm tracking-[0.34em] text-pine sm:text-base">
                <span className="h-px w-8 bg-brass" />
                HUNG HOM CHRISTIAN CHURCH
                <span className="h-px w-8 bg-brass" />
              </p>
              <h1 className="font-serif text-4xl font-black leading-tight text-pine sm:text-6xl">
                歡迎各位
                <span className="mx-2 text-brass-gradient">&nbsp;·&nbsp;</span>
                願你遇見神
              </h1>
              <p className="mx-auto mt-7 max-w-xl leading-relaxed text-ink/65 sm:text-lg">
                {churchInfo.tagline}
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/worship"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-parchment transition-all hover:bg-pine-light hover:shadow-[0_10px_30px_rgba(30,74,63,0.35)] sm:w-auto"
                >
                  主日崇拜時間
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-pine/30 px-7 py-3.5 text-sm font-medium text-pine transition-colors hover:border-brass hover:text-brass sm:w-auto"
                >
                  認識我們
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-pine/50">
          <svg
            className="animate-bounce-down h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===================== WELCOME ===================== */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-cross-soft opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-jade">
                歡迎你
              </p>
              <h2 className="font-serif text-2xl font-bold text-pine sm:text-4xl">
                這是神的家，<br className="hidden sm:block" />
                也是你的家
              </h2>
              <p className="mt-6 leading-relaxed text-ink/70">
                紅磡基督徒會堂為福音信仰、非宗派的獨立堂會。沿自基督徒會堂（亞皆老街 116 號一樓），1971 年開始在紅磡馬頭圍道 166 號聚會，1990 年在大埔建立大埔基督徒會堂，2010 年遷住現址。
              </p>
              <p className="mt-4 leading-relaxed text-ink/70">
                我們相信教會是基督的身體，信徒互為肢體。藉著研讀聖經及祈禱，栽培信徒屬靈生命成長；我們亦重視傳揚福音，鼓勵弟兄姊妹將福音傳開。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/history"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-brass hover:text-brass-light"
                >
                  <CrossIcon className="h-4 w-4" />
                  會堂源起
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/faith"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-jade hover:text-pine"
                >
                  <BibleIcon className="h-4 w-4" />
                  信仰宣言
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-4">
                <VerseCard text={verses[0].text} reference={verses[0].reference} />
                <p className="text-center text-xs text-ink/40">— 主日講台經文 —</p>
                <VerseCard text={featuredSermonVerse.heading} reference={featuredSermonVerse.reference} />
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <Reveal delay={80}>
            <div className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-parchment-dark bg-white px-6 py-8 text-center shadow-[0_12px_40px_-26px_rgba(30,74,63,0.45)] transition-transform hover:-translate-y-1"
                >
                  <p className="font-display text-4xl font-semibold text-pine">{stat.value}</p>
                  <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== WORSHIP ===================== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle
              eyebrow="Worship Together"
              title="與我們一同敬拜"
              subtitle="每週主日，讓我們相聚在神的殿中，唱詩、禱告、聆聽祂的話語"
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={0}>
              <div className="group h-full rounded-2xl border border-parchment-dark bg-parchment p-8 text-center transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_24px_60px_-32px_rgba(30,74,63,0.4)]">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-jade/10 transition-colors group-hover:bg-jade/20">
                  <CalendarIcon className="h-7 w-7 text-jade" />
                </div>
                <h3 className="font-serif text-lg font-bold text-pine">聚會日期</h3>
                <p className="mt-3 text-ink/70">逢星期日</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-brass/40 bg-heritage p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass to-transparent" />
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-pine ring-1 ring-brass/40">
                  <ClockIcon className="h-7 w-7 text-brass-light" />
                </div>
                <h3 className="font-serif text-lg font-bold text-pine">早堂崇拜</h3>
                <p className="mt-2 text-xs text-ink/50">每月第一週不設早堂崇拜</p>
                <p className="font-display mt-2 text-2xl font-semibold text-pine">9:45</p>
                <p className="mt-1 text-sm text-ink/70">上午 9:45 – 10:45</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-brass/40 bg-heritage p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass to-transparent" />
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-pine ring-1 ring-brass/40">
                  <ClockIcon className="h-7 w-7 text-brass-light" />
                </div>
                <h3 className="font-serif text-lg font-bold text-pine">午堂崇拜</h3>
                <p className="mt-2 text-xs text-ink/50">逢星期日舉行</p>
                <p className="font-display mt-2 text-2xl font-semibold text-pine">12:00</p>
                <p className="mt-1 text-sm text-ink/70">中午 12:00 – 13:00</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-10 text-center">
              <Link
                to="/worship"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-jade hover:text-pine"
              >
                查看完整聚會時間表
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== MINISTRIES ===================== */}
      <section className="relative overflow-hidden bg-heritage py-20 sm:py-28">
        <div className="absolute inset-0 bg-cross-soft opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-jade">
                Fellowship & Care
              </p>
              <h2 className="font-serif text-2xl font-bold text-pine sm:text-4xl">團契與關顧</h2>
              <p className="mt-4 text-ink/60">按齡分組、彼此相愛。在團契中成長，在同行中經歷神的恩典。</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ministryHighlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Link
                  to="/ministries"
                  className="group flex h-full flex-col rounded-2xl border border-parchment-dark bg-white p-8 transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_24px_60px_-32px_rgba(30,74,63,0.4)]"
                >
                  <HeartIcon className="mb-6 h-7 w-7 text-brass transition-transform group-hover:scale-110" />
                  <h3 className="font-serif text-lg font-bold text-pine">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{item.desc}</p>
                  <span className="mt-auto flex items-center gap-1.5 pt-6 text-xs font-semibold uppercase tracking-widest text-jade transition-colors group-hover:text-brass">
                    了解更多
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED VERSE ===================== */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-cross-soft opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <VerseCard
                text="但我告訴你們，就是所羅門最威榮的時候所穿的，也比不上這花中的一朵。……你們要先求他的國和他的義，這一切都必加給你們。所以不要為明天憂慮，因為明天自有明天的憂慮，一天的難處一天當就夠了。"
                reference="馬太福音 6:29-34"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== NEWS ===================== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <SectionTitle
                eyebrow="Church News"
                title="家事報告"
                subtitle="堂會公告與行政指引"
              />
              <Link
                to="/news"
                className="hidden items-center gap-2 text-sm font-semibold text-jade hover:text-pine sm:inline-flex"
              >
                查看全部
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {announcements.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <Link
                  to="/news"
                  className="group relative block h-full overflow-hidden rounded-2xl border border-parchment-dark bg-parchment p-7 transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_24px_60px_-32px_rgba(30,74,63,0.4)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-jade">
                      <BibleIcon className="h-3.5 w-3.5" />
                      家事報告
                    </span>
                    <time className="text-xs text-ink/45">{item.date}</time>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-pine">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/60">
                    {item.content}
                  </p>
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-brass/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section
        className="relative overflow-hidden py-20 text-center text-parchment sm:py-24"
        style={{ background: "linear-gradient(160deg, #15362e 0%, #1e4a3f 60%, #2e6b5c 100%)" }}
      >
        <div className="absolute inset-0 opacity-30 hero-wash" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <p className="mb-4 font-display text-sm tracking-[0.3em] text-brass-light">
              WE'D LOVE TO MEET YOU
            </p>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">期待在神的家中與您見面</h2>
            <p className="mx-auto mt-5 max-w-xl text-parchment/70">
              讓我們以詩歌、祈禱與真道，一同將榮耀歸給那位賜生命的主。
              無論您是第一次接觸信仰，還是想尋找屬靈的家，我們都誠意邀請您來。
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass px-8 py-3.5 text-sm font-semibold text-pine-dark transition-all hover:bg-brass-light sm:w-auto"
              >
                聯絡我們
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/worship"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-parchment/30 px-8 py-3.5 text-sm font-medium text-parchment transition-colors hover:border-brass hover:text-brass-light sm:w-auto"
              >
                查看崇拜時間
              </Link>
            </div>
            <p className="mt-8 text-sm text-parchment/50">
              {churchInfo.address}　·　電話 {churchInfo.phones.join("、")}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}