<template>
  <div class="project-page" v-if="project">
    <header class="proj-header">
      <div class="header-inner">
        <RouterLink to="/" class="back mono">← Terug</RouterLink>
        <div class="meta">
          <span class="mono year">{{ project.year }}</span>
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
        <h1 class="proj-title">{{ project.title }}</h1>
        <p class="proj-subtitle mono">{{ project.subtitle }}</p>
        <div class="proj-meta-row">
          <div class="meta-item" v-if="project.role">
            <span class="meta-label">Rol</span>
            <span class="meta-val">{{ project.role }}</span>
          </div>
          <div class="meta-item" v-if="project.team">
            <span class="meta-label">Team</span>
            <span class="meta-val">{{ project.team }}</span>
          </div>
          <div class="meta-item" v-if="project.client">
            <span class="meta-label">Opdrachtgever</span>
            <span class="meta-val">{{ project.client }}</span>
          </div>
        </div>
      </div>
    </header>

    <div class="content">

      <section class="block">
        <div class="block-label mono">Probleem</div>
        <p class="lead">{{ project.problem }}</p>
      </section>

      <div class="callout" v-if="project.insight">
        <span class="callout-quote">"</span>
        <p>{{ project.insight }}</p>
      </div>

      <section class="block" v-if="project.advice">
        <div class="block-label mono">Adviesrapport – Samenvatting</div>
        <p class="body-text" style="margin-bottom: 20px;">{{ project.advice.summary }}</p>
        <div class="callout" style="margin-bottom: 0;">
          <span class="callout-quote">"</span>
          <p>{{ project.advice.quote }}</p>
        </div>
      </section>

      <section class="block" v-if="project.approach">
        <div class="block-label mono">Aanpak</div>
        <p class="body-text">{{ project.approach }}</p>
      </section>

      <section class="block" v-if="project.pitch">
        <div class="block-label mono">{{ project.pitch.label }}</div>
        <div class="asset-card">
          <div class="asset-card-left">
            <h4 class="asset-title">{{ project.pitch.title }}</h4>
            <p class="asset-desc">{{ project.pitch.desc }}</p>
          </div>
          <a :href="project.pitch.file" download class="download-btn mono">
            Download pptx
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v7M4 6l3 3 3-3M2 11h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      <section class="block" v-if="project.boardgame">
        <div class="block-label mono">{{ project.boardgame.label }}</div>
        <video v-if="project.boardgame.video" controls preload="metadata" class="boardgame-img">
          <source :src="project.boardgame.video" />
        </video>
        <img v-else :src="project.boardgame.image" :alt="project.boardgame.label" class="boardgame-img" />
        <p class="img-caption">{{ project.boardgame.desc }}</p>
      </section>

      <section class="block" v-if="project.scenarios">
        <div class="block-label mono">Mijn Scenario</div>
        <div v-for="s in project.scenarios" :key="s.number" class="scenario-full">
          <div class="scenario-header">
            <span class="scenario-num mono">{{ s.number }}</span>
            <h3 class="scenario-title">{{ s.title }}</h3>
          </div>
          <p class="scenario-desc">{{ s.desc }}</p>
          <div class="video-grid" v-if="s.videoA || s.videoB">
            <div class="video-block" v-if="s.videoA">
              <div class="video-label mono">{{ s.labelA }}</div>
              <div class="video-wrap">
                <video controls preload="metadata">
                  <source :src="s.videoA" />
                </video>
              </div>
            </div>
            <div class="video-block" v-if="s.videoB">
              <div class="video-label mono">{{ s.labelB }}</div>
              <div class="video-wrap">
                <video controls preload="metadata">
                  <source :src="s.videoB" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="block" v-if="project.process">
        <div class="block-label mono">Proces</div>
        <div class="timeline">
          <div class="tl-item" v-for="step in project.process" :key="step.sprint">
            <div class="tl-dot"></div>
            <div class="tl-content">
              <div class="tl-sprint mono">{{ step.sprint }}</div>
              <h4 class="tl-title">{{ step.title }}</h4>
              <p class="tl-desc">{{ step.desc }}</p>
              <span class="tl-tag" :style="{ color: step.tagColor, borderColor: step.tagColor + '33', background: step.tagColor + '11' }">
                {{ step.tag }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="block" v-if="project.testing">
        <div class="block-label mono">Guerilla Testing</div>
        <div class="stats-row">
          <div class="stat">
            <span class="stat-num">6</span>
            <span class="stat-label">Mensen getest</span>
          </div>
          <div class="stat">
            <span class="stat-num">3</span>
            <span class="stat-label">Acceptatiecriteria</span>
          </div>
          <div class="stat">
            <span class="stat-num accent-num">100%</span>
            <span class="stat-label">Voelde irritatie</span>
          </div>
        </div>
        <div class="quotes">
          <div class="quote-item" v-for="t in project.testing" :key="t.person">
            <div class="quote-person">
              <strong>{{ t.person }}</strong>
              <span class="mono">{{ t.role ? t.role : t.age + ' jaar' }}</span>
            </div>
            <p class="quote-text">"{{ t.quote }}"</p>
          </div>
        </div>
      </section>

      <section class="block" v-if="project.impact">
        <div class="block-label mono">Maatschappelijke Impact</div>
        <div class="impact-grid">
          <div class="impact-card" v-for="item in project.impact" :key="item.label">
            <div class="impact-label">{{ item.label }}</div>
            <p class="impact-desc">{{ item.desc }}</p>
            <a v-if="item.link" :href="item.link" target="_blank" class="impact-link">{{ item.linkLabel }}</a>
          </div>
        </div>
      </section>

      <section class="block" v-if="project.docs">
        <div class="block-label mono">Documenten</div>
        <div class="docs-list">
          <a v-for="doc in project.docs" :key="doc.file" :href="doc.file" download class="doc-row">
            <div class="doc-icon mono">↓</div>
            <div class="doc-info">
              <span class="doc-name">{{ doc.label }}</span>
              <span class="doc-meta mono">{{ doc.meta }}</span>
            </div>
            <span class="doc-ext mono">{{ doc.file.split('.').pop().toUpperCase() }}</span>
          </a>
        </div>
      </section>

    </div>
  </div>

  <div class="project-page simple" v-else-if="simpleProject">
    <header class="proj-header">
      <div class="header-inner">
        <RouterLink to="/" class="back mono">← Terug</RouterLink>
        <div class="meta">
          <span class="mono year">{{ simpleProject.year }}</span>
          <div class="tags">
            <span v-for="tag in simpleProject.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
        <h1 class="proj-title">{{ simpleProject.title }}</h1>
        <p class="proj-subtitle mono">{{ simpleProject.subtitle }}</p>
        <a v-if="simpleProject.url" :href="simpleProject.url" target="_blank" class="live-link">
          Bekijk live
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </header>
    <div class="content">
      <section class="block" v-if="simpleProject.video">
        <div class="block-label mono">Demo</div>
        <div class="video-wrap">
          <video controls preload="metadata" style="width:100%; border-radius:8px;">
            <source :src="simpleProject.video" />
          </video>
        </div>
      </section>
      <section class="block" v-if="simpleProject.url">
        <div class="block-label mono">Live Preview</div>
        <div class="iframe-wrap">
          <iframe :src="simpleProject.url" frameborder="0" allowfullscreen></iframe>
        </div>
        <a :href="simpleProject.url" target="_blank" class="iframe-caption mono">{{ simpleProject.url }} ↗</a>
      </section>
      <section class="block">
        <div class="block-label mono">Probleem</div>
        <p class="lead">{{ simpleProject.problem }}</p>
      </section>
      <section class="block">
        <div class="block-label mono">Aanpak</div>
        <p class="body-text">{{ simpleProject.approach }}</p>
      </section>
    </div>
  </div>

  <div v-else class="not-found">
    <RouterLink to="/">← Terug naar home</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

const route         = useRoute()
const project       = computed(() => projects.find(p => p.id === route.params.id && p.featured))
const simpleProject = computed(() => projects.find(p => p.id === route.params.id && !p.featured))
</script>

<style scoped>
.project-page { padding-top: 80px; }
.proj-header { border-bottom: 1px solid var(--border); padding: 60px 48px 48px; }
.header-inner { max-width: 800px; margin: 0 auto; }
.back { font-size: 12px; color: var(--muted); text-decoration: none; letter-spacing: 0.06em; display: block; margin-bottom: 32px; transition: color 0.2s; }
.back:hover { color: var(--accent); }
.meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.year { font-size: 12px; color: var(--muted); }
.tags { display: flex; gap: 6px; flex-wrap: wrap; }
.tag { font-size: 11px; font-family: var(--mono); color: var(--accent); background: rgba(200,240,96,0.08); border: 1px solid rgba(200,240,96,0.15); padding: 3px 10px; border-radius: 3px; }
.proj-title { font-size: clamp(36px, 6vw, 72px); font-weight: 800; letter-spacing: -0.03em; line-height: 1; margin-bottom: 12px; }
.proj-subtitle { font-size: 14px; color: var(--accent); margin-bottom: 32px; }
.proj-meta-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; padding-top: 24px; border-top: 1px solid var(--border); }
.meta-item { display: flex; flex-direction: column; gap: 4px; }
.meta-label { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; font-family: var(--mono); }
.meta-val { font-size: 13px; color: var(--text); }
.content { max-width: 800px; margin: 0 auto; padding: 64px 48px; }
.block { margin-bottom: 64px; }
.block-label { font-size: 11px; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }
.lead { font-size: 17px; color: var(--muted); line-height: 1.8; }
.body-text { font-size: 15px; color: var(--muted); line-height: 1.8; }
.callout { background: rgba(200,240,96,0.05); border-left: 3px solid var(--accent); border-radius: 0 8px 8px 0; padding: 24px 28px; margin-bottom: 64px; position: relative; }
.callout p { font-size: 16px; color: var(--text); line-height: 1.7; font-style: italic; }
.callout-quote { position: absolute; top: -8px; left: 20px; font-size: 48px; color: var(--accent); opacity: 0.4; font-family: serif; line-height: 1; }
.asset-card { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 24px; display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; }
.asset-card-left { flex: 1; }
.asset-title { font-size: 15px; font-weight: 600; margin-bottom: 8px; }
.asset-desc { font-size: 13px; color: var(--muted); line-height: 1.7; }
.download-btn { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 600; color: var(--accent); text-decoration: none; border: 1px solid rgba(200,240,96,0.3); padding: 8px 16px; border-radius: 4px; white-space: nowrap; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.04em; }
.download-btn:hover { background: rgba(200,240,96,0.08); }
.boardgame-img { width: 100%; border-radius: 10px; border: 1px solid var(--border); display: block; margin-bottom: 12px; }
.img-caption { font-size: 13px; color: var(--muted); line-height: 1.7; }
.scenario-full { margin-bottom: 40px; }
.scenario-header { display: flex; align-items: baseline; gap: 16px; margin-bottom: 12px; }
.scenario-num { font-size: 28px; font-weight: 700; color: var(--border); line-height: 1; }
.scenario-title { font-size: 18px; font-weight: 600; }
.scenario-desc { font-size: 14px; color: var(--muted); line-height: 1.7; margin-bottom: 24px; }
.video-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.video-label { font-size: 11px; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
.video-wrap { background: #000; border-radius: 8px; overflow: hidden; border: 1px solid var(--border); }
.video-wrap video { width: 100%; display: block; max-height: 280px; }
.timeline { padding-left: 24px; border-left: 2px solid var(--border); }
.tl-item { position: relative; padding-left: 28px; margin-bottom: 40px; }
.tl-dot { position: absolute; left: -31px; top: 4px; width: 10px; height: 10px; border-radius: 50%; background: var(--bg); border: 2px solid var(--accent); }
.tl-sprint { font-size: 11px; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; }
.tl-title { font-size: 16px; font-weight: 600; margin-bottom: 6px; }
.tl-desc { font-size: 14px; color: var(--muted); line-height: 1.7; margin-bottom: 10px; }
.tl-tag { display: inline-block; font-size: 11px; font-family: var(--mono); padding: 3px 10px; border-radius: 4px; border: 1px solid; font-style: italic; }
.stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; margin-bottom: 32px; }
.stat { background: var(--surface); padding: 24px; text-align: center; display: flex; flex-direction: column; gap: 6px; }
.stat-num { font-size: 40px; font-weight: 800; letter-spacing: -0.03em; line-height: 1; color: var(--text); font-family: var(--mono); }
.accent-num { color: var(--accent); }
.stat-label { font-size: 12px; color: var(--muted); }
.quotes { display: grid; gap: 12px; }
.quote-item { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 16px 20px; }
.quote-person { display: flex; gap: 12px; align-items: baseline; margin-bottom: 8px; }
.quote-person strong { font-size: 13px; font-weight: 600; }
.quote-person span { font-size: 11px; color: var(--muted); }
.quote-text { font-size: 14px; color: var(--muted); font-style: italic; line-height: 1.6; }
.impact-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
.impact-card { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 20px; }
.impact-label { font-size: 11px; font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; font-family: var(--mono); }
.impact-desc { font-size: 13px; color: var(--muted); line-height: 1.6; }
.impact-link { font-size: 12px; color: var(--accent); text-decoration: none; margin-top: 6px; display: inline-block; }
.impact-link:hover { text-decoration: underline; }
.docs-list { display: grid; gap: 10px; }
.doc-row { display: flex; align-items: center; gap: 16px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 14px 18px; text-decoration: none; color: inherit; transition: border-color 0.2s; }
.doc-row:hover { border-color: var(--accent); }
.doc-icon { font-size: 16px; color: var(--accent); width: 28px; text-align: center; }
.doc-info { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.doc-name { font-size: 13px; font-weight: 600; color: var(--text); }
.doc-meta { font-size: 11px; color: var(--muted); }
.doc-ext { font-size: 11px; color: var(--muted); background: var(--border); padding: 2px 8px; border-radius: 3px; }
.live-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 20px; font-size: 13px; font-weight: 600; color: var(--accent); text-decoration: none; border: 1px solid rgba(200,240,96,0.3); padding: 8px 20px; border-radius: 4px; transition: all 0.2s; letter-spacing: 0.04em; text-transform: uppercase; }
.live-link:hover { background: rgba(200,240,96,0.08); }
.iframe-wrap { width: 100%; height: 480px; border-radius: 10px; overflow: hidden; border: 1px solid var(--border); background: var(--surface); }
.iframe-wrap iframe { width: 100%; height: 100%; border: none; }
.iframe-caption { display: block; margin-top: 8px; font-size: 12px; color: var(--muted); text-decoration: none; transition: color 0.2s; }
.iframe-caption:hover { color: var(--accent); }
.not-found { padding: 120px 48px; text-align: center; }
.not-found a { color: var(--accent); }
.simple .proj-title { font-size: clamp(28px, 5vw, 48px); }
.mono { font-family: var(--mono); }

@media (max-width: 768px) {
  .proj-header { padding: 60px 24px 32px; }
  .content { padding: 48px 24px; }
  .video-grid { grid-template-columns: 1fr; }
  .stats-row { grid-template-columns: 1fr; }
  .proj-meta-row { grid-template-columns: 1fr; }
  .asset-card { flex-direction: column; }
  .iframe-wrap { height: 280px; }
}
</style>