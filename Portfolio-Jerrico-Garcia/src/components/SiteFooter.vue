<template>
  <footer>
    <div class="inner">
      <span class="name">Jerrico Garcia</span>
      <div class="links">
        <a href="mailto:jerricoluiz.garcia@gmail.com">jerricoluiz.garcia@gmail.com</a>
        <a href="https://linkedin.com/in/jerrico-garcia" target="_blank">LinkedIn</a>
      </div>
      <span class="year mono">{{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--border);
  padding: 32px 48px;
  margin-top: 80px;
}
.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.name {
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
}
.links {
  display: flex;
  gap: 24px;
}
.links a {
  font-size: 13px;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}
.links a:hover { color: var(--accent); }
.year {
  font-size: 12px;
  color: var(--muted);
}
.mono { font-family: var(--mono); }
@media (max-width: 640px) {
  footer { padding: 24px; }
}
</style>
