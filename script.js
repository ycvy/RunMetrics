function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none'; // Alle Tabs ausblenden
    }
    document.getElementById(tabName).style.display = 'block'; // Gewählten Tab anzeigen
}

document.getElementById('berechnen').addEventListener('click', function() {
    const zeit = parseFloat(document.getElementById('zeit').value);
    const distanz = parseFloat(document.getElementById('distanz').value);
    
    if (distanz > 0) {
        const pace = zeit / distanz; // Berechnung der Pace
        const minuten = Math.floor(pace);
        const sekunden = Math.round((pace - minuten) * 60);
        
        // Funktion zur Formatierung der Minuten und Sekunden
        const formatNumber = (num) => num.toString().padStart(2, '0');

        document.getElementById('ergebnis').innerText = `Pace: ${formatNumber(minuten)}:${formatNumber(sekunden)} min/km`;
    } else {
        document.getElementById('ergebnis').innerText = 'Bitte eine gültige Distanz eingeben.';
    }
});

// Kalorienverbrauch berechnen
document.getElementById('kalorien-berechnen').addEventListener('click', function() {
    const gewicht = parseFloat(document.getElementById('gewicht').value);
    const distanz = parseFloat(document.getElementById('distanz-kalorien').value);
    const geschwindigkeit = parseFloat(document.getElementById('geschwindigkeit').value);
    
    if (gewicht > 0 && distanz > 0 && geschwindigkeit > 0) {
        // Kalorienverbrauchsformel (ungefähr)
        const kalorien = (gewicht * 0.9) * distanz; // 0.9 Kalorien pro kg pro km
        document.getElementById('kalorien-ergebnis').innerText = `Verbrannte Kalorien: ${Math.round(kalorien)} kcal`;
    } else {
        document.getElementById('kalorien-ergebnis').innerText = 'Bitte gültige Werte eingeben.';
    }
});

// Standardmäßig den Pace-Tab öffnen
openTab('pace');
