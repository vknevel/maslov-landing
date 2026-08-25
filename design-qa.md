# Design QA

- Source visual truth: `work/qa/figma-source-1600.png` (Figma node `8931:9349`)
- Hero correction source: `/var/folders/vs/gkgnp6ps65nf39jw4fnkrmzw0000gn/T/codex-clipboard-ff06ea99-960e-4f8e-a8ff-b67a299a0826.png`
- Product interaction source: `/var/folders/vs/gkgnp6ps65nf39jw4fnkrmzw0000gn/T/codex-clipboard-e44e93db-c4e6-4312-b54b-eaa165545cda.png` and Figma node `8950:11147`
- Visual-weight correction sources: `/var/folders/vs/gkgnp6ps65nf39jw4fnkrmzw0000gn/T/codex-clipboard-552e51a5-b41f-4805-b00c-001cfad90e8f.png`, `/var/folders/vs/gkgnp6ps65nf39jw4fnkrmzw0000gn/T/codex-clipboard-15d0e217-23a0-48be-a812-c84ed53f3009.png`, and `/var/folders/vs/gkgnp6ps65nf39jw4fnkrmzw0000gn/T/codex-clipboard-427ac9ca-7a2d-4fc8-94a1-f625edb7d66d.png`
- Footer-photo and border-removal sources: `/var/folders/vs/gkgnp6ps65nf39jw4fnkrmzw0000gn/T/codex-clipboard-0daa043d-484b-4278-ab07-7de850c26e3d.png` and `/var/folders/vs/gkgnp6ps65nf39jw4fnkrmzw0000gn/T/codex-clipboard-bcf97e66-f441-4134-b14c-7cde3f1b58f3.png`
- Scenario-card and product-action sources: `/var/folders/vs/gkgnp6ps65nf39jw4fnkrmzw0000gn/T/codex-clipboard-d46a7cd7-dc5e-426c-af10-90fae4e4a17a.png` and `/var/folders/vs/gkgnp6ps65nf39jw4fnkrmzw0000gn/T/codex-clipboard-d2280f74-7649-4dad-a8e7-ccd341522b89.png`
- Current logo source: `/Users/veronika/Downloads/logo_maslov.svg`
- Mobile hero correction source: `/var/folders/vs/gkgnp6ps65nf39jw4fnkrmzw0000gn/T/codex-clipboard-81453adb-04e8-451a-8391-a19b8d4d6fe0.png`
- Viewport-fit hero source: `/var/folders/vs/gkgnp6ps65nf39jw4fnkrmzw0000gn/T/codex-clipboard-7c390b88-9d3b-4bbe-be83-8556147fd39d.png`
- Implementation evidence: `work/qa/after-balance-top-1600.png`, `work/qa/after-balance-products-potok-1600.png`, `work/qa/after-balance-mobile-390.png`
- Combined comparisons: `work/qa/hero-balance-comparison.png`, `work/qa/products-balance-comparison.png`
- Latest focused comparisons: `work/qa/award-size-comparison.png`, `work/qa/product-size-comparison.png`, `work/qa/card-shadow-comparison.png`
- Latest implementation captures: `work/qa/footer-cows-v2-1280.png`, `work/qa/product-no-border-1280.png`, `work/qa/fixed-header-products-1280.png`
- Current focused captures: `work/qa/scenarios-no-shadow-1280.png`, `work/qa/product-actions-unified-1280.png`, `work/qa/product-actions-unified-mobile.png`
- Logo captures: `work/qa/logo-svg-header-1280.png`, `work/qa/logo-svg-footer-1280.png`
- Latest mobile captures: `work/qa/hero-mobile-rebalanced-390.png`, `work/qa/products-mobile-inline-390.png`
- Current hero captures: `work/qa/hero-mobile-two-founders-390.png`, `work/qa/hero-fit-viewport-1440.png`
- Proportional portrait capture: `work/qa/hero-portraits-proportional-1440.png`
- Desktop viewports: 1600 x 1000 CSS px for the hero and 1600 x 748 CSS px for the full-viewport products state, devicePixelRatio 1
- Source dimensions: 1600 x 7520 px
- Compared implementation captures: 1600 x 1000 px for the hero and 1600 x 748 px for products at 1x density
- Mobile verification viewport: 390 x 844 CSS px, devicePixelRatio 1
- State: default landing page, default first review, application modal closed

## Findings

No actionable P0, P1, or P2 differences remain.

- Fonts and typography: the initial pass used the Google Wittgenstein serif for headings because that family appears in Figma metadata. The visible Figma render uses a sans display treatment, so the implementation was corrected to PT Root UI / Geist for those headings. The post-fix product, review, about, and CTA captures match the source hierarchy, weight, wrapping, and density.
- Typography balance refinement: all UI, display, and body text now use one real Onest family with loaded 400/500/600/700 weights. Section titles use one responsive scale, display letter spacing is consistent, and body copy uses a shared 1.55 leading token instead of a mix of unrelated font stacks and line heights.
- Spacing and layout rhythm: the 1600 px desktop grid, 28 px hero gutters, 100 px section insets, card radii, section gaps, and major image proportions match. Total page height differs by 80 px (about 1.1%), without changing section order or visible hierarchy.
- Visual weight: at the verified 1280 px viewport, the award photo was reduced to `620 x 500` while preserving its crop; the products accordion now uses about `474px` and the visual column about `604px`, giving the product image substantially more presence without changing the sticky interaction.
- Colors and visual tokens: surface `#fdf7f3`, dark footer `#2c2420`, violet CTA `#4939de`, white cards, muted copy, borders, and shadows match the source.
- Facts, the active product, and reviews retain the restrained two-layer shadow from the supplied depth reference. Farm scenario cards are intentionally flat, with neither shadow nor outline, per the latest focused reference.
- Hero surface: the formerly white outer hero/header background now uses the same `#fdf7f3` surface as the rest of the page; the hero photograph itself and its source color treatment are unchanged.
- Image quality and asset fidelity: all hero portraits, field imagery, product renders, farm photos, founder portraits, award imagery, icons, and logos use the exact assets exported from Figma. Crops and corner radii match the visible reference.
- Footer CTA imagery: the original synthetic herd/technology composite was replaced by `public/assets/footer-cows-v2.png`, a 1897 x 829 generated photographic panorama with distinct cows, natural anatomy, no tractor, no HUD overlays, and no letterboxing. The existing dark CTA treatment and copy remain unchanged.
- Copy and content: all visible Figma copy, contacts, product descriptions, reviews, and legal text are present. No placeholder content appears in the default view.
- Brand mark: both header and footer use the supplied 195 x 40 master SVG. The footer instance is inverted to white by CSS on the dark surface, so no raster logo remains in either location.
- Mobile hero: the card is capped at 660px, the title uses a compact 32px scale, and the founder portrait is reduced and moved to the lower-right so it no longer overwhelms the copy or product marks.
- Both founder portraits are present in the mobile hero, layered in the same order as desktop without increasing the mobile card height.

## Full-view comparison evidence

`work/qa/hero-balance-comparison.png` and `work/qa/products-balance-comparison.png` place the relevant source and implementation states side by side at equal density. They confirm the page surface, typography hierarchy, spacing rhythm, product grid, and image scale.

## Focused region comparison evidence

- Hero: `work/qa/after-balance-top-1600.png` compared with the supplied hero correction source in `work/qa/hero-balance-comparison.png`.
- Products: `work/qa/after-balance-products-potok-1600.png` compared with the supplied Potok state in `work/qa/products-balance-comparison.png`.
- Reviews/about: `work/qa/implementation-reviews-1600.jpg` compared against the source beginning at y=5380.
- Footer: `work/qa/implementation-footer-1600.jpg` compared against the source beginning at y=6440.
- Mobile: `work/qa/after-balance-mobile-390.png` confirms a 390 px layout with no horizontal overflow; Figma did not provide a mobile source frame for direct fidelity comparison.

## Interaction and browser checks

- Header and footer anchor navigation works.
- The header is fixed at the top of the viewport (`80px` desktop, `72px` mobile) with a restrained translucent surface; desktop navigation uses 14px labels and mobile menu behavior remains functional.
- The desktop hero card fills exactly the viewport remainder below its 128px top position: `772px` high at 1440 x 900 and `592px` high at 1280 x 720. Its bottom edge equals the viewport bottom in both checks, and the product marks remain fully visible.
- Primary pill CTAs share the same 48px desktop height, 14px text, 999px radius, and horizontal padding. Mobile CTAs share the corresponding 46px/13px scale.
- Product actions now use one control system: both `Получить демо` and `Подробнее` are 48px/14px/999px pills on desktop and 46px/13px/999px on mobile. The primary stays violet; the secondary is transparent with a restrained border.
- The products section occupies exactly one viewport while pinned (`748px` at a `1600 x 748` viewport), with a `300vh` scroll track that advances Арка → Поток → Пульс.
- Clicking any product title selects the same state and swaps the matching Figma-exported product visual.
- At `390 x 844`, the product section returns to normal document flow and behaves as a tap-controlled accordion with no horizontal overflow.
- On mobile, the selected product image now lives inside its expanded accordion panel. The visual change is therefore immediately visible after a tap instead of appearing below all three product rows. The shared sticky visual remains desktop-only.
- Desktop CTA opens a three-field application dialog; Escape/close behavior works.
- Review next control changes the leading review card.
- Mobile menu opens and the responsive page has `scrollWidth: 390` at a 390 px viewport.
- Browser console warnings/errors checked: none.

## Comparison history

1. Initial comparison found a P1 typography mismatch: some section and product headings rendered as serif.
2. Fix: replaced the visible heading stack with PT Root UI / Geist to match the Figma raster truth.
3. Post-fix evidence: the products, reviews, about, and footer captures in `work/qa/comparison-desktop.jpg` show the corrected sans hierarchy. No P0/P1/P2 issue remains.
4. Hero refinement found a P1 responsive-scaling issue below the 1600 px design width: fixed pixel coordinates made the portraits too large and allowed the background image to end before the hero card.
5. Fix: converted the desktop hero canvas to a 1544:846 responsive container and expressed its background, portraits, text, CTA, and product marks in proportional container units. The 1600 px composition remains unchanged while intermediate desktop widths scale as one unit.
6. Post-fix evidence: `work/qa/hero-comparison-fixed.jpg` places the supplied target and browser render side by side at 1600 x 983. `work/qa/hero-fixed-1600.jpg` contains the implementation capture. No gray gap, horizontal overflow, portrait enlargement, or text collision remains. A 390 x 844 regression capture also retained the existing mobile layout with `scrollWidth: 390`.
7. Product-section refinement replaced the static three-row list with the requested full-viewport sticky accordion. At `1600 x 748`, the verified grid is `620px + 60px + 720px`, the sticky element remains at `top: 0`, and all three states reveal the correct copy and image.
8. Global-balance pass found P2 inconsistencies from mixed Onest/Geist/PT Root UI fallbacks, synthesized heading weights, isolated section paddings, and a white hero surround against the warm page surface.
9. Fix: standardized the page on Onest with real loaded weights, introduced shared responsive page-padding, section-spacing, title-size, and body-leading tokens, aligned card/section gaps, and changed the hero surround to `#fdf7f3`.
10. Post-fix evidence: `work/qa/hero-balance-comparison.png` and `work/qa/products-balance-comparison.png` compare equal-size source and browser renders. Desktop has no horizontal overflow; the sticky products block remains exactly one viewport high. The `390 x 844` mobile capture also has no horizontal overflow and retains the intended responsive layout.
11. Visual-weight follow-up found two P2 imbalances at the 1280 px viewport: the award photo dominated its copy, while the products accordion left only about 450px for the product visual. White cards also lacked the depth shown in the supplied reference.
12. Fix: capped the award visual at 620 x 500, shifted the products grid to roughly 44/56 with a 604px visual column, increased the dashboard canvas to 430px high, tightened the sticky section's vertical padding, and applied one shared subtle shadow token to white cards.
13. Post-fix evidence: `work/qa/award-size-comparison.png`, `work/qa/product-size-comparison.png`, and `work/qa/card-shadow-comparison.png`. Desktop and 390px mobile checks show no horizontal overflow; the products section remains exactly one viewport high on desktop and returns to normal flow on mobile.
14. Footer-image follow-up found a P1 asset-quality issue: the old image contained a futuristic tractor/HUD treatment and visibly repeated cows. The replacement panorama uses a natural golden-hour pasture, individually varied animals, and no technology artifacts. Browser evidence: `work/qa/footer-cows-v2-1280.png`.
15. Product visual follow-up removed the outer CSS border from the Arka dashboard image while preserving its rounded crop and native screenshot content. Browser-computed border is `0px none`; evidence: `work/qa/product-no-border-1280.png`.
16. Header/control follow-up fixed the navigation to the viewport, reduced menu typography, standardized all primary CTA geometry, and changed the desktop products sticky panel to fill exactly the viewport area below the fixed header (`top: 80`, `height: 640` at a 720px viewport). Mobile menu and 46px CTA scale were verified at 390 x 844 with no overflow.
17. Scenario/action follow-up removed both the shadow and thin outline from farm scenario cards, and converted `Подробнее` from a text link into a full secondary pill matching the primary action's geometry. Computed desktop values are 48px height, 14px type, and 999px radius for both controls; mobile values are 46px and 13px. The 390px layout has no horizontal overflow.
18. Logo follow-up replaced the raster header mark and previous footer asset with the user-supplied `logo_maslov.svg`. Both instances resolve to the same 195 x 40 vector source; browser verification shows no horizontal overflow and the footer inversion remains crisp.
19. Secondary-action follow-up removed the fill from `Подробнее` in both default and hover states. Browser-computed background is fully transparent (`rgba(0, 0, 0, 0)`); the 48px height, 999px radius, and thin outline remain unchanged.
20. Mobile products follow-up found that state changes were working but the shared image sat below the full accordion, outside the visible response area. Each mobile panel now reveals its matching image inline; Potok, Arka, and Pulse all switch through the same state while the desktop shared visual remains unchanged.
21. Mobile hero follow-up reduced the composition from a portrait-dominated 720px card to a capped 660px layout with a 32px heading, smaller lower-right portrait, tighter copy, and product marks kept over the dark field. The verified 390 x 844 viewport has no horizontal overflow.
22. Founder follow-up restored the second portrait on mobile and layered the founders across the lower half of the existing 660px card. Both source images are visible at 390 x 844 and horizontal overflow remains false.
23. Viewport-fit follow-up replaced the desktop hero's fixed source aspect-ratio height with `calc(100svh - 128px)`. Browser measurements confirm `top + height = viewport height` at both 1440 x 900 and 1280 x 720, with no cropped product marks or horizontal overflow.
24. Footer CTA follow-up aligned `Связаться в Telegram` with the neighboring primary action's typography. Both controls now compute to 14px, weight 500, uppercase, 14px line-height, and -0.14px letter-spacing on desktop; the Telegram action remains visually unfilled.
25. Portrait-proportion follow-up replaced the desktop founders' `object-fit: fill` behavior with `contain` and bottom anchoring. Both source images now retain their intrinsic aspect ratios at every viewport height while the hero still ends exactly at the viewport bottom.

## Follow-up polish

- P3: if the project is deployed, self-host Onest instead of relying on Google Fonts so first-load typography is fully deterministic.

final result: passed
