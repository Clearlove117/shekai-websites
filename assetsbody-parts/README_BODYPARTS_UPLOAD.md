
# Body parts upload kit

This package contains:
- Product images (PNG) in `assets/body-parts/`
- An HTML section `body-parts-section_for_products.html` ready to paste into `products/products.html`

## How to use
1) Upload the `assets/body-parts/` folder to your repository (it must live at the repo root next to `assets/`).
2) Open `products/products.html` and paste the entire `<section id="body-parts">...</section>` from `body-parts-section_for_products.html`
   where you want the Body parts group to appear.
3) Commit and push. Because `products.html` is inside `/products/`, the HTML already uses `../assets/...` paths.
