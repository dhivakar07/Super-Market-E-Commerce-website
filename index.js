// Dynamic rotating headline
    const headlines = [
      "Healthy & Fresh Groceries",
      "Delivered Right to Your Door",
      "Save Big on Organic Produce",
      "Freshness You Can Trust"
    ];
    let hIndex = 0;
    const headlineEl = document.getElementById("headline");

    setInterval(() => {
      hIndex = (hIndex + 1) % headlines.length;
      headlineEl.textContent = headlines[hIndex];
    }, 4000);

