function checkInfluencer() {

    const url = document.getElementById("profileUrl").value;

    const result = document.getElementById("result");

    if (url === "") {

        result.innerHTML = `
            <p>❌ Wklej link do profilu.</p>
        `;

        return;
    }

    result.innerHTML = `
        <div class="card">

            <h2>🔎 Sprawdzanie...</h2>

            <p>
                Wkrótce tutaj pojawią się informacje o influencerze.
            </p>

        </div>
    `;
}
