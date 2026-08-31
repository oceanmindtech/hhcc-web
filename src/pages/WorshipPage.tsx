import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/ScrollReveal";
import { SectionTitle } from "../components/SectionTitle";
import { VerseCard } from "../components/VerseCard";
import { worshipSchedule } from "../data/content";
import { CalendarIcon, UsersIcon } from "../components/icons";

export function WorshipPage() {

  return (
    <>
      <PageHero
        breadcrumb="崇拜與聚會"
        title="崇拜與聚會"
        subtitle="每週的敬拜、祈禱與學習，是教會生活的中心。歡迎你隨時加入。"
      />

      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle
              eyebrow="Every Sunday"
              title="主日聚會時間表"
              subtitle="逢星期日，以下是本堂每週恆常舉行的聚會"
              centered
            />
          </Reveal>

          {/* Highlight card */}
          <Reveal delay={80}>
            <div className="relative mt-12 overflow-hidden rounded-3xl bg-pine-dark text-parchment">
              <div className="absolute inset-0 opacity-25 hero-wash" />
              <div className="relative grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
                <div>
                  <p className="mb-2 font-display text-sm tracking-[0.28em] text-brass-light">
                    SUNDAY WORSHIP
                  </p>
                  <h3 className="font-serif text-2xl font-bold sm:text-3xl">主日崇拜</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-parchment/75">
                    我們以詩歌、祈禱、聖言宣讀與講道，一同敬拜那位賜生命的主。
                    主日崇拜分為早堂及午堂兩堂，誠意邀請弟兄姊妹及新朋友參加。
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6">
                    <div className="flex items-center gap-2.5">
                      <CalendarIcon className="h-5 w-5 text-brass-light" />
                      <span className="text-sm text-parchment/90">逢星期日</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <UsersIcon className="h-5 w-5 text-brass-light" />
                      <span className="text-sm text-parchment/90">歡迎所有人</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-7 text-center backdrop-blur-sm ring-1 ring-brass-light/30">
                    <p className="font-bold text-brass-light">早堂崇拜</p>
                    <p className="font-display mt-2 text-4xl font-semibold text-parchment">9:45</p>
                    <p className="mt-2 text-xs tracking-widest text-parchment/70">上午 9:45 – 10:45</p>
                    <p className="mt-1.5 text-xs text-parchment/55">每月第一週不設早堂崇拜</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-7 text-center backdrop-blur-sm ring-1 ring-brass-light/30">
                    <p className="font-bold text-brass-light">午堂崇拜</p>
                    <p className="font-display mt-2 text-4xl font-semibold text-parchment">12:00</p>
                    <p className="mt-2 text-xs tracking-widest text-parchment/70">中午 12:00 – 13:00</p>
                    <p className="mt-1.5 text-xs text-parchment/55">逢星期日舉行</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Full schedule table */}
          <Reveal delay={100}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-parchment-dark bg-white">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left text-sm">
                  <thead>
                    <tr className="bg-heritage text-pine">
                      <th className="w-56 px-6 py-4 font-bold">時間</th>
                      <th className="px-6 py-4 font-bold">內容</th>
                    </tr>
                  </thead>
                  <tbody>
                    {worshipSchedule.map((item) => (
                      <tr
                        key={item.time}
                        className="border-t border-parchment-dark transition-colors hover:bg-parchment/50"
                      >
                        <td className="px-6 py-4">
                          <span className="font-display font-semibold text-ink/85">
                            {item.time}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-brass" />
                            <div>
                              <span className="font-medium text-ink/85">{item.content}</span>
                              {item.note && (
                                <p className="mt-1 text-xs leading-relaxed text-ink/50">
                                  {item.note}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Notes */}
          <Reveal delay={120}>
            <div className="mt-8 rounded-2xl border border-jade/25 bg-jade/5 px-6 py-5 text-sm leading-relaxed text-ink/70">
              <p className="font-semibold text-pine">聚會備註</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>祈禱會於每月第一、第三及（如有）第五週星期日上午 8:45 – 9:30 舉行。</li>
                <li>擘餅聚會於每月第二及第四週星期日上午 8:45 – 9:30 舉行，對象為已受浸會友。</li>
                <li>每月第一週不設早堂崇拜，請留意相關通告。</li>
                <li>風季及雨季期間的聚會安排，請見「聚會指引」。</li>
              </ul>
            </div>
          </Reveal>

          {/* Verse */}
          <Reveal delay={100}>
            <div className="mx-auto mt-20 max-w-3xl">
              <VerseCard text="當用詩章、頌詞、靈歌、彼此對說，口唱心和的讚美主。" reference="以弗所書 5:19" />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}