'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─────────────────────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────────────────────

const mainCategories = [
  { id: 'sandwiches', label: 'Sandwiches', icon: '🥪' },
  { id: 'fastfood',   label: 'Fast Food',  icon: '🍔' },
  { id: 'beverages',  label: 'Beverages',  icon: '☕' },
  { id: 'extras',     label: 'Extras',     icon: '✦'  },
]

// b = fan favourite | h = spicy
const categoryGroups = {
  sandwiches: [
    {
      group: 'Non-Grilled',
      items: [
        { id: 101, n: 'Bread Butter',        p: '₹40' },
        { id: 102, n: 'Bread Butter Jam',    p: '₹50' },
        { id: 103, n: 'Peanut Butter',       p: '₹60' },
        { id: 104, n: 'Bread Butter Cheese', p: '₹70' },
        { id: 105, n: 'Chutney Cheese',      p: '₹70', b: true },
        { id: 106, n: 'Veg Sandwich',        p: '₹50' },
        { id: 107, n: 'Veg Cheese Sandwich', p: '₹80', b: true },
      ],
    },
    {
      group: 'Gas Toast',
      items: [
        { id: 201, n: 'Only Cheese Toast',        p: '₹70',  b: true },
        { id: 202, n: 'Veg Toast',                p: '₹60'  },
        { id: 203, n: 'Veg Cheese Toast',         p: '₹90',  b: true },
        { id: 204, n: 'Aloo Masala Toast',        p: '₹60'  },
        { id: 205, n: 'Aloo Masala Cheese Toast', p: '₹80'  },
        { id: 206, n: 'Mayo Corn Toast',          p: '₹90'  },
        { id: 207, n: 'Chilli Cheese Toast',      p: '₹100', b: true, h: true },
      ],
    },
    {
      group: 'Grilled',
      items: [
        { id: 301, n: 'Bread Butter Grill',            p: '₹60'  },
        { id: 302, n: 'Chocolate Sandwich',            p: '₹90'  },
        { id: 303, n: 'Only Cheese Grill',             p: '₹110' },
        { id: 304, n: 'Veg Grill',                     p: '₹80'  },
        { id: 305, n: 'Veg Cheese Grill',              p: '₹110' },
        { id: 306, n: 'Aloo Masala Grill',             p: '₹80'  },
        { id: 307, n: 'Aloo Masala Cheese Grill',      p: '₹110', b: true },
        { id: 308, n: 'Mayo Corn Grill',               p: '₹110' },
        { id: 309, n: 'Peri Peri Corn Grill',          p: '₹120', b: true, h: true },
        { id: 310, n: 'Corn Chilli Cheese Grill',      p: '₹120', h: true },
        { id: 311, n: 'Chilli Cheese Grill',           p: '₹130', h: true },
        { id: 312, n: 'Tandoori Paneer Cheese Grill',  p: '₹150', b: true },
        { id: 313, n: 'Peri Peri Paneer Cheese Grill', p: '₹150', h: true },
        { id: 314, n: 'Schezwan Paneer Cheese Grill',  p: '₹150', h: true },
      ],
    },
    {
      group: 'Triangle Grill',
      items: [
        { id: 401, n: 'Veg Cheese Grill',        p: '₹140', b: true },
        { id: 402, n: 'Melting Cheese Grill',    p: '₹200', b: true },
        { id: 403, n: 'Paneer Veg Cheese Grill', p: '₹220' },
        { id: 404, n: 'Paneer Tandoori Grill',   p: '₹250' },
        { id: 405, n: 'Rimzim Sandwich',         p: '—'    },
      ],
    },
    {
      group: 'Open Grilled',
      items: [
        { id: 501, n: 'Open Veg Cheese Grill',             p: '₹120' },
        { id: 502, n: 'Open Chilli Cheese Grill',          p: '₹140', b: true, h: true },
        { id: 503, n: 'Open Peri Peri Corn Cheese Grill',  p: '₹160', h: true },
        { id: 504, n: 'Open Paneer Cheese Grill',          p: '₹160', b: true },
        { id: 505, n: 'Open Tandoori Paneer Cheese Grill', p: '₹180' },
      ],
    },
  ],
  fastfood: [
    {
      group: 'Pizza',
      note: 'Small / Large',
      items: [
        { id: 601, n: 'Margherita',      p: '₹100 / ₹140' },
        { id: 602, n: 'Onion Capsicum',  p: '₹120 / ₹160' },
        { id: 603, n: 'Corn Onion',      p: '₹120 / ₹160' },
        { id: 604, n: 'Veg Cheese',      p: '₹140 / ₹180', b: true },
        { id: 605, n: 'Corn Paneer',     p: '₹160 / ₹200' },
        { id: 606, n: 'Veg Paneer',      p: '₹180 / ₹220' },
        { id: 607, n: 'Tandoori Paneer', p: '₹200 / ₹240', b: true },
      ],
    },
    {
      group: 'Fries',
      items: [
        { id: 701, n: 'French Fries',           p: '₹80'  },
        { id: 702, n: 'Cheesy French Fries',    p: '₹120' },
        { id: 703, n: 'Peri Peri French Fries', p: '₹100', b: true, h: true },
        { id: 704, n: 'Peri Peri Cheese Fries', p: '₹150', b: true, h: true },
        { id: 705, n: 'Chipotle Cheese Fries',  p: '₹150' },
      ],
    },
    {
      group: 'Burger',
      note: 'Single / Double Patty',
      items: [
        { id: 801, n: 'Aloo Tikki Burger',             p: '₹60 / ₹80',   b: true },
        { id: 802, n: 'Veg Tikki Burger',              p: '₹80 / ₹100'  },
        { id: 803, n: 'Veg Cheese Burger',             p: '₹100 / ₹120' },
        { id: 804, n: 'Veg Tandoori Cheese Burger',    p: '₹120 / ₹140' },
        { id: 805, n: 'Mexican Cheese Burger',         p: '₹120 / ₹140', b: true, h: true },
        { id: 806, n: 'Paneer Tikki Burger',           p: '₹150'        },
        { id: 807, n: 'Paneer Cheese Burger',          p: '₹180',        b: true },
        { id: 808, n: 'Paneer Tandoori Cheese Burger', p: '₹180'        },
      ],
    },
    {
      group: 'Maggi',
      items: [
        { id: 901, n: 'Masala Maggi',           p: '₹60',  b: true },
        { id: 1001, n: 'Crispy Finger',              p: '₹120' },
        { id: 902, n: 'Veg Masala Maggi',       p: '₹80'  },
        { id: 903, n: 'Veg Cheese Maggi',       p: '₹100', b: true },
        { id: 904, n: 'Peri Peri Maggi',        p: '₹100', h: true },
        { id: 905, n: 'Peri Peri Cheese Maggi', p: '₹120', h: true },
        { id: 906, n: 'Schezwan Maggi',         p: '₹100', h: true },
      ],
    },
    {
      group: 'Nuggets',
      items: [
        { id: 1001, n: 'Crispy Veggie Finger',       p: '₹120' },
        { id: 1002, n: 'Chilli Garlic Potato Shots', p: '₹120', h: true },
        { id: 1003, n: 'Potato Cheese Shots',        p: '₹120' },
        { id: 1004, n: 'Onion Ring',                 p: '₹150', b: true },
        { id: 1005, n: 'Cheese Corn Triangles',      p: '₹150' },
        { id: 1006, n: 'Cheese Jalapeño Poppers',    p: '₹150', h: true },
        { id: 1007, n: 'Pizza Pocket',               p: '₹180', b: true },
        { id: 1008, n: 'Crispy Pizza Finger',        p: '₹180' },
      ],
    },
    {
      group: 'Garlic Bread',
      items: [
        { id: 1101, n: 'Cheese Garlic Bread',                    p: '₹100', b: true },
        { id: 1102, n: 'Cheese Chilli Garlic Bread',             p: '₹120', h: true },
        { id: 1103, n: 'Cheese Garlic Bread (Onion & Capsicum)', p: '₹120' },
      ],
    },
  ],
  beverages: [
    {
      group: 'Mocktails',
      items: [
        { id: 1201, n: 'Fresh Lime Mojito',   p: '₹80', b: true },
        { id: 1202, n: 'Virgin Mojito',       p: '₹80' },
        { id: 1203, n: 'Strawberry Mojito',   p: '₹80' },
        { id: 1204, n: 'Watermelon Mojito',   p: '₹90', b: true },
        { id: 1205, n: 'Green Apple Mojito',  p: '₹90' },
        { id: 1206, n: 'Blue Curacao Mojito', p: '₹90' },
      ],
    },
    {
      group: 'Hot Drinks',
      items: [
        { id: 1301, n: 'Ginger Tea',           p: '₹25' },
        { id: 1302, n: 'Black Tea',            p: '₹25' },
        { id: 1303, n: 'Honey Lemon Tea',      p: '₹35', b: true },
        { id: 1304, n: 'Black Coffee',         p: '₹25' },
        { id: 1305, n: 'Hot Coffee',           p: '₹40', b: true },
        { id: 1306, n: 'Hot Chocolate',        p: '₹50' },
        { id: 1307, n: 'Flavoured Hot Coffee', p: '₹60' },
      ],
    },
    {
      group: 'Cold Drinks',
      items: [
        { id: 1401, n: 'Cold Coffee',                    p: '₹60' },
        { id: 1402, n: 'Cold Coffee Ice Cream',          p: '₹90', b: true },
        { id: 1403, n: 'Chocolate Cold Coffee',          p: '₹110' },
        { id: 1404, n: 'Vanilla / Hazelnut Cold Coffee', p: '₹90' },
        { id: 1405, n: 'Lemon Iced Tea',                 p: '₹90' },
        { id: 1406, n: 'Peach Iced Tea',                 p: '₹90' },
      ],
    },
  ],
  extras: [
    {
      group: 'Add-Ons',
      items: [
        { id: 1501, n: 'Extra Amul Cheese', p: '₹30' },
        { id: 1502, n: 'Atta Maggi',        p: '₹30' },
        { id: 1503, n: 'Atta Maggi Extra',  p: '₹30' },
        { id: 1504, n: 'Peri Peri Sauce',   p: '₹30' },
        { id: 1505, n: 'Mayo Sauce',        p: '₹30' },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────
//  GROUP ICONS
// ─────────────────────────────────────────────────────────────

const groupIcons = {
  'Non-Grilled':    '🥪',
  'Gas Toast':      '🍞',
  'Grilled':        '🔥',
  'Triangle Grill': '🫓',
  'Open Grilled':   '🫔',
  'Pizza':          '🍕',
  'Fries':          '🍟',
  'Burger':         '🍔',
  'Maggi':          '🍜',
  'Nuggets':        '🧆',
  'Garlic Bread':   '🥖',
  'Mocktails':      '🍹',
  'Hot Drinks':     '☕',
  'Cold Drinks':    '🧋',
  'Add-Ons':        '✨',
}

// ─────────────────────────────────────────────────────────────
//  STYLES  —  Pet Pooja layout + chalkboard skin
// ─────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Caveat:wght@600;700&display=swap');

  .kw {
    /* ── Chalkboard palette ── */
    --chalk-bg:      #1e2528;
    --chalk-left:    #181e21;
    --chalk-card:    #252d31;
    --chalk-card2:   #2c353a;
    --chalk-border:  rgba(255,255,255,0.07);
    --chalk-border2: rgba(255,255,255,0.13);

    --yellow:        #f5c842;
    --yellow-dim:    rgba(245,200,66,0.12);
    --yellow-faint:  rgba(245,200,66,0.06);
    --orange:        #f07b2b;
    --orange-dim:    rgba(240,123,43,0.15);

    --chalk-white:   #f0ece4;
    --chalk-mid:     #b0aa9e;
    --chalk-soft:    #7a7570;
    --chalk-xs:      rgba(240,236,228,0.35);

    --green:         #4caf7d;
    --green-dim:     rgba(76,175,125,0.18);

    --header-h:      56px;
    --nav-h:         60px;
    --left-w:        80px;

    font-family: 'Nunito', sans-serif;
    background: var(--chalk-bg);
    color: var(--chalk-white);

    /*
     * Flexbox column: Header → Body → BottomNav
     * On desktop the parent page has its own header, so we fill remaining space.
     * On mobile (QR code use-case) the page hides the site header, so we use 100dvh.
     */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;              /* fills whatever the parent gives it */
    overflow: hidden;
    position: relative;

    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  /* ═══════════════════════════════════
     HEADER
  ═══════════════════════════════════ */
  .kw-header {
    height: var(--header-h);
    flex-shrink: 0;
    background: var(--chalk-left);
    border-bottom: 1px solid var(--chalk-border2);
    display: flex; align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    gap: 12px;
    z-index: 20;
  }

  .kw-brand { display: flex; align-items: center; gap: 10px; }

  .kw-logo {
    width: 38px; height: 38px;
    background: var(--yellow);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 19px; flex-shrink: 0;
  }

  .kw-name {
    font-family: 'Caveat', cursive;
    font-size: 22px;
    font-weight: 700;
    color: var(--chalk-white);
    letter-spacing: 0.2px;
    line-height: 1.1;
  }
  .kw-name b { color: var(--yellow); }

  .kw-tagline {
    font-size: 10.5px;
    font-weight: 600;
    color: var(--chalk-soft);
    margin-top: 1px;
    letter-spacing: 0.3px;
  }

  /* Pure-veg pill */
  .kw-veg {
    display: flex; align-items: center; gap: 4px;
    font-size: 10px; font-weight: 800;
    color: var(--green);
    border: 1.5px solid rgba(76,175,125,0.4);
    background: var(--green-dim);
    padding: 4px 10px; border-radius: 99px;
    white-space: nowrap; flex-shrink: 0;
    letter-spacing: 0.3px;
  }
  .kw-veg-sq {
    width: 8px; height: 8px;
    border-radius: 2px; background: var(--green);
  }

  /* ═══════════════════════════════════
     BOTTOM NAV — flex child, never overlaps content
  ═══════════════════════════════════ */
  .kw-nav {
    flex-shrink: 0;
    height: var(--nav-h);
    background: var(--chalk-left);
    border-top: 1px solid var(--chalk-border2);
    display: flex; align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    scrollbar-width: none;
    padding: 0 12px;
    gap: 12px;
    padding-bottom: env(safe-area-inset-bottom, 0px);
    z-index: 60;
  }
  .kw-nav::-webkit-scrollbar { display: none; }

  .kw-nav-btn {
    flex-shrink: 0;
    display: flex; flex-direction: column;
    align-items: center; gap: 3px;
    padding: 7px 12px 4px;
    border: none; background: transparent; cursor: pointer;
    border-radius: 12px;
    transition: background 0.15s;
    position: relative;
  }
  .kw-nav-btn.active { background: var(--yellow-dim); }

  .kw-nav-icon {
    font-size: 21px; line-height: 1;
    transition: transform 0.22s cubic-bezier(.34,1.56,.64,1);
  }
  .kw-nav-btn.active .kw-nav-icon { transform: scale(1.16) translateY(-2px); }

  .kw-nav-lbl {
    font-size: 9.5px; font-weight: 800;
    color: var(--chalk-soft);
    transition: color 0.15s; white-space: nowrap;
    letter-spacing: 0.2px;
  }
  .kw-nav-btn.active .kw-nav-lbl { color: var(--yellow); }

  /* top pip */
  .kw-nav-pip {
    position: absolute; top: 1px;
    left: 50%; transform: translateX(-50%);
    width: 22px; height: 3px;
    border-radius: 0 0 3px 3px;
    background: var(--yellow);
    opacity: 0; transition: opacity 0.15s;
  }
  .kw-nav-btn.active .kw-nav-pip { opacity: 1; }

  /* ═══════════════════════════════════
     BODY — split layout, fills between header & nav
  ═══════════════════════════════════ */
  .kw-body {
    flex: 1;
    min-height: 0;           /* critical: allows flex child to shrink & scroll */
    display: flex;
    overflow: hidden;
  }

  /* ═══════════════════════════════════
     LEFT RAIL
  ═══════════════════════════════════ */
  .kw-left {
    width: var(--left-w);
    flex-shrink: 0;
    background: var(--chalk-left);
    border-right: 1px solid var(--chalk-border2);
    overflow-y: auto; scrollbar-width: none;
    padding: 6px 0;
  }
  .kw-left::-webkit-scrollbar { display: none; }

  .kw-rail-btn {
    width: 100%;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 5px; padding: 13px 4px;
    border: none; background: transparent; cursor: pointer;
    border-left: 3px solid transparent;
    transition: all 0.15s ease;
    position: relative;
  }
  .kw-rail-btn.active {
    background: var(--yellow-faint);
    border-left-color: var(--yellow);
  }

  .kw-rail-icon { font-size: 19px; line-height: 1; }

  .kw-rail-lbl {
    font-family: 'Nunito', sans-serif;
    font-size: 10px; font-weight: 700;
    color: var(--chalk-soft);
    text-align: center; line-height: 1.2;
    word-break: break-word; padding: 0 3px;
    transition: color 0.15s;
  }
  .kw-rail-btn.active .kw-rail-lbl { color: var(--yellow); }

  /* ═══════════════════════════════════
     RIGHT SCROLL AREA
  ═══════════════════════════════════ */
  .kw-right {
    flex: 1;
    overflow-y: auto; scrollbar-width: none;
    padding: 6px 0 16px;     /* no nav-height hack needed — nav is a sibling now */
    overscroll-behavior: contain;
    background: var(--chalk-bg);
    -webkit-overflow-scrolling: touch;   /* smooth momentum scroll on iOS */
  }
  .kw-right::-webkit-scrollbar { display: none; }

  /* ═══════════════════════════════════
     GROUP SECTION
  ═══════════════════════════════════ */
  .kw-group { margin-bottom: 6px; }

  /* Sticky group header */
  .kw-group-head {
    position: sticky; top: 0; z-index: 10;
    background: var(--chalk-bg);
    padding: 10px 14px 7px;
    display: flex; align-items: baseline; gap: 8px;
    border-bottom: 1px dashed var(--chalk-border2);
    margin-bottom: 2px;
  }

  .kw-group-title {
    font-family: 'Caveat', cursive;
    font-size: 18px; font-weight: 700;
    color: var(--yellow);
    letter-spacing: 0.3px; line-height: 1;
  }

  .kw-group-count {
    font-size: 10.5px; font-weight: 600;
    color: var(--chalk-soft);
  }

  .kw-group-note {
    margin-left: auto;
    font-size: 10px; font-weight: 700;
    color: var(--chalk-soft);
    font-style: italic;
    letter-spacing: 0.2px;
  }

  /* Items container */
  .kw-group-items {
    margin: 0 10px;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid var(--chalk-border);
    background: var(--chalk-card);
  }

  /* ═══════════════════════════════════
     ITEM ROW
  ═══════════════════════════════════ */
  .kw-item {
    display: flex; align-items: center;
    justify-content: space-between;
    gap: 10px; padding: 13px 14px;
    position: relative;
    transition: background 0.1s;
  }
  .kw-item:not(:last-child) {
    border-bottom: 1px solid var(--chalk-border);
  }

  /* Bestseller row */
  .kw-item.best {
    background: var(--chalk-card2);
  }
  .kw-item.best::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, var(--yellow), var(--orange));
    border-radius: 0;
  }

  /* item left */
  .kw-item-left {
    display: flex; align-items: flex-start;
    gap: 9px; flex: 1; min-width: 0;
  }

  /* FSSAI veg square */
  .kw-veg-ind {
    width: 14px; height: 14px;
    border: 2px solid var(--green);
    border-radius: 3px; flex-shrink: 0; margin-top: 2px;
    display: flex; align-items: center; justify-content: center;
  }
  .kw-veg-ind::after {
    content: '';
    width: 6px; height: 6px;
    border-radius: 50%; background: var(--green);
  }

  .kw-item-info { flex: 1; min-width: 0; }

  .kw-item-name {
    font-size: 14px; font-weight: 700;
    color: var(--chalk-white);
    line-height: 1.35; letter-spacing: -0.1px;
  }
  .kw-item.best .kw-item-name { color: #fff; }

  .kw-badges {
    display: flex; flex-wrap: wrap; gap: 4px;
    margin-top: 5px;
  }
  .kw-badge {
    font-size: 9.5px; font-weight: 800;
    padding: 2px 8px; border-radius: 99px;
    letter-spacing: 0.4px;
  }
  .kw-badge-fav {
    background: var(--yellow-dim);
    color: var(--yellow);
    border: 1px solid rgba(245,200,66,0.30);
  }
  .kw-badge-spicy {
    background: var(--orange-dim);
    color: var(--orange);
    border: 1px solid rgba(240,123,43,0.30);
  }

  /* price */
  .kw-item-right { flex-shrink: 0; }

  .kw-price {
    font-family: 'Caveat', cursive;
    font-size: 18px; font-weight: 700;
    color: var(--chalk-mid);
    white-space: nowrap; letter-spacing: 0.2px;
  }
  .kw-item.best .kw-price { color: var(--yellow); }

  /* ═══════════════════════════════════
     MOBILE REFINEMENTS
  ═══════════════════════════════════ */

  /* Small phones (≤ 400px) — tighter left rail */
  @media (max-width: 400px) {
    .kw {
      --left-w: 68px;
      --header-h: 50px;
      --nav-h: 56px;
    }
    .kw-rail-icon { font-size: 17px; }
    .kw-rail-lbl { font-size: 9px; }
    .kw-rail-btn { padding: 10px 3px; gap: 3px; }
    .kw-item { padding: 11px 12px; }
    .kw-item-name { font-size: 13px; }
    .kw-price { font-size: 16px; }
    .kw-group-title { font-size: 16px; }
  }

  /* Standard mobile (≤ 768px) */
  @media (max-width: 768px) {
    .kw {
      --left-w: 74px;
      --header-h: 52px;
      --nav-h: 58px;
    }
    .kw-logo { width: 32px; height: 32px; font-size: 16px; }
    .kw-name { font-size: 19px; }
    .kw-tagline { font-size: 9.5px; }
    .kw-nav-icon { font-size: 20px; }
    .kw-nav-lbl { font-size: 9px; }
  }

  /* When used as full-screen QR menu (parent sets height: 100dvh) */
  @supports (height: 100dvh) {
    .kw-fullscreen {
      height: 100dvh;
    }
  }
`

// ─────────────────────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────────────────────

export default function KitchenWallMenu() {
  const [activeCat, setActiveCat]     = useState('sandwiches')
  const [activeGroup, setActiveGroup] = useState(null)

  const rightRef    = useRef(null)
  const leftRef     = useRef(null)
  const sectionRefs = useRef({})
  const scrollLock  = useRef(false)

  const groups = categoryGroups[activeCat] || []

  // Reset on category change
  useEffect(() => {
    setActiveGroup(groups[0]?.group ?? null)
  }, [activeCat])

  // IntersectionObserver — right scroll drives left rail highlight
  useEffect(() => {
    const right = rightRef.current
    if (!right) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollLock.current) return
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          const name = visible[0].target.dataset.group
          setActiveGroup(name)
          const railBtn = leftRef.current?.querySelector(`[data-rail="${name}"]`)
          if (railBtn) railBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
        }
      },
      { root: right, threshold: 0.25 },
    )

    groups.forEach(({ group }) => {
      const el = sectionRefs.current[group]
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [activeCat, groups])

  // Tap rail → scroll right to section
  const scrollToGroup = useCallback((groupName) => {
    const el = sectionRefs.current[groupName]
    if (!el || !rightRef.current) return
    setActiveGroup(groupName)
    scrollLock.current = true
    const containerTop = rightRef.current.getBoundingClientRect().top
    const elTop        = el.getBoundingClientRect().top
    const offset       = elTop - containerTop + rightRef.current.scrollTop - 2
    rightRef.current.scrollTo({ top: offset, behavior: 'smooth' })
    setTimeout(() => { scrollLock.current = false }, 650)
  }, [])

  const handleCatChange = (catId) => {
    setActiveCat(catId)
    if (rightRef.current) rightRef.current.scrollTop = 0
  }

  return (
    <>
      <style>{css}</style>

      <div className="kw">

        {/* ── HEADER ── */}
        <header className="kw-header">
          <div className="kw-brand">
            <div className="kw-logo">🍽️</div>
            <div>
              <div className="kw-name">Menu</div>
              <div className="kw-tagline">Fresh · Made with love</div>
            </div>
          </div>
          <div className="kw-veg">
            <span className="kw-veg-sq" /> Pure Veg
          </div>
        </header>

        {/* ── SPLIT BODY ── */}
        <div className="kw-body">

          {/* LEFT RAIL - Main Categories */}
          <aside className="kw-left" ref={leftRef}>
            {mainCategories.map((cat) => (
              <button
                key={cat.id}
                className={`kw-rail-btn${activeCat === cat.id ? ' active' : ''}`}
                onClick={() => handleCatChange(cat.id)}
              >
                <span className="kw-rail-icon">{cat.icon}</span>
                <span className="kw-rail-lbl">{cat.label}</span>
              </button>
            ))}
          </aside>

          {/* RIGHT SCROLL */}
          <main className="kw-right" ref={rightRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {groups.map(({ group, note, items }) => (
                  <div
                    key={group}
                    className="kw-group"
                    data-group={group}
                    ref={(el) => { if (el) sectionRefs.current[group] = el }}
                  >
                    {/* Group heading */}
                    <div className="kw-group-head">
                      <span className="kw-group-title">{group}</span>
                      <span className="kw-group-count">{items.length} items</span>
                      {note && <span className="kw-group-note">{note}</span>}
                    </div>

                    {/* Items */}
                    <div className="kw-group-items">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className={`kw-item${item.b ? ' best' : ''}`}
                        >
                          <div className="kw-item-left">
                            <div className="kw-veg-ind" />
                            <div className="kw-item-info">
                              <div className="kw-item-name">{item.n}</div>
                              {(item.b || item.h) && (
                                <div className="kw-badges">
                                  {item.b && <span className="kw-badge kw-badge-fav">⭐ Fan Fave</span>}
                                  {item.h && <span className="kw-badge kw-badge-spicy">🌶 Spicy</span>}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="kw-item-right">
                            <span className="kw-price">{item.p}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </main>

        </div>

        {/* ── BOTTOM NAV - Sub Groups ── */}
        <nav className="kw-nav">
          {groups.map((group) => (
            <button
              key={group.group}
              className={`kw-nav-btn${group.group === activeGroup ? ' active' : ''}`}
              onClick={() => scrollToGroup(group.group)}
            >
              <span className="kw-nav-pip" />
              <span className="kw-nav-icon">{groupIcons[group.group] || '🍽️'}</span>
              <span className="kw-nav-lbl">{group.group}</span>
            </button>
          ))}
        </nav>

      </div>
    </>
  )
}