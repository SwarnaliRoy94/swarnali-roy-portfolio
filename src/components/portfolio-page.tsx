"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Starfield } from "@/components/starfield";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  certifications,
  education,
  experiences,
  focusAreas,
  languages,
  profile,
  projects,
  skillCategories,
  skills,
  stats,
} from "@/lib/portfolio-data";
import { useMemo, useState } from "react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
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

function MiniChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200/80 bg-white/45 px-2.5 py-1 text-xs font-medium text-slate-500 backdrop-blur dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-400">
      {children}
    </span>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 0 1 8 3.87c.68 0 1.36.09 2 .26 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function ProjectAction({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      aria-label={label}
      className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-slate-300 px-3 text-sm font-semibold text-slate-700 transition hover:border-[#B4A7D6] hover:text-[#B4A7D6] dark:border-white/15 dark:text-slate-300 dark:hover:border-[#B4A7D6] dark:hover:text-[#B4A7D6]"
      href={href}
      rel="noreferrer"
      target="_blank"
      title={label}
    >
      {children}
    </a>
  );
}

function ProjectCarousel({
  images,
  projectName,
}: {
  images: { src: string; alt: string }[];
  projectName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="group/preview relative mb-5 aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5">
      <Image
        alt={activeImage.alt}
        className="object-contain object-center p-2 transition duration-500 group-hover/preview:scale-[1.02]"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        src={activeImage.src}
      />

      {hasMultipleImages ? (
        <>
          <button
            aria-label={`Show previous ${projectName} screenshot`}
            className="absolute left-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-slate-950/60 text-white opacity-0 backdrop-blur transition hover:bg-slate-950/80 group-hover/preview:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/80"
            onClick={showPrevious}
            type="button"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            aria-label={`Show next ${projectName} screenshot`}
            className="absolute right-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-slate-950/60 text-white opacity-0 backdrop-blur transition hover:bg-slate-950/80 group-hover/preview:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/80"
            onClick={showNext}
            type="button"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-transparent px-2 py-1.5">
            {images.map((image, index) => (
              <button
                aria-label={`Show ${projectName} screenshot ${index + 1}`}
                className={`size-1.5 rounded-full ring-1 ring-white/35 transition ${
                  activeIndex === index ? "bg-white/80" : "bg-white/20"
                }`}
                key={image.src}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function PhoneGridPreview({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const visibleImages = images.slice(0, 3);

  return (
    <div className="mb-5 flex aspect-[4/3] items-center justify-center gap-3 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 px-4 py-4 dark:border-white/10 dark:bg-white/5">
      {visibleImages.map((image, index) => (
        <div
          className={`relative h-full min-h-0 flex-1 overflow-hidden rounded-[1.35rem] border-[3px] border-slate-950 bg-slate-950 shadow-xl shadow-slate-950/20 dark:border-slate-800 ${
            index === 1 ? "translate-y-0" : "translate-y-3"
          }`}
          key={image.src}
        >
          <Image
            alt={image.alt}
            className="object-cover object-top"
            fill
            sizes="(min-width: 768px) 18vw, 30vw"
            src={image.src}
          />
        </div>
      ))}
    </div>
  );
}

export function PortfolioPage() {
  const reduceMotion = useReducedMotion();
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const visibleSkillGroups = useMemo(
    () =>
      skillCategories
        .filter((category) => category.id !== "all")
        .filter(
          (category) =>
            activeSkillCategory === "all" || category.id === activeSkillCategory,
        )
        .map((category) => ({
          ...category,
          skills: skills.filter((skill) => skill.category === category.id),
        }))
        .filter((category) => category.skills.length > 0),
    [activeSkillCategory],
  );

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

          </motion.div>

          <div className="mt-14 grid w-full max-w-4xl gap-3 border-t border-slate-950/10 pt-6 dark:border-white/10 sm:grid-cols-3">
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

        <motion.section
          className="container-page scroll-mt-24 py-16 md:py-24"
          id="about"
          initial="hidden"
          transition={{ duration: 0.45, ease: "easeOut" }}
          variants={reveal(Boolean(reduceMotion))}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 font-mono text-md font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              About Me
            </p>
            {/* <h2 className="text-3xl font-semibold leading-tight text-slate-950 dark:text-white md:text-4xl">
              About{" "}
              <span className="bg-gradient-to-r from-teal-500 via-violet-500 to-rose-500 bg-clip-text text-transparent dark:from-teal-200 dark:via-violet-300 dark:to-rose-300">
                Me
              </span>
            </h2> */}
          </div>

          <div className="grid gap-10 md:grid-cols-[1fr_0.95fr] md:items-center">
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Building Mobile-First Products with Frontend Craft and Delivery
                Ownership.
              </h3>
              {profile.about.map((paragraph) => (
                <p
                  className="text-base leading-8 text-slate-600 dark:text-slate-300"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-5">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <motion.article
                    className="card group p-5 transition"
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 96,
                    }}
                    key={area.title}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.55,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, margin: "-80px" }}
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                  >
                    <div className="flex items-start gap-4 text-left">
                      <div className="rounded-full bg-teal-400/15 p-3 text-teal-700 shadow-[0_0_24px_rgba(45,226,197,0.14)] transition group-hover:bg-teal-300/25 dark:text-teal-300">
                        <Icon aria-hidden="true" className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                          {area.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.section>

        <Section
          description="A practical map of the tools I use to build mobile apps, responsive interfaces, API-driven features, and delivery workflows."
          eyebrow="Capabilities"
          id="skills"
          title="Skills"
        >
          <div className="mb-10 flex flex-wrap gap-3">
            {skillCategories.map((category) => {
              const isActive = activeSkillCategory === category.id;

              return (
                <button
                  aria-pressed={isActive}
                  className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-slate-950 ${
                    isActive
                      ? "bg-teal-300 text-slate-950 shadow-[0_0_24px_rgba(45,226,197,0.18)]"
                      : "border border-slate-300 bg-white/50 text-slate-600 hover:border-teal-400 hover:text-teal-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:border-teal-300 dark:hover:text-teal-200"
                  }`}
                  key={category.id}
                  onClick={() => setActiveSkillCategory(category.id)}
                  type="button"
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <motion.div className="grid items-stretch gap-4 md:grid-cols-2" layout>
            {visibleSkillGroups.map((group, groupIndex) => (
              <motion.article
                className="card h-full p-5"
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 18,
                }}
                key={group.id}
                layout
                transition={{
                  delay: groupIndex * 0.05,
                  duration: 0.35,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
              >
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {group.label}
                  </h3>
                  <span className="text-xs font-medium text-teal-700 dark:text-teal-300">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="space-y-3.5">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-slate-500 dark:text-slate-500">
                          {skill.level}
                        </span>
                      </div>
                      <div
                        aria-label={`${skill.name} proficiency`}
                        aria-valuemax={100}
                        aria-valuemin={0}
                        aria-valuenow={skill.level}
                        className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10"
                        role="progressbar"
                      >
                        <motion.div
                          className="h-full rounded-full bg-linear-to-r from-[#B4A7D6] to-[#8BD5DD] shadow-[0_0_18px_rgba(139,213,221,0.24)]"
                          initial={{ width: 0 }}
                          transition={{
                            delay:
                              groupIndex * 0.05 +
                              Math.min(skillIndex * 0.025, 0.16),
                            duration: 0.7,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          whileInView={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Section>

        <Section
          description="Building and shipping production mobile apps, frontend platforms, and release-ready product experiences."
          eyebrow="Track record"
          id="experience"
          title="Work Experience"
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
                      <MiniChip key={tag}>{tag}</MiniChip>
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
                  {project.previewImages?.length ? (
                    project.previewLayout === "phone-grid" ? (
                      <PhoneGridPreview images={project.previewImages} />
                    ) : (
                      <ProjectCarousel
                        images={project.previewImages}
                        projectName={project.name}
                      />
                    )
                  ) : null}
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
                      className="size-6 shrink-0 text-[#B4A7D6]"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <MiniChip key={tech}>{tech}</MiniChip>
                    ))}
                  </div>
                  {project.githubUrl ||
                  project.liveUrl ||
                  project.appStoreUrl ||
                  project.playStoreUrl ? (
                    <div className="mt-5 flex flex-wrap justify-end gap-2">
                      {project.githubUrl ? (
                        <ProjectAction
                          href={project.githubUrl}
                          label={`View ${project.name} on GitHub`}
                        >
                        <GitHubIcon className="size-5" />
                        </ProjectAction>
                      ) : null}
                      {project.liveUrl ? (
                        <ProjectAction
                          href={project.liveUrl}
                          label={`Open ${project.name} live demo`}
                        >
                          <ExternalLink aria-hidden="true" className="size-5" />
                        </ProjectAction>
                      ) : null}
                      {project.appStoreUrl ? (
                        <ProjectAction
                          href={project.appStoreUrl}
                          label={`Open ${project.name} on the App Store`}
                        >
                          App Store
                        </ProjectAction>
                      ) : null}
                      {project.playStoreUrl ? (
                        <ProjectAction
                          href={project.playStoreUrl}
                          label={`Open ${project.name} on Google Play`}
                        >
                          Play Store
                        </ProjectAction>
                      ) : null}
                    </div>
                  ) : null}
                </motion.article>
              );
            })}
          </div>
        </Section>

        <Section
          description="Academic foundation and language proficiency that support my engineering and delivery work."
          eyebrow="Education"
          id="education"
          title="Education"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {education.map((item) => {
              const Icon = item.icon;

              return (
                <article className="card p-5" key={`${item.title}-${item.subtitle}`}>
                  <Icon
                    aria-hidden="true"
                    className="mb-4 size-6 text-[#B4A7D6]"
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

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {languages.map((item) => (
              <article className="card p-5" key={item.name}>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#B4A7D6]">
                  Language
                </p>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.level}
                    </p>
                  </div>
                  <span className="rounded-full border border-slate-200/80 bg-slate-950/[0.03] px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                    {item.meta}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          description="Selected certifications that reflect my React Native, frontend, Agile, and AI-assisted delivery practice."
          eyebrow="Certifications"
          id="certifications"
          title="Certifications"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((item) => {
              const Icon = item.icon;

              return (
                <article className="card p-5" key={`${item.title}-${item.subtitle}`}>
                  <Icon
                    aria-hidden="true"
                    className="mb-4 size-6 text-[#B4A7D6]"
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
