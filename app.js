// Wir definieren die URL der Schnittstelle
const apiUrl = 'https://api.openligadb.de/getmatchdata/em/2024/';

// Funktion um die Match Informationen zu bekommen
async function fetchMatchData() {
    try {
        // Wir machen die API Anfrage
        const response = await fetch(apiUrl);
        
        // Wir schauen ob die Antwort in Ordnung ist
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Wir "parsen" die Antwort
        const data = await response.json();

        // ============== DEIN CODE HIER ==============









        // ============== ==============
    } catch (error) {
        // Logge Errors
        console.error('Error fetching match data:', error);
    }
}

// Wir rufen die Funktion auf
fetchMatchData();
