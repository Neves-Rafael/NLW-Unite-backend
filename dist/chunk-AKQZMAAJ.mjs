// src/utils/generate-slug.ts
function generateSlug(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9 ]/g, "").trim().replace(/\s+/g, "-").toLowerCase();
}

export {
  generateSlug
};
