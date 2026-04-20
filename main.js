// Renders the program flow table from programData (defined in data.js)

(function () {
  const tbody = document.getElementById('tableBody');

  programData.forEach((row, rowIndex) => {
    const tr = document.createElement('tr');
    tr.style.animationDelay = `${rowIndex * 0.06}s`;

    // ── Break row ───────────────────────────────────────────────────────────
    if (row.type === 'break') {
      tr.classList.add('break-row');
      const td = document.createElement('td');
      td.colSpan = 7;
      td.textContent = row.text;
      tr.appendChild(td);
      tbody.appendChild(tr);
      return;
    }

    // ── Time cell ───────────────────────────────────────────────────────────
    const timeTd = document.createElement('td');
    timeTd.classList.add('time-cell');
    timeTd.textContent = row.time;
    tr.appendChild(timeTd);

    // ── Role cells ──────────────────────────────────────────────────────────
    row.cells.forEach(cell => {
      const td = document.createElement('td');
      td.classList.add(cell.type);

      const label = document.createElement('span');
      label.classList.add('cell-label');
      label.textContent = cell.label;

      const content = document.createElement('span');
      content.classList.add('cell-content');
      content.textContent = cell.content;

      td.appendChild(label);
      td.appendChild(content);
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  // ── Print button (keyboard shortcut hint) ─────────────────────────────────
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      window.print();
    }
  });
})();
