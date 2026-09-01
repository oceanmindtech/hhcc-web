import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/ScrollReveal";
import { announcements, announcementArchiveNote, appStoreUrl } from "../data/content";
import { BibleIcon, ExternalLinkIcon } from "../components/icons";

export function NewsPage() {
  return (
    <>
      <PageHero
        breadcrumb="家事報告"
        title="家事報告"
        subtitle="本堂的公告、指引與行政通告。"
      />

      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-6">
            {announcements.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <article className="rounded-2xl border border-parchment-dark bg-white p-8 transition-all hover:border-brass/50 hover:shadow-[0_24px_60px_-32px_rgba(30,74,63,0.4)]">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-jade/10 px-3 py-1 text-xs font-semibold text-jade">
                      <BibleIcon className="h-3.5 w-3.5" />
                      {item.category}
                    </span>
                    <time className="text-xs text-ink/45">{item.date}</time>
                  </div>
                  <h2 className="mt-4 font-serif text-xl font-bold text-pine sm:text-2xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:text-[15px]">
                    {item.content}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="mt-12 rounded-2xl border border-jade/25 bg-jade/5 px-8 py-6 text-sm leading-relaxed text-ink/65">
              <p>
                <span className="font-semibold text-jade">備註：</span>
                {announcementArchiveNote}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 rounded-2xl border border-brass/30 bg-white p-8 text-center">
              <h3 className="font-serif text-lg font-bold text-pine">使用本堂 App</h3>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-ink/60">
                最新的家事報告、崇拜通告及活動報名，均可於本堂 App 內查閱。
                掃描禮堂內或小冊子上的 QR Code 即可下載。
              </p>
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 text-sm font-semibold text-parchment transition-colors hover:bg-pine-light"
              >
                下載本堂 App
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}