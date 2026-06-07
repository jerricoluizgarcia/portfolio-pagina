<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-label mono">Creative Technologist · HBO-ICT · HvA</div>
        <h1 class="hero-title">
          <span class="line">Jerrico</span>
          <span class="line accent">Garcia</span>
        </h1>
        <p class="hero-desc">
          Van idee naar werkend prototype. Ik bouw dingen, test ze met echte mensen,
          en leer van elke iteratie.
        </p>
        <div class="hero-actions">
          <RouterLink to="/about" class="btn-primary">Over mij</RouterLink>
          <a href="#work" class="btn-ghost">Bekijk werk</a>
        </div>
      </div>
      <div class="hero-decoration" aria-hidden="true">
        <span class="big-text">JG</span>
      </div>
    </section>

    <!-- Work -->
    <section id="work" class="work">
      <div class="section-header">
        <span class="mono label">Projecten</span>
        <h2>Geselecteerd werk</h2>
      </div>

      <!-- Featured project -->
      <div class="featured-wrap">
        <ProjectCard v-if="featured" :project="featured" />
      </div>

      <!-- Other projects -->
      <div class="grid">
        <ProjectCard v-for="p in others" :key="p.id" :project="p" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.vue'

const featured = computed(() => projects.find(p => p.featured))
const others   = computed(() => projects.filter(p => !p.featured))
</script>

<style scoped>
.home { padding-top: 0; }

/* ── Hero ── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 48px;
  position: relative;
  overflow: hidden;
}
.hero-inner { position: relative; z-index: 2; max-width: 700px; }
.hero-label {
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 24px;
  display: block;
}
.hero-title {
  font-size: clamp(56px, 10vw, 120px);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: 32px;
}
.line { display: block; }
.accent { color: var(--accent); }
.hero-desc {
  font-size: 17px;
  color: var(--muted);
  line-height: 1.7;
  max-width: 440px;
  margin-bottom: 40px;
}
.hero-actions { display: flex; gap: 16px; align-items: center; }
.btn-primary {
  display: inline-block;
  background: var(--accent);
  color: #0a0a0a;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 4px;
  transition: opacity 0.2s;
}
.btn-primary:hover { opacity: 0.85; }
.btn-ghost {
  font-size: 13px;
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.2s;
}
.btn-ghost:hover { color: var(--text); }
.hero-decoration {
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  user-select: none;
}
.big-text {
  font-size: clamp(180px, 25vw, 380px);
  font-weight: 800;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.04);
  line-height: 1;
}

/* ── Work ── */
.work {
  padding: 80px 48px;
  max-width: 1100px;
  margin: 0 auto;
}
.section-header { margin-bottom: 40px; }
.label {
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
}
.section-header h2 {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.featured-wrap { margin-bottom: 20px; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.mono { font-family: var(--mono); }

@media (max-width: 768px) {
  .hero { padding: 100px 24px 60px; min-height: auto; }
  .hero-decoration { display: none; }
  .work { padding: 60px 24px; }
  .grid { grid-template-columns: 1fr; }
}
</style>
