<template>
  <div class="about">
    <!-- Header -->
    <header class="about-header">
      <div class="inner">
        <span class="mono label">Over mij</span>
        <h1 class="name">{{ cv.name }}</h1>
        <p class="profile">{{ cv.profile }}</p>
        <div class="contact-row">
          <a :href="`mailto:${cv.email}`" class="contact-link mono">{{ cv.email }}</a>
          <a :href="`https://${cv.linkedin}`" target="_blank" class="contact-link mono">LinkedIn</a>
          <span class="contact-link mono">{{ cv.location }}</span>
        </div>
      </div>
    </header>

    <div class="cv-body">
      <div class="cv-main">

        <!-- Opleiding -->
        <section class="cv-section">
          <div class="section-label mono">Opleiding</div>
          <div class="edu-item" v-for="edu in cv.education" :key="edu.title">
            <div class="edu-top">
              <div>
                <h3 class="edu-title">{{ edu.title }}</h3>
                <div class="edu-school">{{ edu.school }}</div>
              </div>
              <span class="edu-period mono">{{ edu.period }}</span>
            </div>
            <p class="edu-desc">{{ edu.description }}</p>
          </div>
        </section>

        <!-- Stage -->
        <section class="cv-section">
          <div class="section-label mono">Stage</div>
          <div class="exp-item" v-for="exp in cv.experience" :key="exp.title">
            <div class="edu-top">
              <div>
                <h3 class="edu-title">{{ exp.title }}</h3>
                <div class="edu-school">{{ exp.company }}</div>
              </div>
              <span class="edu-period mono">{{ exp.period }}</span>
            </div>
            <ul class="exp-points">
              <li v-for="point in exp.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </section>

        <!-- Projecten -->
        <section class="cv-section">
          <div class="section-label mono">Projecten</div>
          <div class="proj-link-row">
            <RouterLink
              v-for="p in projects"
              :key="p.id"
              :to="`/project/${p.id}`"
              class="proj-link"
              :class="{ featured: p.featured }"
            >
              <div class="proj-link-top">
                <span class="proj-link-title">{{ p.title }}</span>
                <span class="mono proj-year">{{ p.year }}</span>
              </div>
              <p class="proj-link-desc">{{ p.shortDesc }}</p>
              <div class="proj-link-tags">
                <span v-for="tag in p.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </RouterLink>
          </div>
        </section>

      </div>

      <!-- Sidebar -->
      <aside class="cv-sidebar">

        <!-- Skills -->
        <div class="sidebar-block">
          <div class="section-label mono">Vaardigheden</div>
          <div class="skill-row" v-for="skill in cv.skills" :key="skill.name">
            <div class="skill-top">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-pct mono">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>

        <!-- Eigenschappen -->
        <div class="sidebar-block">
          <div class="section-label mono">Eigenschappen</div>
          <div class="trait-list">
            <span v-for="trait in cv.traits" :key="trait" class="trait">{{ trait }}</span>
          </div>
        </div>

        <!-- Talen -->
        <div class="sidebar-block">
          <div class="section-label mono">Talen</div>
          <div class="lang-list">
            <span v-for="lang in cv.languages" :key="lang" class="lang">{{ lang }}</span>
          </div>
        </div>

      </aside>
    </div>
  </div>
</template>

<script setup>
import { cv } from '../data/cv.js'
import { projects } from '../data/projects.js'
</script>

<style scoped>
.about { padding-top: 80px; }

/* ── Header ── */
.about-header {
  border-bottom: 1px solid var(--border);
  padding: 60px 48px 48px;
}
.inner { max-width: 800px; margin: 0 auto; }
.label {
  font-size: 11px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  display: block;
  margin-bottom: 20px;
}
.name {
  font-size: clamp(42px, 7vw, 80px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.95;
  margin-bottom: 24px;
}
.profile {
  font-size: 16px;
  color: var(--muted);
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: 28px;
}
.contact-row { display: flex; gap: 24px; flex-wrap: wrap; }
.contact-link {
  font-size: 13px;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}
.contact-link:hover { color: var(--accent); }

/* ── Body ── */
.cv-body {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 0;
  max-width: 1100px;
  margin: 0 auto;
}
.cv-main { padding: 56px 48px; border-right: 1px solid var(--border); }
.cv-sidebar { padding: 56px 40px; }

/* ── Sections ── */
.cv-section { margin-bottom: 56px; }
.section-label {
  font-size: 11px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}
.edu-item, .exp-item { margin-bottom: 28px; }
.edu-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 10px;
}
.edu-title { font-size: 15px; font-weight: 600; margin-bottom: 2px; }
.edu-school { font-size: 13px; color: var(--muted); }
.edu-period { font-size: 12px; color: var(--muted); white-space: nowrap; }
.edu-desc { font-size: 14px; color: var(--muted); line-height: 1.7; }
.exp-points {
  list-style: none;
  display: grid;
  gap: 6px;
}
.exp-points li {
  font-size: 14px;
  color: var(--muted);
  padding-left: 14px;
  position: relative;
  line-height: 1.6;
}
.exp-points li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: var(--accent);
}

/* ── Project links ── */
.proj-link-row { display: grid; gap: 12px; }
.proj-link {
  display: block;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px 20px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
}
.proj-link:hover { border-color: #333; }
.proj-link.featured { border-color: rgba(200, 240, 96, 0.2); }
.proj-link-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.proj-link-title { font-size: 14px; font-weight: 600; }
.proj-year { font-size: 12px; color: var(--muted); }
.proj-link-desc { font-size: 13px; color: var(--muted); line-height: 1.5; margin-bottom: 10px; }
.proj-link-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.tag {
  font-size: 11px;
  font-family: var(--mono);
  color: var(--muted);
  background: var(--border);
  padding: 2px 8px;
  border-radius: 3px;
}
.featured .tag { color: var(--accent); background: rgba(200, 240, 96, 0.08); }

/* ── Sidebar blocks ── */
.sidebar-block { margin-bottom: 40px; }
.skill-row { margin-bottom: 14px; }
.skill-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.skill-name { font-size: 13px; color: var(--text); }
.skill-pct { font-size: 11px; color: var(--muted); }
.skill-bar {
  height: 3px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}
.skill-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
  transition: width 0.8s ease;
}
.trait-list { display: flex; flex-wrap: wrap; gap: 8px; }
.trait {
  font-size: 12px;
  color: var(--purple);
  background: rgba(167, 139, 250, 0.08);
  border: 1px solid rgba(167, 139, 250, 0.15);
  padding: 4px 12px;
  border-radius: 20px;
}
.lang-list { display: flex; flex-direction: column; gap: 8px; }
.lang { font-size: 13px; color: var(--muted); }

.mono { font-family: var(--mono); }

@media (max-width: 768px) {
  .about-header { padding: 60px 24px 32px; }
  .cv-body { grid-template-columns: 1fr; }
  .cv-main { padding: 40px 24px; border-right: none; border-bottom: 1px solid var(--border); }
  .cv-sidebar { padding: 40px 24px; }
}
</style>
