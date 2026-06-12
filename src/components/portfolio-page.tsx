"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Starfield } from "@/components/starfield";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  credentials,
  experiences,
  focusAreas,
  profile,
  projects,
  skillGroups,
  stats,
} from "@/lib/portfolio-data";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Focus", href: "#focus" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function reveal(reduceMotion: boolean) {
  return {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };
}

function Section({
  eyebrow,
  title,
  description,
  children,
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  id: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="container-page scroll-mt-24 py-16 md:py-24"
      id={id}
      initial="hidden"
      transition={{ duration: 0.45, ease: "easeOut" }}
      variants={reveal(Boolean(reduceMotion))}
      viewport={{ once: true, margin: "-100px" }}
      whileInView="visible"
    >
      <div className="max-w-2xl">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-slate-950 dark:text-white md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        ) : null}
      </div>
      <div className="mt-10">{children}</div>
    </motion.section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-slate-200 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
      {children}
    </span>
  );
}

export function PortfolioPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(45,226,197,0.16),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(244,114,182,0.12),transparent_28%),linear-gradient(180deg,#fbfaf5,#f3f1e9)] text-slate-950 dark:bg-[radial-gradient(circle_at_50%_0%,rgba(45,226,197,0.14),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(168,85,247,0.14),transparent_28%),linear-gradient(180deg,#070b12,#020617_46%,#050816)] dark:text-white">
      <Starfield />
      <div
        aria-hidden="true"
        className="aurora-layer pointer-events-none fixed inset-0 z-0 opacity-70 dark:opacity-85"
      />

      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal-300 focus:px-4 focus:py-2 focus:text-slate-950"
        href="#content"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-slate-950/10 bg-stone-50/75 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
        <nav
          aria-label="Primary"
          className="container-page flex h-16 items-center justify-between gap-4"
        >
          <a
            className="font-semibold tracking-tight text-slate-950 transition hover:text-teal-700 dark:text-white dark:hover:text-teal-300"
            href="#top"
          >
            Swarnali Roy<span className="text-teal-600 dark:text-teal-300">.</span>
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </nav>
      </header>

      <div className="relative z-10" id="content">
        <section
          className="container-page flex min-h-[88svh] flex-col items-center justify-center py-24 text-center"
          id="top"
        >
          <motion.div
            animate="visible"
            className="mx-auto max-w-4xl"
            initial="hidden"
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={reveal(Boolean(reduceMotion))}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
              <MapPin aria-hidden="true" className="mr-2 inline size-4" />
              {profile.location}
            </p>

            <div className="mt-6 flex justify-center">
              <div className="relative rounded-full p-1.5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-300 via-violet-400 to-rose-300 opacity-80 blur-sm" />
                <Image
                  alt="Portrait of Swarnali Roy"
                  className="relative size-28 rounded-full border-4 border-stone-50 object-cover object-[62%_24%] shadow-[0_0_44px_rgba(45,226,197,0.22)] dark:border-slate-950 md:size-36"
                  height={144}
                  priority
                  src="/images/swarnali-roy.jpg"
                  width={144}
                />
              </div>
            </div>

            <div className="mt-7">
              <h1 className="text-4xl font-semibold leading-[1.05] text-slate-950 dark:text-white md:text-6xl">
                Swarnali{" "}
                <span className="bg-gradient-to-r from-teal-500 via-violet-500 to-rose-500 bg-clip-text text-transparent dark:from-teal-200 dark:via-violet-300 dark:to-rose-300">
                  Roy
                </span>
              </h1>
            </div>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300 md:text-2xl">
              {profile.role} · React Native · React · TypeScript
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-100 md:text-lg">
              {profile.headline}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                className="rounded-full bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_34px_rgba(45,226,197,0.24)] transition hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-slate-950"
                href="#experience"
              >
                View work
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-50 dark:border-white/15 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-200 dark:focus:ring-offset-slate-950"
                download
                href={profile.resumeHref}
              >
                Resume
                <Download aria-hidden="true" className="size-4" />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-50 dark:border-white/15 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-200 dark:focus:ring-offset-slate-950"
                href={`mailto:${profile.email}`}
              >
                Contact
                <Mail aria-hidden="true" className="size-4" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-2">
              {[
                "React Native",
                "Next.js",
                "TypeScript",
                "Figma-to-code",
                "Agile/Scrum",
                "AI-assisted development",
              ].map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </motion.div>

          <div className="mt-12 grid w-full max-w-4xl gap-3 border-t border-slate-950/10 pt-6 dark:border-white/10 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Section
          description={profile.summary}
          eyebrow="Focus"
          id="focus"
          title="Frontend and mobile engineering with delivery ownership."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  className="card p-5"
                  initial="hidden"
                  key={area.title}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  variants={reveal(Boolean(reduceMotion))}
                  viewport={{ once: true }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  whileInView="visible"
                >
                  <Icon
                    aria-hidden="true"
                    className="mb-5 size-6 text-teal-700 dark:text-teal-300"
                  />
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {area.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </Section>

        <Section
          description="A fuller picture from the RN, React, and Agile CVs: mobile feature ownership, frontend systems, release management, and team coordination."
          eyebrow="Track record"
          id="experience"
          title="Experience"
        >
          <ol className="relative space-y-8 border-l border-slate-300 pl-6 dark:border-white/15">
            {experiences.map((item, index) => (
              <motion.li
                className="relative"
                initial="hidden"
                key={`${item.company}-${item.role}`}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                variants={reveal(Boolean(reduceMotion))}
                viewport={{ once: true }}
                whileInView="visible"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.72rem] top-2 size-2.5 rounded-full bg-teal-400 shadow-[0_0_24px_rgba(45,226,197,0.5)]"
                />
                <article className="card p-5 md:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                      {item.role}{" "}
                      <span className="text-slate-500 dark:text-slate-400">
                        · {item.company}
                      </span>
                    </h3>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-500">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                    {item.location}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-teal-800 dark:text-teal-200">
                    {item.summary}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.highlights.map((highlight) => (
                      <li className="flex gap-2" key={highlight}>
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500 dark:bg-teal-300"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags?.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </Section>

        <Section
          description="Selected work chosen to show product context, technical stack, and the kind of ownership behind each build."
          eyebrow="Selected work"
          id="projects"
          title="Projects"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  className="card p-5"
                  initial="hidden"
                  key={project.name}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  variants={reveal(Boolean(reduceMotion))}
                  viewport={{ once: true }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  whileInView="visible"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                        {project.category}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
                        {project.name}
                      </h3>
                    </div>
                    <Icon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-rose-600 dark:text-rose-300"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Section>

        <Section
          description="Grouped for quick scanning by recruiters and engineering leads."
          eyebrow="Capabilities"
          id="skills"
          title="Skills"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article className="card p-5" key={group.title}>
                  <div className="mb-5 flex items-center gap-3">
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-teal-700 dark:text-teal-300"
                    />
                    <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Chip key={skill}>{skill}</Chip>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section
          description="Formal education, certifications, and public writing that support the engineering story."
          eyebrow="Credentials"
          id="credentials"
          title="Education and certifications"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {credentials.map((item) => {
              const Icon = item.icon;

              return (
                <article className="card p-5" key={`${item.title}-${item.subtitle}`}>
                  <Icon
                    aria-hidden="true"
                    className="mb-4 size-6 text-teal-700 dark:text-teal-300"
                  />
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-rose-600 dark:text-rose-300">
                    {item.meta}
                  </p>
                </article>
              );
            })}
          </div>
        </Section>

        <section className="container-page py-16 md:py-24" id="contact">
          <div className="card grid gap-8 p-6 md:grid-cols-[1fr_0.75fr] md:p-8">
            <div>
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                Contact
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-slate-950 dark:text-white md:text-4xl">
                Let&apos;s build something clear, useful, and release-ready.
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {profile.socials.map((link) => (
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700 dark:border-white/15 dark:text-slate-200 dark:hover:border-teal-300 dark:hover:text-teal-200"
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-teal-300 px-5 text-base font-semibold text-slate-950 shadow-[0_0_34px_rgba(45,226,197,0.2)] transition hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-slate-950"
                href={`mailto:${profile.email}`}
              >
                Email me
                <Mail aria-hidden="true" className="size-4" />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300 px-5 text-base font-semibold text-slate-900 transition hover:border-teal-500 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-50 dark:border-white/15 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-200 dark:focus:ring-offset-slate-950"
                download
                href={profile.resumeHref}
              >
                Download resume
                <Download aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <footer className="flex flex-col gap-4 py-8 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Swarnali Roy. Built with Next.js.</p>
            <p className="inline-flex items-center gap-2">
              <Sparkles aria-hidden="true" className="size-4 text-teal-500" />
              React Native · React · Agile delivery
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}
