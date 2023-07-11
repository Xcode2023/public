import i18n from "@/config/i18n";

function getLangs() {
  const langs = import.meta.glob("./modules/*.json", { eager: true });
  const messages = {};
  for (let [u, de] of Object.entries(langs)) {
    const key = u.slice(10, -5);
    messages[key] = de.default;
  }
  return messages;
}

async function initLanguage(
  i18n,
  messages
) {
  for (let [key, value] of Object.entries(messages)) {
    i18n.global.setLocaleMessage(key, value);
  }
}

initLanguage(i18n, getLangs());
