<template>
  <RouterLink :to="`/project/${project.id}`" class="card" :class="{ featured: project.featured }">
    <div class="card-top">
      <span class="year mono">{{ project.year }}</span>
      <div class="tags">
        <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
    <h3 class="title">{{ project.title }}</h3>
    <p class="subtitle">{{ project.subtitle }}</p>
    <p class="desc">{{ project.shortDesc }}</p>
    <div class="arrow">
      <span>Bekijk project</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({ project: Object })
</script>

<style scoped>
.card {
  display: block;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(200, 240, 96, 0.03) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s;
}
.card:hover {
  border-color: #333;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}
.card:hover::before { opacity: 1; }
.card.featured {
  border-color: rgba(200, 240, 96, 0.2);
}
.card.featured::before {
  background: linear-gradient(135deg, rgba(200, 240, 96, 0.05) 0%, transparent 60%);
  opacity: 1;
}
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.year {
  font-size: 12px;
  color: var(--muted);
}
.tags {
  display: flex;
  gap: 6px;
}
.tag {
  font-size: 11px;
  font-family: var(--mono);
  color: var(--muted);
  background: var(--border);
  padding: 3px 8px;
  border-radius: 3px;
}
.featured .tag {
  color: var(--accent);
  background: rgba(200, 240, 96, 0.08);
}
.title {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
  color: var(--text);
}
.subtitle {
  font-size: 13px;
  color: var(--accent);
  font-family: var(--mono);
  margin-bottom: 12px;
}
.featured .subtitle { color: var(--accent); }
.desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 24px;
}
.arrow {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--muted);
  transition: color 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.card:hover .arrow { color: var(--accent); }
.mono { font-family: var(--mono); }
</style>
