import React, { useState } from "react";

/*
  Updated App.jsx - uses DMD Clothing product images directly from the product page CDN.
  Gallery + thumbnails + price box + sizes + key features.
*/

const IMAGES = [
  "https://image.cdn.shpy.in/438426/CharcoalBlack-1764068893845.png?format=webp&width=600",
  "https://image.cdn.shpy.in/438426/CharcoalBlack5-1764068894754.png?format=webp&width=600",
  "https://image.cdn.shpy.in/438426/CharcoalBlack4-1764068895409.png?format=webp&width=600",
  "https://image.cdn.shpy.in/438426/CharcoalBlack3-1764068896062.png?format=webp&width=600",
  "https://image.cdn.shpy.in/438426/CharcoalBlack2-1764068897060.png?format=webp&width=600",
  "https://image.cdn.shpy.in/438426/CharcoalBlack6-1764068897951.png?format=webp&width=600",
  "https://image.cdn.shpy.in/438426/CharcoalBlack-1764068893845.png?format=webp&width=260",
  "https://image.cdn.shpy.in/438426/CharcoalBlack5-1764068894754.png?format=webp&width=260",
  "https://image.cdn.shpy.in/438426/CharcoalBlack4-1764068895409.png?format=webp&width=260"
];

export default function App() {
  const [mainIndex, setMainIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ["28", "30", "32", "34", "36", "38", "40", "42", "44"];

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* LEFT: Gallery */}
        <div style={styles.left}>
          <div style={styles.gallery}>
            <div style={styles.mainImageWrap}>
              <img
                src={IMAGES[mainIndex]}
                alt={`product-${mainIndex}`}
                style={styles.mainImage}
              />
            </div>

            <div style={styles.thumbRow}>
              {IMAGES.slice(0, 6).map((src, i) => (
                <button
                  key={i}
                  onClick={() => setMainIndex(i)}
                  style={{
                    ...styles.thumbBtn,
                    boxShadow:
                      mainIndex === i ? "0 6px 18px rgba(11,120,227,0.18)" : "none",
                    border:
                      mainIndex === i ? "2px solid #0b78e3" : "1px solid #e6e6e6"
                  }}
                >
                  <img src={src} alt={"thumb-" + i} style={styles.thumbImg} />
                </button>
              ))}
            </div>
          </div>

          {/* Product details under the gallery */}
          <div style={styles.productDetails}>
            <h2 style={styles.title}>
              Lycra Cotton Stretchable — Plain Formal Trousers (Polo Fit)
            </h2>

            <div style={styles.priceRow}>
              <div style={styles.price}>₹1,349</div>
              <div style={styles.mrp}>₹2,699</div>
              <div style={styles.discount}>50% OFF</div>
            </div>

            <div style={{ marginTop: 12 }}>
              <strong>Key Features</strong>
              <ul style={{ marginTop: 8 }}>
                <li>Polo Fit Design for Modern Style</li>
                <li>Poly Cotton Express Mattee Blend — Comfortable & Stretchable</li>
                <li>Wrinkle Resistant & Easy Care</li>
                <li>Cross Pocket with Watch Pocket Inside</li>
              </ul>
            </div>

            <div style={{ marginTop: 14 }}>
              <strong>Sizes</strong>
              <div style={styles.sizesRow}>
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      ...styles.sizeBtn,
                      borderColor: selectedSize === s ? "#0b78e3" : "#ddd",
                      background: selectedSize === s ? "#eef6ff" : "white"
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Purchase box */}
        <div style={styles.right}>
          <div style={styles.buyCard}>
            <h1 style={{ margin: 0, fontSize: 20 }}>
              DMD Clothing — Men's Formal Trousers
            </h1>
            <div style={{ marginTop: 10 }}>
              <div style={styles.priceLarge}>₹1,349</div>
              <div style={styles.mrpSmall}>₹2,699</div>
              <div style={styles.savings}>You save ₹1,350 (50%)</div>
            </div>

            <div style={{ marginTop: 14 }}>
              <label style={{ display: "block", marginBottom: 6 }}>Select size</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      ...styles.sizePick,
                      background: selectedSize === s ? "#0b78e3" : "white",
                      color: selectedSize === s ? "white" : "#111",
                      borderColor: selectedSize === s ? "#0b78e3" : "#ddd"
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 10, color: "#666", fontSize: 13 }}>
                Tip: If between sizes choose the larger for comfort.
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <button style={styles.addBtn}>Add to Cart</button>
              <button style={styles.buyNow}>Buy Now</button>
            </div>

            <div
              style={{
                marginTop: 18,
                borderTop: "1px solid #eee",
                paddingTop: 12
              }}
            >
              <div style={{ fontWeight: 700 }}>Shipping & Returns</div>
              <div style={{ color: "#666", marginTop: 6, fontSize: 14 }}>
                Free shipping across India. Returns/exchanges within 7 days.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / description area */}
      <div style={styles.descriptionWrap}>
        <h3>Description</h3>
        <p style={{ color: "#444", lineHeight: 1.6 }}>
          DMD CLOTHING – Men's Wrinkle-Free Lycra Polo Fit Formal Trousers.
          Premium trousers offering comfort and style for office and meetings.
          Breathable, stretchable, and easy-care fabric — designed for a classic
          silhouette.
        </p>
      </div>
      

      {/* ---------------- Reviews & Ratings Section ---------------- */}
      <div style={styles.reviewsBox}>
        <h3 style={{ marginBottom: 10 }}>Reviews & Ratings</h3>

        <div style={styles.ratingHeader}>
          <div style={styles.bigRating}>4.6⭐</div>
          <div style={{ color: "#555" }}>Based on 128 reviews</div>
        </div>

        <div style={{ marginTop: 12 }}>
          {[
            { star: 5, value: 80 },
            { star: 4, value: 14 },
            { star: 3, value: 4 },
            { star: 2, value: 1 },
            { star: 1, value: 1 }
          ].map((r, i) => (
            <div key={i} style={styles.barRow}>
              <span style={{ width: 30 }}>{r.star}★</span>
              <div style={styles.barTrack}>
                <div
                  style={{ ...styles.barFill, width: `${r.value}%` }}
                ></div>
              </div>
              <span style={{ width: 40 }}>{r.value}%</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 20 }}>
          <div style={styles.reviewItem}>
            <div style={styles.avatar}></div>
            <div>
              <div style={{ fontWeight: 600 }}>Amit Sharma</div>
              <div style={{ fontSize: 14, color: "#666" }}>
                Perfect fitting! Fabric is very comfortable.
              </div>
            </div>
          </div>

          <div style={styles.reviewItem}>
            <div style={styles.avatar}></div>
            <div>
              <div style={{ fontWeight: 600 }}>Rohit Verma</div>
              <div style={{ fontSize: 14, color: "#666" }}>
                Quality is premium. Worth the price!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- END Reviews Section ---------------- */}

      
    </div>
  );
}







const styles = {
  page: {
    fontFamily: "Inter, system-ui, Arial, sans-serif",
    background: "#fafafa",
    minHeight: "100vh",
    paddingBottom: 40
  },
  container: {
    maxWidth: 1200,
    margin: "30px auto",
    display: "flex",
    gap: 24,
    padding: "0 20px"
  },
  left: { flex: 1, minWidth: 0 },
  right: { width: 380, minWidth: 300 },
  gallery: {
    background: "#fff",
    padding: 18,
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(20,20,50,0.04)"
  },
  mainImageWrap: {
    height: 520,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fbfbfc",
    borderRadius: 8,
    overflow: "hidden"
  },
  mainImage: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" },
  thumbRow: {
    display: "flex",
    gap: 10,
    marginTop: 12,
    overflowX: "auto",
    paddingBottom: 6
  },
  thumbBtn: {
    padding: 4,
    borderRadius: 8,
    background: "white",
    cursor: "pointer"
  },
  thumbImg: {
    height: 84,
    objectFit: "cover",
    display: "block",
    borderRadius: 6
  },
  productDetails: {
    marginTop: 16,
    background: "white",
    padding: 16,
    borderRadius: 12
  },
  title: { margin: 0, fontSize: 18 },
  priceRow: {
    display: "flex",
    alignItems: "baseline",
    gap: 12,
    marginTop: 8
  },
  price: { color: "#0b78e3", fontWeight: 700, fontSize: 18 },
  mrp: { textDecoration: "line-through", color: "#888" },
  discount: { color: "#16a34a", fontWeight: 700 },
  sizesRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 8
  },
  sizeBtn: {
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid #ddd",
    cursor: "pointer"
  },
  buyCard: {
    background: "white",
    padding: 18,
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(20,20,50,0.04)"
  },
  priceLarge: { fontSize: 28, fontWeight: 800 },
  mrpSmall: { textDecoration: "line-through", color: "#999", marginTop: 4 },
  savings: { color: "#16a34a", marginTop: 6 },
  sizePick: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #ddd",
    cursor: "pointer"
  },
  addBtn: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "none",
    background: "#0b78e3",
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
    marginBottom: 8
  },
  buyNow: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #0b78e3",
    background: "#eef3ff",
    color: "#0b78e3",
    fontWeight: 700,
    cursor: "pointer"
  },
  descriptionWrap: {
    maxWidth: 1200,
    margin: "18px auto",
    padding: "0 20px"
  },

  /* ------------------ Added Styles for Ratings Section ------------------ */

  reviewsBox: {
    maxWidth: 1200,
    margin: "18px auto",
    padding: 20,
    background: "white",
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(20,20,50,0.04)"
  },
  ratingHeader: {
    display: "flex",
    alignItems: "center",
    gap: 14
  },
  bigRating: {
    fontSize: 34,
    fontWeight: 700,
    color: "#0b78e3"
  },
  barRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 6
  },
  barTrack: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    background: "#eee",
    overflow: "hidden"
  },
  barFill: {
    height: "100%",
    background: "#0b78e3"
  },
  reviewItem: {
    display: "flex",
    gap: 12,
    marginBottom: 14,
    paddingBottom: 14,
    borderBottom: "1px solid #eee"
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: "#ddd"
  }
};
