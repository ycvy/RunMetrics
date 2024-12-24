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

// Grundumsatz berechnen
document.getElementById('bmr-berechnen').addEventListener('click', function() {
    const gewicht = parseFloat(document.getElementById('gewicht-bmr').value);
    const groesse = parseFloat(document.getElementById('groesse').value);
    const alter = parseFloat(document.getElementById('alter').value);
    const geschlecht = document.getElementById('geschlecht').value;
    
    if (gewicht > 0 && groesse > 0 && alter > 0) {
        let bmr;
        if (geschlecht === 'm') {
            // Harris-Benedict-Formel für Männer
            bmr = 88.362 + (13.397 * gewicht) + (4.799 * groesse) - (5.677 * alter);
        } else {
            // Harris-Benedict-Formel für Frauen
            bmr = 447.593 + (9.247 * gewicht) + (3.098 * groesse) - (4.330 * alter);
        }
        document.getElementById('bmr-ergebnis').innerText = `Grundumsatz: ${Math.round(bmr)} kcal/Tag`;
    } else {
        document.getElementById('bmr-ergebnis').innerText = 'Bitte gültige Werte eingeben.';
    }
});

// Herzfrequenzzonen berechnen
document.getElementById('hf-berechnen').addEventListener('click', function() {
    const maxHF = parseFloat(document.getElementById('max-hf').value);
    
    if (maxHF > 0) {
        const zone1 = [Math.round(maxHF * 0.50), Math.round(maxHF * 0.60)];
        const zone2 = [Math.round(maxHF * 0.60), Math.round(maxHF * 0.70)];
        const zone3 = [Math.round(maxHF * 0.70), Math.round(maxHF * 0.80)];
        const zone4 = [Math.round(maxHF * 0.80), Math.round(maxHF * 0.90)];
        const zone5 = [Math.round(maxHF * 0.90), Math.round(maxHF)];

        document.getElementById('hf-ergebnis').innerText = `
            Herzfrequenzzonen:
            - Zone 1: ${zone1[0]} - ${zone1[1]} bpm
            - Zone 2: ${zone2[0]} - ${zone2[1]} bpm
            - Zone 3: ${zone3[0]} - ${zone3[1]} bpm
            - Zone 4: ${zone4[0]} - ${zone4[1]} bpm
            - Zone 5: ${zone5[0]} - ${zone5[1]} bpm
        `;
    } else {
        document.getElementById('hf-ergebnis').innerText = 'Bitte eine gültige maximale Herzfrequenz eingeben.';
    }
});

// Kilometer in Meilen umrechnen
document.getElementById('km-meilen-berechnen').addEventListener('click', function() {
    const kilometer = parseFloat(document.getElementById('kilometer').value);
    
    if (kilometer >= 0) {
        const meilen = kilometer * 0.621371; // 1 Kilometer = 0.621371 Meilen
        document.getElementById('km-meilen-ergebnis').innerText = `${kilometer} Kilometer sind ${meilen.toFixed(2)} Meilen.`;
    } else {
        document.getElementById('km-meilen-ergebnis').innerText = 'Bitte eine gültige Kilometerzahl eingeben.';
    }
});

// Meilen in Kilometer umrechnen
document.getElementById('meilen-km-berechnen').addEventListener('click', function() {
    const meilen = parseFloat(document.getElementById('meilen').value);
    
    if (meilen >= 0) {
        const kilometer = meilen / 0.621371; // 1 Meile = 1 / 0.621371 Kilometer
        document.getElementById('meilen-km-ergebnis').innerText = `${meilen} Meilen sind ${kilometer.toFixed(2)} Kilometer.`;
    } else {
        document.getElementById('meilen-km-ergebnis').innerText = 'Bitte eine gültige Meilenanzahl eingeben.';
    }
});

// Fuß in Höhenmeter umrechnen
document.getElementById('fuss-hoehenmeter-berechnen').addEventListener('click', function() {
    const fuss = parseFloat(document.getElementById('fuss').value);
    
    if (fuss >= 0) {
        const hoehenmeter = fuss * 0.3048; // 1 Fuß = 0.3048 Höhenmeter
        document.getElementById('fuss-hoehenmeter-ergebnis').innerText = `${fuss} Fuß sind ${hoehenmeter.toFixed(2)} Höhenmeter.`;
    } else {
        document.getElementById('fuss-hoehenmeter-ergebnis').innerText = 'Bitte eine gültige Fußzahl eingeben.';
    }
});

// Höhenmeter in Fuß umrechnen
document.getElementById('hoehenmeter-fuss-berechnen').addEventListener('click', function() {
    const hoehenmeter = parseFloat(document.getElementById('hoehenmeter').value);
    
    if (hoehenmeter >= 0) {
        const fuss = hoehenmeter / 0.3048; // 1 Höhenmeter = 1 / 0.3048 Fuß
        document.getElementById('hoehenmeter-fuss-ergebnis').innerText = `${hoehenmeter} Höhenmeter sind ${fuss.toFixed(2)} Fuß.`;
    } else {
        document.getElementById('hoehenmeter-fuss-ergebnis').innerText = 'Bitte eine gültige Höhenmeterzahl eingeben.';
    }
});

document.getElementById('hochrechnen').addEventListener('click', function() {
    const inputTimeMinutes = parseFloat(document.getElementById('bestzeit').value);
    const bestedistanz = parseFloat(document.getElementById('bestedistanz').value);
    // Umrechnungsfaktor basierend auf der Riegel-Formel
    const exponent = 1.06;

    // Gegebene Zeit in Minuten in Sekunden umrechnen
    const inputTimeSeconds = inputTimeMinutes * 60;

    if (bestedistanz > 0) {
        // Funktion zum Berechnen der Zeit für eine neue Distanz
        const predictTime = (newDistanceKm) => {
            const scalingFactor = Math.pow(newDistanceKm / bestedistanz, exponent);
            return inputTimeSeconds * scalingFactor;
        };

        // Funktion zur Formatierung der Zeit
        const formatTime = (seconds) => {
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60);
            const s = Math.round(seconds % 60);
            return `${h > 0 ? h + 'h ' : ''}${m}m ${s}s`;
        };

        // Ergebnisse berechnen und anzeigen
        const distances = {
            '5k': 5,
            '10k': 10,
            'Halbmarathon': 21.0975,
            'Marathon': 42.195
        };

        for (const [key, distance] of Object.entries(distances)) {
            const predictedTime = predictTime(distance);
            document.getElementById(key).innerText = `Zeit auf ${distance} km: ${formatTime(predictedTime)}`;
        }
    } else {
        document.getElementById('bestergebnis').innerText = 'Bitte eine gültige Distanz eingeben.';
    }
});

document.getElementById('vo2maxRechnen').addEventListener('click', function() {
    const vo2inputTimeMinutes = parseFloat(document.getElementById('vo2zeit').value);
    const vo2distanz = parseFloat(document.getElementById('vo2distanz').value);
    const vo2gewicht = parseFloat(document.getElementById('gewicht-vo2').value);

    if (isNaN(vo2inputTimeMinutes) || isNaN(vo2distanz) || isNaN(vo2gewicht) || vo2distanz <= 0 || vo2gewicht <= 0) {
        document.getElementById('vo2max').innerText = 'Bitte gültige Werte für Zeit, Distanz und Gewicht eingeben.';
        return;
    }

    const timeSeconds = vo2inputTimeMinutes * 60;
    const distanceMeters = vo2distanz * 1000;

    // Daniels-Formel für relativen VO₂max
    const vo2maxRelativ = ((distanceMeters / timeSeconds) - 3.5) / 0.2;

    if (vo2maxRelativ <= 0) {
        document.getElementById('vo2max').innerText = 'Der berechnete VO₂max-Wert ist unrealistisch. Bitte überprüfe deine Eingaben.';
        return;
    }

    // Berechnung des absoluten VO₂max
    const vo2maxAbsolut = (vo2maxRelativ * vo2gewicht) / 1000; // in l/min
    document.getElementById('vo2max').innerText = `Dein relativer VO₂max: ${vo2maxRelativ.toFixed(2)} ml/kg/min, absolut: ${vo2maxAbsolut.toFixed(2)} l/min`;
});


// Standardmäßig den Pace-Tab öffnen
openTab('pace');
