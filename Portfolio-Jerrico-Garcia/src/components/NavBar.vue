<template>
  <nav :class="{ scrolled }">
    <RouterLink to="/" class="logo">JG</RouterLink>
    <div class="links">
      <RouterLink to="/">Work</RouterLink>
      <RouterLink to="/about">Over mij</RouterLink>
      <a href="mailto:jerricoluiz.garcia@gmail.com" class="cta">Contact</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  transition: all 0.3s ease;
}
nav.scrolled {
  background: rgba(10, 10, 10, 0.92);
  backdrop-filter: blur(12px);
  padding: 16px 48px;
  border-bottom: 1px solid var(--border);
}
.logo {
  font-size: 18px;
  font-weight: 800;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: -0.02em;
}
.links {
  display: flex;
  gap: 32px;
  align-items: center;
}
.links a {
  font-size: 13px;
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.2s;
}
.links a:hover,
.links a.router-link-active {
  color: var(--text);
}
.links .cta {
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 6px 16px;
  border-radius: 4px;
  transition: all 0.2s;
}
.links .cta:hover {
  background: var(--accent);
  color: #0a0a0a;
}
@media (max-width: 640px) {
  nav { padding: 16px 24px; }
  nav.scrolled { padding: 12px 24px; }
  .links { gap: 16px; }
  .links .cta { display: none; }
}
</style>
