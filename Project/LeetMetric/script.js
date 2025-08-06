document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");

    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");

    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");

    const cardStatsContainer = document.querySelector(".stats-cards");
    const statsContainer = document.querySelector(".stats-container");

    // Validate the username format
    function validateUsername(username) {
        if (username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }

    // circular progress
    function updateProgress(solved, total, label, circle) {
        const progressPercent = total > 0 ? (solved / total) * 100 : 0;
        circle.style.setProperty("--progress-degree", `${progressPercent}%`);
        label.textContent = `${solved}/${total}`;
    }

    async function fetchLeetCodeStats(username) {
        const apiUrl = `https://leetcode-stats-api.herokuapp.com/${username}`;

        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status !== "success") {
                alert("User not found or API error.");
                return;
            }

            // Update circles
            updateProgress(data.easySolved, data.totalEasy, easyLabel, easyProgressCircle);
            updateProgress(data.mediumSolved, data.totalMedium, mediumLabel, mediumProgressCircle);
            updateProgress(data.hardSolved, data.totalHard, hardLabel, hardProgressCircle);

            // card data
            const cardsData = [
                { label: "Total Solved", value: data.totalSolved },
                { label: "Ranking", value: data.ranking },
                { label: "Easy Submissions", value: data.easySolved || 0 },
                { label: "Medium Submissions", value: data.mediumSolved || 0 },
                { label: "Hard Submissions", value: data.hardSolved || 0 },
                { label: "Contribution Points", value: data.contributionPoints || 0 },
            ];

            cardStatsContainer.innerHTML = cardsData
                .map(
                    (item) => `
                    <div class="card">
                        <h4>${item.label}</h4>
                        <p>${item.value}</p>
                    </div>
                `
                )
                .join("");

        } catch (error) {
            console.error("Fetch error:", error);
            statsContainer.innerHTML = `<p>${error.message}</p>`;
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    // search button
    searchButton.addEventListener("click", function () {
        const username = usernameInput.value.trim();
        if (validateUsername(username)) {
            fetchLeetCodeStats(username);
        }
    });
});
